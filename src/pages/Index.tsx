import Header from "@/components/Header";
import CardGrid from "@/components/CardGrid";
import DetailView from "@/components/DetailView";
import { useAppState } from "@/hooks/useAppState";
import {
  entertainmentData,
  getItemsByCategory,
  categoryLabels,
  type Category,
} from "@/data/entertainment";

const categories: Category[] = ["marvel", "series", "anime"];

const Index = () => {
  const { activeCategory, setActiveCategory, selectedItem, openDetail, closeDetail } =
    useAppState();

  return (
    <div className="min-h-screen bg-background">
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        hasSelectedItem={!!selectedItem}
      />

      <main className="pt-16">
        {selectedItem ? (
          <DetailView
            item={selectedItem}
            onBack={closeDetail}
            onCardClick={openDetail}
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

            {activeCategory === "all" ? (
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
                items={getItemsByCategory(activeCategory)}
                onCardClick={openDetail}
                categoryLabel={categoryLabels[activeCategory]}
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
