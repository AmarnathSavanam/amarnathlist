import type { EntertainmentItem, Category } from "@/data/entertainment";

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
  return (
    <button
      onClick={() => onClick(item)}
      className={`
        group relative overflow-hidden rounded-xl border border-border
        bg-card card-hover text-left w-full
        ${accentBorders[item.category]}
        animate-fade-in
      `}
      style={{ animationDelay: `${index * 80}ms`, opacity: 0 }}
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={item.poster}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Category gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${overlayGradients[item.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {/* Bottom info overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 pt-12">
          <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {item.tagline}
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {item.year}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="text-[10px] font-medium text-muted-foreground">
              ★ {item.rating}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
