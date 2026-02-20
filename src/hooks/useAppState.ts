import { useState, useCallback, useEffect, useRef } from "react";
import type { EntertainmentItem, Category } from "@/data/entertainment";
import { getAllData } from "@/data/entertainment";

export function useAppState() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [selectedItem, setSelectedItem] = useState<EntertainmentItem | null>(null);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const isPoppingState = useRef(false);

  // Push history state when opening detail
  const openDetail = useCallback((item: EntertainmentItem) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!isPoppingState.current) {
      window.history.pushState({ detailId: item.id }, "", `?detail=${item.id}`);
    }
  }, []);

  const closeDetail = useCallback(() => {
    setSelectedItem(null);
    if (!isPoppingState.current) {
      window.history.pushState({}, "", "/");
    }
  }, []);

  const handleGenreChange = useCallback((genre: string | null) => {
    setActiveGenre(genre);
  }, []);

  const handleGenreFromDetail = useCallback((genre: string) => {
    setSelectedItem(null);
    setActiveGenre(genre);
    if (!isPoppingState.current) {
      window.history.pushState({}, "", "/");
    }
  }, []);

  // Reset everything — used by logo click
  const goHome = useCallback(() => {
    setSelectedItem(null);
    setActiveCategory("all");
    setActiveGenre(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState({}, "", "/");
  }, []);

  // Listen to popstate (back/forward)
  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      isPoppingState.current = true;
      const state = e.state;
      if (state?.detailId) {
        const allItems = getAllData();
        const found = allItems.find((i) => i.id === state.detailId);
        if (found) {
          setSelectedItem(found);
          window.scrollTo({ top: 0 });
        }
      } else {
        setSelectedItem(null);
      }
      isPoppingState.current = false;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return {
    activeCategory,
    setActiveCategory,
    selectedItem,
    openDetail,
    closeDetail,
    activeGenre,
    setActiveGenre: handleGenreChange,
    handleGenreFromDetail,
    goHome,
  };
}
