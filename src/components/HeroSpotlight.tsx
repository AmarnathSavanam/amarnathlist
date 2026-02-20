import { Play, Info } from "lucide-react";
import type { EntertainmentItem } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface HeroSpotlightProps {
  item: EntertainmentItem;
  onPlay: (item: EntertainmentItem) => void;
  onMoreInfo: (item: EntertainmentItem) => void;
}

export default function HeroSpotlight({ item, onPlay, onMoreInfo }: HeroSpotlightProps) {
  const images = resolveImages(item.title, item.poster, item.banner, item.category);

  return (
    <section className="relative w-full h-[60vh] sm:h-[65vh] lg:h-[70vh] overflow-hidden">
      {/* Background image */}
      <img
        src={images.banner}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-[12%] sm:bottom-[15%] left-0 right-0 px-4 sm:px-6 lg:px-12 max-w-2xl animate-fade-in">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-2 sm:mb-3">
          {item.title}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground line-clamp-3 mb-4 sm:mb-6 max-w-lg">
          {item.description}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onPlay(item)}
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-foreground text-background font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-foreground/90 active:scale-95"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            Play
          </button>
          <button
            onClick={() => onMoreInfo(item)}
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md glass-panel font-semibold text-sm sm:text-base text-foreground transition-all duration-200 hover:bg-secondary active:scale-95"
          >
            <Info className="w-4 h-4 sm:w-5 sm:h-5" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
