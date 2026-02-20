import Header from "@/components/Header";
import HeroSpotlight from "@/components/HeroSpotlight";
import ContentRow from "@/components/ContentRow";
import CardGrid from "@/components/CardGrid";
import DetailView from "@/components/DetailView";
import GenreFilter from "@/components/GenreFilter";
import { useAppState } from "@/hooks/useAppState";
import { useSearch } from "@/hooks/useSearch";
import {
  getItemsByCategory,
  getAllData,
  categoryLabels,
  type Category,
  type EntertainmentItem,
} from "@/data/entertainment";
import { useMemo } from "react";

const categories: Category[] = ["marvel", "series", "anime"];

/** Build genre-based rows from the full dataset */
function buildRows(items: EntertainmentItem[]) {
  const genreMap = new Map<string, EntertainmentItem[]>();
  items.forEach((item) => {
    item.genres.forEach((g) => {
      if (!genreMap.has(g)) genreMap.set(g, []);
      genreMap.get(g)!.push(item);
    });
  });

  const rows: { title: string; items: EntertainmentItem[] }[] = [];

  // Trending = highest rated
  const trending = [...items].sort((a, b) => b.rating - a.rating).slice(0, 12);
  rows.push({ title: "Trending Now", items: trending });

  // Category rows
  categories.forEach((cat) => {
    const catItems = items.filter((i) => i.category === cat);
    if (catItems.length > 0) {
      rows.push({ title: categoryLabels[cat], items: catItems });
    }
  });

  // Genre rows
  genreMap.forEach((genreItems, genre) => {
    if (genreItems.length >= 3) {
      rows.push({ title: genre, items: genreItems });
    }
  });

  return rows;
}

const Index = () => {
  const {
    activeCategory, setActiveCategory,
    selectedItem, openDetail, closeDetail,
    activeGenre, setActiveGenre, handleGenreFromDetail,
    goHome,
  } = useAppState();

  const allItems = useMemo(() => getAllData(), []);

  // Get items for current view
  const categoryItems = useMemo(() =>
    activeCategory === "all" ? allItems : getItemsByCategory(activeCategory),
    [activeCategory, allItems]
  );

  // Apply genre filter
  const genreFiltered = useMemo(() => {
    if (!activeGenre) return categoryItems;
    return categoryItems.filter((item) =>
      item.genres.some((g) => g.toLowerCase() === activeGenre.toLowerCase())
    );
  }, [categoryItems, activeGenre]);

  const { query, setQuery, clearSearch, filtered, isSearching } = useSearch(genreFiltered);

  // Hero spotlight item — highest rated in current category
  const heroItem = useMemo(() => {
    const pool = activeCategory === "all" ? allItems : getItemsByCategory(activeCategory);
    return pool.reduce((best, item) => (item.rating > best.rating ? item : best), pool[0]);
  }, [activeCategory, allItems]);

  // Build Netflix-style rows
  const rows = useMemo(() => buildRows(categoryItems), [categoryItems]);

  // Reset search + genre when category changes
  const handleCategoryChange = (cat: Category | "all") => {
    clearSearch();
    setActiveGenre(null);
    setActiveCategory(cat);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        hasSelectedItem={!!selectedItem}
        searchQuery={query}
        onSearchChange={setQuery}
        onSearchClear={clearSearch}
        onLogoClick={goHome}
      />

      {selectedItem ? (
        <main className="pt-14">
          <DetailView
            item={selectedItem}
            onBack={closeDetail}
            onCardClick={openDetail}
            onGenreClick={handleGenreFromDetail}
          />
        </main>
      ) : (
        <main>
          {/* Hero — only when not searching or filtering */}
          {!isSearching && !activeGenre && heroItem && (
            <HeroSpotlight
              item={heroItem}
              onPlay={openDetail}
              onMoreInfo={openDetail}
            />
          )}

          {/* Search / filter results */}
          {isSearching ? (
            <div className="px-4 sm:px-6 lg:px-12 pt-6 pb-12">
              {filtered.length > 0 ? (
                <CardGrid
                  items={filtered}
                  onCardClick={openDetail}
                  categoryLabel={`Results for "${query}"`}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
                  <p className="font-display text-xl text-muted-foreground mb-2">
                    No titles found
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Try a different search term or browse categories above.
                  </p>
                </div>
              )}
            </div>
          ) : activeGenre ? (
            <div className="px-4 sm:px-6 lg:px-12 pt-6 pb-12">
              <GenreFilter
                items={categoryItems}
                activeGenre={activeGenre}
                onGenreChange={setActiveGenre}
              />
              <CardGrid
                items={genreFiltered}
                onCardClick={openDetail}
                categoryLabel={
                  `${activeGenre}${activeCategory !== "all" ? ` in ${categoryLabels[activeCategory]}` : ""}`
                }
              />
            </div>
          ) : (
            /* Netflix-style rows */
            <div className={heroItem ? "-mt-16 relative z-10 pb-12" : "pt-20 pb-12"}>
              {/* Genre chips */}
              <div className="px-4 sm:px-6 lg:px-12 mb-4">
                <GenreFilter
                  items={categoryItems}
                  activeGenre={activeGenre}
                  onGenreChange={setActiveGenre}
                />
              </div>

              {rows.map((row) => (
                <ContentRow
                  key={row.title}
                  title={row.title}
                  items={row.items}
                  onCardClick={openDetail}
                />
              ))}
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default Index;
