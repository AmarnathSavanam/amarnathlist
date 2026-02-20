import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export default function SearchBar({ query, onChange, onClear }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-[420px] lg:max-w-[480px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search titles or genres…"
        className="
          w-full h-10 pl-9 pr-9
          rounded-lg
          glass-panel
          text-sm text-foreground placeholder:text-muted-foreground
          border border-border
          focus:outline-none focus:ring-1 focus:ring-ring
          transition-all duration-200
        "
      />
      {query && (
        <button
          onClick={onClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
