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
  title: "Eyes of Wakanda",
  tagline: "Across centuries, Wakanda watches.",
  description:
    "Elite Wakandan warriors known as the Hatut Zeraze undertake covert missions across history to retrieve dangerous vibranium artifacts before they reshape the world. Each mission reveals hidden chapters of Wakanda’s influence, blending espionage, heritage, and technological myth. An expansive Marvel saga about legacy, responsibility, and the unseen guardians of global balance.",
  category: ["marvel", "series"],
  genres: ["Action", "Adventure", "Sci-Fi"],
  year: 2025,
  rating: 8.5,
  poster: posterMarvel1,
  banner: heroMarvel,
},
 {
  id: "m2",
  title: "Captain America: The First Avenger",
  tagline: "A hero forged in courage, not power.",
  description:
    "During World War II, a determined but underestimated young man volunteers for an experimental program that transforms him into a super-soldier. As Captain America, he battles Hydra’s rise and the enigmatic Red Skull, becoming a symbol of hope in humanity’s darkest hour. An origin story of bravery, sacrifice, and the ideals worth fighting for.",
  category: ["marvel", "movie"],
  genres: ["Action", "Adventure", "Sci-Fi"],
  year: 2011,
  rating: 6.9,
  poster: posterMarvel2,
  banner: heroMarvel2,
},
 {
  id: "s1",
  title: "Agent Carter Season 1",
  tagline: "The war ended. Her mission didn’t.",
  description:
    "Peggy Carter navigates post-war espionage while proving her worth in a male-dominated agency, uncovering threats that could destabilize a fragile world order.",
  category: ["marvel","series"],
  genres: ["Action","Adventure","Drama"],
  year: 2015,
  rating: 7.9,
  poster: posterSeries1,
  banner: heroSeries1,
},
{
  id: "s2",
  title: "Agent Carter Season 2",
  tagline: "New city. Same unstoppable resolve.",
  description:
    "Relocating to Los Angeles, Peggy confronts a mysterious new threat tied to zero matter, expanding the early mythology of the Marvel universe.",
  category: ["marvel","series"],
  genres: ["Action","Adventure","Drama"],
  year: 2016,
  rating: 7.9,
  poster: posterSeries2,
  banner: heroSeries2,
},
{
  id: "m3",
  title: "X-Men: First Class",
  tagline: "Before they were legends, they were allies.",
  description:
    "Charles Xavier and Erik Lehnsherr unite mutants for the first time, forging the X-Men amid Cold War tensions that shape their future rivalry.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2011,
  rating: 7.7,
  poster: posterMarvel3,
  banner: heroMarvel3,
},
{
  id: "m4",
  title: "X-Men Origins: Wolverine",
  tagline: "Every hero has a violent beginning.",
  description:
    "Logan’s past unfolds through war, experimentation, and betrayal, revealing the painful creation of the adamantium-clawed mutant.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2009,
  rating: 6.5,
  poster: posterMarvel4,
  banner: heroMarvel4,
},
{
  id: "m5",
  title: "Howard the Duck",
  tagline: "Out of his world. Into ours.",
  description:
    "A wise-cracking duck from another dimension lands on Earth, stumbling into a quirky battle against cosmic forces threatening the planet.",
  category: ["marvel","movie"],
  genres: ["Comedy","Sci-Fi"],
  year: 1986,
  rating: 4.7,
  poster: posterMarvel5,
  banner: heroMarvel5,
},
{
  id: "m6",
  title: "Captain Marvel",
  tagline: "Higher. Further. Faster.",
  description:
    "A former pilot gains cosmic powers amid an intergalactic conflict, discovering her past while becoming one of Earth’s most powerful defenders.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2019,
  rating: 6.8,
  poster: posterMarvel6,
  banner: heroMarvel6,
},
{
  id: "m7",
  title: "Blade",
  tagline: "Half mortal. Full hunter.",
  description:
    "A vampire-hunter walks the line between two worlds, waging war against a secret vampire underworld threatening humanity.",
  category: ["marvel","movie"],
  genres: ["Action","Horror"],
  year: 1998,
  rating: 7.1,
  poster: posterMarvel7,
  banner: heroMarvel7,
},
{
  id: "m8",
  title: "X-Men",
  tagline: "Evolution begins.",
  description:
    "Mutants with extraordinary abilities clash over coexistence with humanity, igniting a conflict that will define their future.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2000,
  rating: 7.4,
  poster: posterMarvel8,
  banner: heroMarvel8,
},
{
  id: "m9",
  title: "Spider-Man",
  tagline: "With great power comes great responsibility.",
  description:
    "After gaining spider-like abilities, Peter Parker embraces heroism while facing the Green Goblin and the cost of responsibility.",
  category: ["marvel","movie"],
  genres: ["Action","Adventure"],
  year: 2002,
  rating: 7.4,
  poster: posterMarvel9,
  banner: heroMarvel9,
},
{
  id: "m10",
  title: "X2: X-Men United",
  tagline: "The future is coming.",
  description:
    "Mutants and humans must unite against a common enemy as fear and prejudice threaten both sides.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2003,
  rating: 7.4,
  poster: posterMarvel10,
  banner: heroMarvel10,
},
{
  id: "m11",
  title: "Elektra",
  tagline: "Born again to fight.",
  description:
    "The deadly assassin returns from the brink of death and becomes the protector of a young girl destined for a greater battle.",
  category: ["marvel","movie"],
  genres: ["Action","Fantasy"],
  year: 2005,
  rating: 4.7,
  poster: posterMarvel11,
  banner: heroMarvel11,
},
{
  id: "m12",
  title: "Daredevil",
  tagline: "Justice is blind.",
  description:
    "A blind lawyer with heightened senses fights crime by night, confronting the ruthless Kingpin in Hell’s Kitchen.",
  category: ["marvel","movie"],
  genres: ["Action","Crime"],
  year: 2003,
  rating: 6.3,
  poster: posterMarvel12,
  banner: heroMarvel12,
},
{
  id: "m13",
  title: "The Punisher",
  tagline: "Vengeance has a new name.",
  description:
    "After losing everything, Frank Castle wages a one-man war on crime, becoming the embodiment of ruthless justice.",
  category: ["marvel","movie"],
  genres: ["Action","Crime"],
  year: 2004,
  rating: 6.4,
  poster: posterMarvel13,
  banner: heroMarvel13,
},
{
  id: "m14",
  title: "Spider-Man 2",
  tagline: "A hero tested beyond limits.",
  description:
    "Peter struggles to balance life and heroism while facing the brilliant and dangerous Doctor Octopus.",
  category: ["marvel","movie"],
  genres: ["Action","Adventure"],
  year: 2004,
  rating: 7.9,
  poster: posterMarvel14,
  banner: heroMarvel14,
},
{
  id: "m15",
  title: "Fantastic Four",
  tagline: "Four heroes. One destiny.",
  description:
    "After a cosmic accident grants them powers, four astronauts must learn teamwork to stop the rise of Doctor Doom.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2005,
  rating: 5.7,
  poster: posterMarvel15,
  banner: heroMarvel15,
},{
  id: "m16",
  title: "Fantastic Four: Rise of the Silver Surfer",
  tagline: "A herald arrives before the end.",
  description:
    "As a cosmic being warns of planetary destruction, the Fantastic Four must decipher his purpose before Earth faces annihilation.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2007,
  rating: 5.6,
  poster: posterMarvel16,
  banner: heroMarvel16,
},
{
  id: "m17",
  title: "X-Men: The Last Stand",
  tagline: "Choose your side.",
  description:
    "A cure for mutation ignites conflict between mutants and humanity, forcing the X-Men to confront their most devastating battle.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2006,
  rating: 6.6,
  poster: posterMarvel17,
  banner: heroMarvel17,
},
{
  id: "m18",
  title: "Ghost Rider",
  tagline: "His curse is his weapon.",
  description:
    "Stunt rider Johnny Blaze becomes the fiery spirit of vengeance, battling demonic forces for control of his soul.",
  category: ["marvel","movie"],
  genres: ["Action","Fantasy"],
  year: 2007,
  rating: 5.3,
  poster: posterMarvel18,
  banner: heroMarvel18,
},
{
  id: "m19",
  title: "Ghost Rider: Spirit of Vengeance",
  tagline: "Vengeance burns brighter.",
  description:
    "Hiding in Eastern Europe, Blaze is drawn into protecting a boy from a powerful demonic entity seeking ultimate power.",
  category: ["marvel","movie"],
  genres: ["Action","Fantasy"],
  year: 2011,
  rating: 4.3,
  poster: posterMarvel19,
  banner: heroMarvel19,
},
{
  id: "m20",
  title: "Spider-Man 3",
  tagline: "The battle within begins.",
  description:
    "Peter faces new villains and a darker side of himself as the symbiote amplifies his inner conflict.",
  category: ["marvel","movie"],
  genres: ["Action","Adventure"],
  year: 2007,
  rating: 6.3,
  poster: posterMarvel20,
  banner: heroMarvel20,
},
{
  id: "m21",
  title: "The Incredible Hulk",
  tagline: "You wouldn’t like him when he’s angry.",
  description:
    "Bruce Banner searches for a cure while evading the military and confronting a powerful new enemy, the Abomination.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2008,
  rating: 6.6,
  poster: posterMarvel21,
  banner: heroMarvel21,
},
{
  id: "m22",
  title: "Iron Man",
  tagline: "Heroes aren’t born. They’re built.",
  description:
    "A genius billionaire builds a high-tech suit to escape captivity, redefining heroism and launching a new era.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2008,
  rating: 7.9,
  poster: posterMarvel22,
  banner: heroMarvel22,
},
{
  id: "m23",
  title: "Iron Man 2",
  tagline: "It’s not the armor that makes the hero.",
  description:
    "Tony Stark faces government pressure, a vengeful rival, and his own mortality as new threats emerge.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2010,
  rating: 7.0,
  poster: posterMarvel23,
  banner: heroMarvel23,
},
{
  id: "m24",
  title: "Hulk",
  tagline: "Unleash the rage.",
  description:
    "A scientist’s experiment unleashes a monstrous alter ego, exploring the psychological cost of power.",
  category: ["marvel","movie"],
  genres: ["Action","Drama"],
  year: 2003,
  rating: 5.6,
  poster: posterMarvel24,
  banner: heroMarvel24,
},
{
  id: "m25",
  title: "Thor",
  tagline: "Two worlds. One hero.",
  description:
    "Banished to Earth, the God of Thunder must prove himself worthy while confronting a looming threat to Asgard.",
  category: ["marvel","movie"],
  genres: ["Action","Fantasy"],
  year: 2011,
  rating: 7.0,
  poster: posterMarvel25,
  banner: heroMarvel25,
},

