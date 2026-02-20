import type { Category } from "@/data/entertainment";
import { categoryLabels } from "@/data/entertainment";
import SearchBar from "./SearchBar";

interface HeaderProps {
  activeCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
  hasSelectedItem: boolean;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  onLogoClick: () => void;
}

const categories: (Category | "all")[] = ["all", "marvel", "series", "anime"];

const categoryStyles: Record<string, string> = {
  all: "text-foreground border-foreground",
  marvel: "text-marvel-glow border-marvel-glow",
  series: "text-series-glow border-series-glow",
  anime: "text-anime-glow border-anime-glow",
};

export default function Header({
  activeCategory,
  onCategoryChange,
  hasSelectedItem,
  searchQuery,
  onSearchChange,
  onSearchClear,
  onLogoClick,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: logo + nav */}
        <div className="flex items-center justify-between h-14">
          <button onClick={onLogoClick} className="font-display text-xl font-bold tracking-tight text-foreground shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-marvel">S</span>
            <span className="text-series">T</span>
            <span className="text-anime">R</span>
            EAM
          </button>

          {!hasSelectedItem && (
            <nav className="flex items-center gap-1 sm:gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => onCategoryChange(cat)}
                    className={`
                      px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium
                      transition-all duration-300 border border-transparent
                      ${isActive
                        ? `${categoryStyles[cat]} border-current bg-secondary`
                        : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    {cat === "all" ? "All" : categoryLabels[cat]}
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        {/* Search row */}
        {!hasSelectedItem && (
          <div className="flex justify-center pb-3">
            <SearchBar
              query={searchQuery}
              onChange={onSearchChange}
              onClear={onSearchClear}
            />
          </div>
        )}
      </div>
    </header>
  );
}
