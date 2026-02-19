import type { EntertainmentItem, Category } from "@/data/entertainment";
import { resolveImages } from "@/data/imageRegistry";

interface EntertainmentCardProps {
  item: EntertainmentItem;
  onClick: (item: EntertainmentItem) => void;
  index: number;
}

const overlayGradients: Record<Category, string> = {
  marvel: "from-marvel/60 via-transparent to-transparent",
  anime: "from-anime/60 via-transparent to-transparent",
  series: "from-series/60 via-transparent to-transparent",
};

const accentBorders: Record<Category, string> = {
  marvel: "hover:border-marvel/40",
  anime: "hover:border-anime/40",
  series: "hover:border-series/40",
};

export default function EntertainmentCard({ item, onClick, index }: EntertainmentCardProps) {
  const images = resolveImages(item.title, item.poster, item.banner);

  return (
    <button
      onClick={() => onClick(item)}
      className={`
        group relative overflow-hidden rounded-xl border border-border
        bg-card text-left w-full
        ${accentBorders[item.category]}
        animate-fade-in
        transition-all duration-300 ease-out
        active:scale-[0.97] hover:scale-[1.03] hover:shadow-[var(--shadow-elevated)]
      `}
      style={{ animationDelay: `${index * 60}ms`, opacity: 0 }}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={images.poster}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Category gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${overlayGradients[item.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />

      {/* Bottom info overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-2.5 sm:p-4 pt-8 sm:pt-12">
          <h3 className="font-display text-sm sm:text-lg font-semibold text-foreground leading-tight line-clamp-1">
            {item.title}
          </h3>
          <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-muted-foreground line-clamp-1 sm:line-clamp-2">
            {item.tagline}
          </p>

          <div className="mt-1 sm:mt-2 flex items-center gap-1.5 sm:gap-2">
            <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {item.year}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground">
              ★ {item.rating}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
