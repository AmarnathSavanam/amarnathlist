import { useState, useCallback } from "react";
import type { EntertainmentItem, Category } from "@/data/entertainment";

export function useAppState() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [selectedItem, setSelectedItem] = useState<EntertainmentItem | null>(null);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  const openDetail = useCallback((item: EntertainmentItem) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const closeDetail = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const handleGenreChange = useCallback((genre: string | null) => {
    setActiveGenre(genre);
  }, []);

  const handleGenreFromDetail = useCallback((genre: string) => {
    setSelectedItem(null);
    setActiveGenre(genre);
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
  };
}
