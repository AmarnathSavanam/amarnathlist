import posterMarvel1 from "@/assets/poster-marvel-1.jpg";
import posterMarvel2 from "@/assets/poster-marvel-2.jpg";
import posterMarvel3 from "@/assets/poster-marvel-3.jpg";
import posterMarvel4 from "@/assets/poster-marvel-4.jpg";
import posterAnime1 from "@/assets/poster-anime-1.jpg";
import posterAnime2 from "@/assets/poster-anime-2.jpg";
import posterAnime3 from "@/assets/poster-anime-3.jpg";
import posterAnime4 from "@/assets/poster-anime-4.jpg";
import posterSeries1 from "@/assets/poster-series-1.jpg";
import posterSeries2 from "@/assets/poster-series-2.jpg";
import posterSeries3 from "@/assets/poster-series-3.jpg";
import posterSeries4 from "@/assets/poster-series-4.jpg";
import heroMarvel from "@/assets/hero-marvel.jpg";
import heroAnime from "@/assets/hero-anime.jpg";
import heroSeries from "@/assets/hero-series.jpg";
import { extendedAnimeData } from "./animeExtended";

export type Category = "marvel" | "series" | "anime";

export interface EntertainmentItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: Category;
  genres: string[];
  year: number;
  rating: number;
  poster: string;
  banner: string;
}

export const heroImages: Record<Category, string> = {
  marvel: heroMarvel,
  anime: heroAnime,
  series: heroSeries,
};

export const categoryLabels: Record<Category, string> = {
  marvel: "Marvel",
  anime: "Anime",
  series: "Series",
};

