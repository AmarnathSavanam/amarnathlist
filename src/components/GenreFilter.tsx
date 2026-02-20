import { useMemo } from "react";
import type { EntertainmentItem } from "@/data/entertainment";

interface GenreFilterProps {
  items: EntertainmentItem[];
  activeGenre: string | null;
  onGenreChange: (genre: string | null) => void;
}

export default function GenreFilter({ items, activeGenre, onGenreChange }: GenreFilterProps) {
  const genres = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => item.genres.forEach((g) => set.add(g)));
    return Array.from(set).sort();
  }, [items]);

  if (genres.length === 0) return null;

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide sm:flex-wrap sm:overflow-visible pb-1 sm:pb-0">
      <button
        onClick={() => onGenreChange(null)}
        className={`
          px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
          ${!activeGenre
            ? "bg-secondary text-foreground border-foreground/20"
            : "text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
          }
        `}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreChange(activeGenre === genre ? null : genre)}
          className={`
            px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
            ${activeGenre === genre
              ? "bg-secondary text-foreground border-foreground/20"
              : "text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
            }
          `}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
