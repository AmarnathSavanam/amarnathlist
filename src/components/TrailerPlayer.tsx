import { useState } from "react";
import { Play } from "lucide-react";

interface TrailerPlayerProps {
  trailerUrl: string;
  posterUrl: string;
  title: string;
}

export default function TrailerPlayer({ trailerUrl, posterUrl, title }: TrailerPlayerProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative" style={{ paddingBottom: "56.25%" }}>
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`${trailerUrl}?autoplay=1&rel=0`}
            title={`${title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group cursor-pointer"
            aria-label={`Play ${title} trailer`}
          >
            <img
              src={posterUrl}
              alt={`${title} trailer preview`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center transition-colors duration-200 group-hover:bg-background/30">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                <Play className="w-7 h-7 text-foreground ml-1" />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
