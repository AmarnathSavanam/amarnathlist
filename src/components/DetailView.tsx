import { ArrowLeft } from "lucide-react";
import type { EntertainmentItem, Category } from "@/data/entertainment";
import { getRecommendations } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";
import { resolveTrailer } from "@/data/trailerRegistry";
import EntertainmentCard from "./EntertainmentCard";
import TrailerPlayer from "./TrailerPlayer";

interface DetailViewProps {
  item: EntertainmentItem;
  onBack: () => void;
  onCardClick: (item: EntertainmentItem) => void;
  onGenreClick?: (genre: string) => void;
}

const accentText: Record<Category, string> = {
  marvel: "text-gradient-marvel",
  anime: "text-gradient-anime",
  series: "text-gradient-series",
};

const accentBadge: Record<Category, string> = {
  marvel: "bg-marvel/20 text-marvel-glow border-marvel/30",
  anime: "bg-anime/20 text-anime-glow border-anime/30",
  series: "bg-series/20 text-series-glow border-series/30",
};

export default function DetailView({ item, onBack, onCardClick, onGenreClick }: DetailViewProps) {
  const recommendations = getRecommendations(item, 4);
  const images = resolveImages(item.title, item.poster, item.banner, item.category);
  const trailerUrl = resolveTrailer(item.title);

  return (
    <div className="animate-fade-in-scale">
      {/* Banner */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={images.banner}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-20 left-4 sm:left-8 glass-panel rounded-full p-2.5 transition-all duration-200 hover:bg-secondary text-foreground"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
          <h1 className={`font-display text-3xl sm:text-5xl lg:text-6xl font-bold ${accentText[item.category]} mb-3`}>
            {item.title}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground italic max-w-xl">
            {item.tagline}
          </p>
        </div>
      </div>

      {/* Content — two-column on desktop */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Left column: trailer */}
          <div>
            {/* Trailer */}
            {trailerUrl && (
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Trailer</h3>
                <TrailerPlayer
                  trailerUrl={trailerUrl}
                  posterUrl={images.banner}
                  title={item.title}
                />
              </div>
            )}
          </div>

          {/* Right column: metadata + description */}
          <div>
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-foreground">
                ★ {item.rating}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span className="text-sm text-muted-foreground">{item.year}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              {item.genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => onGenreClick?.(genre)}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors duration-200 hover:opacity-80 ${accentBadge[item.category]}`}
                >
                  {genre}
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-16">
              <p className="text-sm sm:text-base leading-relaxed text-secondary-foreground">
                {item.description}
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations — full width */}
        {recommendations.length > 0 && (
          <section className="pb-16">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-6">
              Recommended for you
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {recommendations.map((rec, i) => (
                <EntertainmentCard
                  key={rec.id}
                  item={rec}
                  onClick={onCardClick}
                  index={i}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
