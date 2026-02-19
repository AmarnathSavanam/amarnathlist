import type { EntertainmentItem, Category } from "@/data/entertainment";
import EntertainmentCard from "./EntertainmentCard";

interface CardGridProps {
  items: EntertainmentItem[];
  onCardClick: (item: EntertainmentItem) => void;
  categoryLabel?: string;
}

export default function CardGrid({ items, onCardClick, categoryLabel }: CardGridProps) {
  if (items.length === 0) return null;

  return (
    <section className="mb-12">
      {categoryLabel && (
        <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
          {categoryLabel}
        </h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {items.map((item, i) => (
          <EntertainmentCard
            key={item.id}
            item={item}
            onClick={onCardClick}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
