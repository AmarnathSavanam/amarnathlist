import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import type { EntertainmentItem } from "@/data/entertainment";

export function useSearch(items: EntertainmentItem[], delay = 200) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleChange = useCallback(
    (value: string) => {
      setQuery(value);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setDebouncedQuery(value), delay);
    },
    [delay]
  );

  const clearSearch = useCallback(() => {
    setQuery("");
    setDebouncedQuery("");
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  // Clean up timer
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.genres.some((g) => g.toLowerCase().includes(q))
    );
  }, [items, debouncedQuery]);

  return { query, setQuery: handleChange, clearSearch, filtered, isSearching: debouncedQuery.trim().length > 0 };
}