{
  id: "m26",
  title: "The Avengers",
  tagline: "Earth’s mightiest unite.",
  description:
    "Nick Fury assembles a team of heroes to stop Loki and an alien invasion, proving the power of unity.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2012,
  rating: 8.0,
  poster: posterMarvel26,
  banner: heroMarvel26,
},
{
  id: "s3",
  title: "Agents of S.H.I.E.L.D.",
  tagline: "The mission continues.",
  description:
    "Agent Coulson leads a covert team tackling global threats tied to superhuman events across the MCU.",
  category: ["marvel","series"],
  genres: ["Action","Sci-Fi","Drama"],
  year: 2013,
  rating: 7.5,
  poster: posterSeries3,
  banner: heroSeries3,
},

{
  id: "m27",
  title: "Thor: The Dark World",
  tagline: "The universe faces the darkness.",
  description:
    "Thor battles the ancient Dark Elves to stop a force capable of plunging the cosmos into eternal night.",
  category: ["marvel","movie"],
  genres: ["Action","Fantasy"],
  year: 2013,
  rating: 6.8,
  poster: posterMarvel27,
  banner: heroMarvel27,
},
{
  id: "m28",
  title: "The Wolverine",
  tagline: "Honor cuts deeper than steel.",
  description:
    "Logan journeys to Japan, confronting his past and the limits of his immortality.",
  category: ["marvel","movie"],
  genres: ["Action","Drama"],
  year: 2013,
  rating: 6.7,
  poster: posterMarvel28,
  banner: heroMarvel28,
},
{
  id: "m29",
  title: "X-Men: Days of Future Past",
  tagline: "Change the past. Save the future.",
  description:
    "The X-Men send Wolverine back in time to prevent a catastrophic future ruled by Sentinels.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2014,
  rating: 7.9,
  poster: posterMarvel29,
  banner: heroMarvel29,
},
{
  id: "m30",
  title: "X-Men: Apocalypse",
  tagline: "Only the strong survive.",
  description:
    "The world’s first mutant awakens to reshape humanity, forcing the X-Men into a battle for survival.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2016,
  rating: 6.9,
  poster: posterMarvel30,
  banner: heroMarvel30,
},
{
  id: "m31",
  title: "X-Men: Dark Phoenix",
  tagline: "Every hero has a breaking point.",
  description:
    "Jean Grey’s powers spiral beyond control, threatening both her team and the planet.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2019,
  rating: 5.7,
  poster: posterMarvel31,
  banner: heroMarvel31,
},
{
  id: "m32",
  title: "The Amazing Spider-Man",
  tagline: "The untold story begins.",
  description:
    "Peter Parker uncovers secrets about his parents while becoming Spider-Man and facing the Lizard.",
  category: ["marvel","movie"],
  genres: ["Action","Adventure"],
  year: 2012,
  rating: 6.9,
  poster: posterMarvel32,
  banner: heroMarvel32,
},
{
  id: "m33",
  title: "Iron Man 3",
  tagline: "Heroes fall. Legends rise.",
  description:
    "Tony confronts his fears and a mysterious terrorist threat that challenges his identity beyond the suit.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2013,
  rating: 7.1,
  poster: posterMarvel33,
  banner: heroMarvel33,
},
{
  id: "m34",
  title: "Captain America: The Winter Soldier",
  tagline: "Trust no one.",
  description:
    "Steve Rogers uncovers a conspiracy within S.H.I.E.L.D., facing a deadly assassin from his past.",
  category: ["marvel","movie"],
  genres: ["Action","Thriller"],
  year: 2014,
  rating: 8.1,
  poster: posterMarvel34,
  banner: heroMarvel34,
},
{
  id: "m35",
  title: "The Amazing Spider-Man 2",
  tagline: "His greatest battle begins.",
  description:
    "Peter faces new enemies while grappling with destiny, love, and the price of being a hero.",
  category: ["marvel","movie"],
  genres: ["Action","Adventure"],
  year: 2014,
  rating: 6.6,
  poster: posterMarvel35,
  banner: heroMarvel35,
},
{
  id: "m36",
  title: "Guardians of the Galaxy",
  tagline: "Outlaws save the galaxy.",
  description:
    "A group of misfits band together to protect a powerful artifact, forming an unlikely family.",
  category: ["marvel","movie"],
  genres: ["Action","Adventure","Sci-Fi"],
  year: 2014,
  rating: 8.0,
  poster: posterMarvel36,
  banner: heroMarvel36,
},{
  id: "m37",
  title: "Guardians of the Galaxy Vol. 2",
  tagline: "Family is cosmic.",
  description:
    "The Guardians unravel Peter Quill’s origins while confronting the meaning of family and identity across the galaxy.",
  category: ["marvel","movie"],
  genres: ["Action","Adventure","Sci-Fi"],
  year: 2017,
  rating: 7.6,
  poster: posterMarvel37,
  banner: heroMarvel37,
},
{
  id: "s4",
  title: "Daredevil Season 1",
  tagline: "Justice is blind.",
  description:
    "Matt Murdock wages a one-man war on crime in Hell’s Kitchen while Wilson Fisk rises to power.",
  category: ["marvel","series"],
  genres: ["Crime","Action","Drama"],
  year: 2015,
  rating: 8.6,
  poster: posterSeries4,
  banner: heroSeries4,
},
{
  id: "s5",
  title: "Jessica Jones",
  tagline: "Power doesn’t heal trauma.",
  description:
    "A private investigator with super strength confronts her past and a terrifying mind-controlling enemy.",
  category: ["marvel","series"],
  genres: ["Crime","Drama"],
  year: 2015,
  rating: 7.9,
  poster: posterSeries5,
  banner: heroSeries5,
},
{
  id: "m38",
  title: "Avengers: Age of Ultron",
  tagline: "A new enemy rises from within.",
  description:
    "Tony Stark’s AI experiment spirals into a global threat, forcing the Avengers to fight for humanity’s future.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2015,
  rating: 7.3,
  poster: posterMarvel38,
  banner: heroMarvel38,
},
{
  id: "m39",
  title: "Ant-Man",
  tagline: "Small hero. Big mission.",
  description:
    "Scott Lang masters shrinking tech to pull off a heist that could save the world.",
  category: ["marvel","movie"],
  genres: ["Action","Comedy","Sci-Fi"],
  year: 2015,
  rating: 7.3,
  poster: posterMarvel39,
  banner: heroMarvel39,
},
{
  id: "s6",
  title: "Luke Cage",
  tagline: "Hero of Harlem.",
  description:
    "With unbreakable skin, Luke Cage becomes a symbol of resistance against crime and corruption.",
  category: ["marvel","series"],
  genres: ["Action","Crime"],
  year: 2016,
  rating: 7.3,
  poster: posterSeries6,
  banner: heroSeries6,
},
{
  id: "s7",
  title: "Daredevil Season 2",
  tagline: "Justice faces vengeance.",
  description:
    "Matt confronts the Punisher and Elektra, challenging his moral boundaries.",
  category: ["marvel","series"],
  genres: ["Crime","Action"],
  year: 2016,
  rating: 8.4,
  poster: posterSeries7,
  banner: heroSeries7,
},
{
  id: "s8",
  title: "Iron Fist",
  tagline: "The power of the Iron Fist.",
  description:
    "Danny Rand returns to New York to reclaim his legacy and fight hidden threats.",
  category: ["marvel","series"],
  genres: ["Action","Fantasy"],
  year: 2017,
  rating: 6.4,
  poster: posterSeries8,
  banner: heroSeries8,
},
{
  id: "s9",
  title: "The Defenders",
  tagline: "Four heroes. One war.",
  description:
    "Street-level heroes unite to stop a conspiracy threatening New York.",
  category: ["marvel","series"],
  genres: ["Action","Crime"],
  year: 2017,
  rating: 7.3,
  poster: posterSeries9,
  banner: heroSeries9,
},
{
  id: "m40",
  title: "Captain America: Civil War",
  tagline: "Divided we fall.",
  description:
    "Political pressure fractures the Avengers, forcing friends into battle over ideology.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2016,
  rating: 7.8,
  poster: posterMarvel40,
  banner: heroMarvel40,
},
{
  id: "m41",
  title: "Black Widow",
  tagline: "Her past returns.",
  description:
    "Natasha confronts the shadows of her origins in a conspiracy tied to the Red Room.",
  category: ["marvel","movie"],
  genres: ["Action","Spy"],
  year: 2021,
  rating: 6.7,
  poster: posterMarvel41,
  banner: heroMarvel41,
},
{
  id: "m42",
  title: "Black Panther",
  tagline: "Wakanda forever.",
  description:
    "T’Challa rises as king and protector of Wakanda while facing a challenger shaped by injustice.",
  category: ["marvel","movie"],
  genres: ["Action","Adventure"],
  year: 2018,
  rating: 7.3,
  poster: posterMarvel42,
  banner: heroMarvel42,
},
{
  id: "s10",
  title: "The Punisher",
  tagline: "Justice served raw.",
  description:
    "Frank Castle uncovers a conspiracy while continuing his war on crime.",
  category: ["marvel","series"],
  genres: ["Action","Crime"],
  year: 2017,
  rating: 8.4,
  poster: posterSeries10,
  banner: heroSeries10,
},
{
  id: "m43",
  title: "Spider-Man: Homecoming",
  tagline: "Homework can wait. The city can’t.",
  description:
    "Peter balances high school life with proving himself as a hero under Tony Stark’s mentorship.",
  category: ["marvel","movie"],
  genres: ["Action","Adventure"],
  year: 2017,
  rating: 7.4,
  poster: posterMarvel43,
  banner: heroMarvel43,
},

