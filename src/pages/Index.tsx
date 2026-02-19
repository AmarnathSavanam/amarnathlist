import Header from "@/components/Header";
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
} from "@/data/entertainment";
import { useMemo } from "react";

const categories: Category[] = ["marvel", "series", "anime"];

const Index = () => {
  const {
    activeCategory, setActiveCategory,
    selectedItem, openDetail, closeDetail,
    activeGenre, setActiveGenre, handleGenreFromDetail,
  } = useAppState();

  // Get items for current view
  const categoryItems = useMemo(() =>
    activeCategory === "all" ? getAllData() : getItemsByCategory(activeCategory),
    [activeCategory]
  );

  // Apply genre filter
  const genreFiltered = useMemo(() => {
    if (!activeGenre) return categoryItems;
    return categoryItems.filter((item) =>
      item.genres.some((g) => g.toLowerCase() === activeGenre.toLowerCase())
    );
  }, [categoryItems, activeGenre]);

  const { query, setQuery, clearSearch, filtered, isSearching } = useSearch(genreFiltered);

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
      />

      <main className="pt-28">
        {selectedItem ? (
          <DetailView
            item={selectedItem}
            onBack={closeDetail}
            onCardClick={openDetail}
            onGenreClick={handleGenreFromDetail}
          />
        ) : (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Hero text */}
            <div className="mb-10 sm:mb-14">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3">
                Discover your next
                <br />
                <span className="text-gradient-marvel">obsession</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md">
                Explore curated titles across Marvel, Series, and Anime — handpicked for you.
              </p>
            </div>

            {/* Genre filter chips */}
            <GenreFilter
              items={categoryItems}
              activeGenre={activeGenre}
              onGenreChange={setActiveGenre}
            />

            {isSearching ? (
              filtered.length > 0 ? (
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
              )
            ) : activeCategory === "all" && !activeGenre ? (
              categories.map((cat) => (
                <CardGrid
                  key={cat}
                  items={getItemsByCategory(cat)}
                  onCardClick={openDetail}
                  categoryLabel={categoryLabels[cat]}
                />
              ))
            ) : (
              <CardGrid
                items={filtered}
                onCardClick={openDetail}
                categoryLabel={
                  activeGenre
                    ? `${activeGenre}${activeCategory !== "all" ? ` in ${categoryLabels[activeCategory]}` : ""}`
                    : categoryLabels[activeCategory as Category]
                }
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