export const entertainmentData: EntertainmentItem[] = [
  // Marvel
  {
    id: "m1",
    title: "Shadow Protocol",
    tagline: "When darkness falls, heroes rise",
    description: "In a world where shadows hold ancient power, a former soldier discovers an artifact that grants extraordinary abilities. As a secret organization hunts him down, he must master his new powers before an interdimensional threat consumes everything he loves. An action-packed saga of courage, sacrifice, and the thin line between hero and villain.",
    category: "marvel",
    genres: ["Action", "Sci-Fi"],
    year: 2024,
    rating: 8.7,
    poster: posterMarvel1,
    banner: heroMarvel,
  },
  {
    id: "m2",
    title: "Crimson Guardian",
    tagline: "The shield that never breaks",
    description: "A legendary warrior forges an unbreakable shield from a fallen star, swearing to protect the realm from an ancient evil awakening beneath the earth. With allies from across the multiverse, the Crimson Guardian stands as humanity's last defense against annihilation.",
    category: "marvel",
    genres: ["Action", "Fantasy"],
    year: 2023,
    rating: 9.1,
    poster: posterMarvel2,
    banner: heroMarvel,
  },
  {
    id: "m3",
    title: "Void Walker",
    tagline: "Between worlds, beyond fear",
    description: "A mysterious figure with the ability to traverse dimensions discovers a conspiracy that threatens the fabric of reality itself. Walking the thin line between light and shadow, the Void Walker must confront their own dark past to save the multiverse from collapse.",
    category: "marvel",
    genres: ["Sci-Fi", "Thriller"],
    year: 2024,
    rating: 8.4,
    poster: posterMarvel3,
    banner: heroMarvel,
  },
  {
    id: "m4",
    title: "Omega Squadron",
    tagline: "United we stand, divided we fall",
    description: "Earth's mightiest heroes assemble for the final time as an extinction-level event threatens to erase all life. Omega Squadron brings together warriors, geniuses, and gods in a desperate battle where every choice could mean the end of everything.",
    category: "marvel",
    genres: ["Action", "Adventure"],
    year: 2025,
    rating: 9.3,
    poster: posterMarvel4,
    banner: heroMarvel,
  },
  // Anime
  {
    id: "a1",
    title:  "Naruto",
    tagline: "Believe it!",
    description:  "A young ninja outcast dreams of becoming the leader of his village, carrying a powerful beast sealed within him.",
    category: "anime",
    genres: ["Action", "Adventure"] ,
    year: 2002,
    rating: 8.6,
    poster: posterAnime2,
    banner: heroAnime,
  },
  {
    id: "a2",
    title:  "Dragon Ball",
    tagline: "Push beyond your limits",
    description: "A martial artist with extraordinary power protects Earth from increasingly powerful threats across the universe.", 
    category:  "anime", 
    genres: ["Action", "Adventure"], 
    year:  1986, 
    rating: 8.7,
    poster: posterAnime1,
    banner: heroAnime,
  },
  
  {
    id: "a3",
    title: "Iron Celestial",
    tagline: "Humanity's final weapon awakens",
    description: "When alien invaders overwhelm Earth's defenses, humanity's last hope lies in an ancient mecha buried beneath the ocean. A reluctant pilot must bond with the sentient machine, confronting trauma and sacrifice in an epic war for survival across the stars.",
    category: "anime",
    genres: ["Mecha", "Sci-Fi"],
    year: 2024,
    rating: 8.5,
    poster: posterAnime3,
    banner: heroAnime,
  },
  {
    id: "a4",
    title: "Moonlit Ronin",
    tagline: "Honor is earned in silence",
    description: "A disgraced samurai wanders feudal Japan seeking redemption for a sin he cannot remember. Guided by moonlight and haunted by spirits, he uncovers a supernatural conspiracy that connects his forgotten past to the fate of the entire nation.",
    category: "anime",
    genres: ["Action", "Historical"],
    year: 2023,
    rating: 9.2,
    poster: posterAnime4,
    banner: heroAnime,
  },
  // Series
 {
  id: "s1",
  title: "Dark",
  tagline: "Time is a closed loop. Escape is an illusion.",
  description:
    "In the small town of Winden, the disappearance of a child unravels a multi-generational conspiracy bound by time itself. As past, present, and future collide, four families confront fate, free will, and the haunting realization that every choice has already been made. A cerebral sci-fi noir about causality, grief, and the architecture of destiny.",
  category: "series",
  genres: ["Sci-Fi", "Mystery", "Psychological Thriller"],
  year: 2017,
  rating: 9.0,
  poster: posterSeries1,
  banner: heroSeries,
},
 {
  id: "s2",
  title: "12 Monkeys",
  tagline: "To save the future, rewrite the past.",
  description:
    "A time traveler from a post-apocalyptic future races across fractured timelines to stop the release of a virus that will end civilization. As paradoxes multiply and memories shift, the mission becomes a battle not just for humanity’s survival, but for the meaning of destiny itself. A kinetic sci-fi saga about sacrifice, causality, and the cost of changing time.",
  category: "series",
  genres: ["Sci-Fi", "Thriller", "Mystery"],
  year: 2015,
  rating: 8.7,
  poster: posterSeries2,
  banner: heroSeries2,
}{
  id: "s3",
  title: "From",
  tagline: "You can enter. You can’t leave.",
  description:
    "A mysterious town traps everyone who arrives, forcing strangers to build a fragile society while nightfall unleashes terrifying creatures from the surrounding forest. As they search for answers, hidden histories and cryptic forces suggest the town itself is a puzzle designed to be solved — or survived. A chilling blend of horror, mystery, and human resilience.",
  category: "series",
  genres: ["Horror", "Mystery", "Sci-Fi"],
  year: 2022,
  rating: 8.1,
  poster: posterSeries3,
  banner: heroSeries3,
},
 {
  id: "s4",
  title: "Breaking Bad",
  tagline: "Power is a choice. Consequences are inevitable.",
  description:
    "After a terminal diagnosis, a high school chemistry teacher partners with a former student to build a meth empire, transforming from a desperate provider into a calculating kingpin. As ambition eclipses morality, every victory deepens the cost to family, identity, and soul. A masterclass in character evolution, consequence, and the anatomy of power.",
  category: "series",
  genres: ["Crime", "Drama", "Thriller"],
  year: 2008,
  rating: 9.5,
  poster: posterSeries4,
  banner: heroSeries4,
},
];

export function getAllData(): EntertainmentItem[] {
  return [...entertainmentData, ...extendedAnimeData];
}

export function getItemsByCategory(category: Category): EntertainmentItem[] {
  return getAllData().filter((item) => item.category === category);
}

export function getRecommendations(item: EntertainmentItem, limit = 4): EntertainmentItem[] {
  const others = getAllData().filter((i) => i.id !== item.id);

  // Score by matching category and genres
  const scored = others.map((i) => {
    let score = 0;
    if (i.category === item.category) score += 2;
    const sharedGenres = i.genres.filter((g) => item.genres.includes(g)).length;
    score += sharedGenres;
    return { item: i, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}