{
  id: "m44",
  title: "Doctor Strange",
  tagline: "Open your mind.",
  description:
    "A surgeon discovers the mystic arts and the multiverse after a life-altering accident.",
  category: ["marvel","movie"],
  genres: ["Fantasy","Sci-Fi"],
  year: 2016,
  rating: 7.5,
  poster: posterMarvel44,
  banner: heroMarvel44,
},
{
  id: "m45",
  title: "Thor: Ragnarok",
  tagline: "No hammer. No problem.",
  description:
    "Thor must escape a cosmic prison and stop Ragnarok to save Asgard.",
  category: ["marvel","movie"],
  genres: ["Action","Comedy","Fantasy"],
  year: 2017,
  rating: 7.9,
  poster: posterMarvel45,
  banner: heroMarvel45,
},
{
  id: "m46",
  title: "Venom",
  tagline: "We are Venom.",
  description:
    "A journalist bonds with an alien symbiote, becoming a lethal anti-hero.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2018,
  rating: 6.6,
  poster: posterMarvel46,
  banner: heroMarvel46,
},
{
  id: "m47",
  title: "Spider-Man: Into the Spider-Verse",
  tagline: "Anyone can wear the mask.",
  description:
    "Miles Morales joins a multiverse of Spider-heroes to stop reality from collapsing.",
  category: ["marvel","movie"],
  genres: ["Animation","Action"],
  year: 2018,
  rating: 8.4,
  poster: posterMarvel47,
  banner: heroMarvel47,
},
{
  id: "m48",
  title: "Deadpool",
  tagline: "Maximum effort.",
  description:
    "A wisecracking mercenary seeks revenge after a rogue experiment leaves him disfigured.",
  category: ["marvel","movie"],
  genres: ["Action","Comedy"],
  year: 2016,
  rating: 8.0,
  poster: posterMarvel48,
  banner: heroMarvel48,
},
{
  id: "m49",
  title: "Ant-Man and the Wasp",
  tagline: "Partners in shrinking crime.",
  description:
    "Scott teams with Hope to uncover secrets of the Quantum Realm.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2018,
  rating: 7.0,
  poster: posterMarvel49,
  banner: heroMarvel49,
},
{
  id: "m50",
  title: "Avengers: Infinity War",
  tagline: "Destiny arrives.",
  description:
    "The Avengers face Thanos as he seeks to reshape the universe.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2018,
  rating: 8.4,
  poster: posterMarvel50,
  banner: heroMarvel50,
},
{
  id: "m51",
  title: "Avengers: Endgame",
  tagline: "Whatever it takes.",
  description:
    "The surviving heroes attempt one final mission to restore the universe.",
  category: ["marvel","movie"],
  genres: ["Action","Sci-Fi"],
  year: 2019,
  rating: 8.4,
  poster: posterMarvel51,
  banner: heroMarvel51,
},
{
  id: "m52",
  title: "The New Mutants",
  tagline: "Fear is their power.",
  description:
    "Young mutants trapped in a facility confront their darkest fears.",
  category: ["marvel","movie"],
  genres: ["Horror","Sci-Fi"],
  year: 2020,
  rating: 5.3,
  poster: posterMarvel52,
  banner: heroMarvel52,
},
{
  id: "s11",
  title: "Loki",
  tagline: "Time is broken.",
  description:
    "The God of Mischief navigates timelines and identity inside the TVA.",
  category: ["marvel","series"],
  genres: ["Sci-Fi","Fantasy"],
  year: 2021,
  rating: 8.2,
  poster: posterSeries11,
  banner: heroSeries11,
},
{
  id: "s12",
  title: "What If...?",
  tagline: "Infinite possibilities.",
  description:
    "Alternate realities reshape iconic moments across the Marvel multiverse.",
  category: ["marvel","series"],
  genres: ["Animation","Sci-Fi"],
  year: 2021,
  rating: 7.4,
  poster: posterSeries12,
  banner: heroSeries12,
}
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
   banner: heroSeries,
},
 {
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
   banner: heroSeries,
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
   banner: heroSeries,
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
