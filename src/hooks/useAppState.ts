import { useState, useCallback } from "react";
import type { EntertainmentItem, Category } from "@/data/entertainment";

export function useAppState() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [selectedItem, setSelectedItem] = useState<EntertainmentItem | null>(null);

  const openDetail = useCallback((item: EntertainmentItem) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const closeDetail = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return {
    activeCategory,
    setActiveCategory,
    selectedItem,
    openDetail,
    closeDetail,
  };
}
