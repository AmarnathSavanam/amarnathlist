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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background via-background/80 to-transparent">
      <div className="px-4 sm:px-6 lg:px-12">
        {/* Top row: logo + nav + search */}
        <div className="flex items-center gap-4 h-14">
          <button onClick={onLogoClick} className="font-display text-xl font-bold tracking-tight text-foreground shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-marvel">S</span>
            <span className="text-series">T</span>
            <span className="text-anime">R</span>
            EAM
          </button>

          {!hasSelectedItem && (
            <>
              <nav className="flex items-center gap-1 sm:gap-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => onCategoryChange(cat)}
                      className={`
                        px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium
                        transition-all duration-200
                        ${isActive
                          ? `text-foreground bg-secondary/80`
                          : "text-muted-foreground hover:text-foreground"
                        }
                      `}
                    >
                      {cat === "all" ? "All" : categoryLabels[cat]}
                    </button>
                  );
                })}
              </nav>

              <div className="ml-auto">
                <SearchBar
                  query={searchQuery}
                  onChange={onSearchChange}
                  onClear={onSearchClear}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
