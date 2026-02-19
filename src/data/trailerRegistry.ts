/**
 * Trailer Registry — centralised trailer URL lookup by title slug.
 * 
 * Add YouTube embed URLs or direct video URLs keyed by title slug.
 * Components call `resolveTrailer(title)` to get the URL or null.
 */

import { titleToSlug } from "./imageRegistry";

const trailerRegistry: Record<string, string> = {
  // Examples — add YouTube embed URLs:
  "chainsaw-man": "https://www.youtube.com/embed/q15CRdE5Bv0",
  "solo-leveling": "https://www.youtube.com/embed/7NJIPISvplI",
  "attack-on-titan": "https://www.youtube.com/embed/MGRm4IzK1SQ",
  "jujutsu-kaisen": "https://www.youtube.com/embed/4A_X-Dvl0ws",
  "demon-slayer": "https://www.youtube.com/embed/VQGCKyvzIM4",
  "one-punch-man": "https://www.youtube.com/embed/km2OPUctni4",
  "naruto": "https://www.youtube.com/embed/QczGoCmX-pI",
  "dragon-ball": "https://www.youtube.com/embed/dOOXEm9OVXQ",
  "fullmetal-alchemist-brotherhood": "https://www.youtube.com/embed/--IcmZkvL0Q",
  "death-note": "https://www.youtube.com/embed/NlJZ-YgAt-c",
  "spy-x-family": "https://www.youtube.com/embed/ofXigq9dRJA",
  "tokyo-ghoul": "https://www.youtube.com/embed/ETHpGSdYMF4",
  "my-hero-academia": "https://www.youtube.com/embed/D5fYOnwYkjk",
  "vinland-saga": "https://www.youtube.com/embed/BRubJOsVf_s",
  "frieren-beyond-journeys-end": "https://www.youtube.com/embed/qgZ4rMsiXEk",
  "blue-lock": "https://www.youtube.com/embed/raFr_dDhwcA",
  "dandadan": "https://www.youtube.com/embed/bGJHLrsB8_w",
  "kaiju-no-8": "https://www.youtube.com/embed/5olt0e0XPWI",
  "hells-paradise": "https://www.youtube.com/embed/fDY4NaUC8Dg",
  "re-zero": "https://www.youtube.com/embed/0Vwwr3VGsYg",
  "overlord": "https://www.youtube.com/embed/oHg5SJYRHA0",
  "erased": "https://www.youtube.com/embed/DwmxEAWjTQQ",
  "mushoku-tensei-jobless-reincarnation": "https://www.youtube.com/embed/Qx01bnCBvFo",
  "the-apothecary-diaries": "https://www.youtube.com/embed/YNz0nRLiQeY",
  "tower-of-god": "https://www.youtube.com/embed/mIVMz_PfYbw",
  "darling-in-the-franxx": "https://www.youtube.com/embed/JGdcNritDvM",
  "rascal-does-not-dream-of-bunny-girl-senpai": "https://www.youtube.com/embed/PZCnT-VDMY0",
  "the-eminence-in-shadow": "https://www.youtube.com/embed/wCdjreyGsSk",
  "my-dress-up-darling": "https://www.youtube.com/embed/xMY3Qo37hCM",
  "dr-stone": "https://www.youtube.com/embed/uskGHEoak74",
  "that-time-i-got-reincarnated-as-a-slime": "https://www.youtube.com/embed/ViA0Ul4KFNM",
  "black-clover": "https://www.youtube.com/embed/Fnl-2XSEQSQ",
  "bleach": "https://www.youtube.com/embed/1yM1hHRhPVo",
  "assassination-classroom": "https://www.youtube.com/embed/3BKFRA8kXNM",
  "haikyuu": "https://www.youtube.com/embed/JOGp2c7-cKc",
  "tokyo-revengers": "https://www.youtube.com/embed/vHxMcAc0wQA",
  "monster": "https://www.youtube.com/embed/9aS-EgdAq0U",
  "parasyte": "https://www.youtube.com/embed/9Olk1sBIv1o",
  "the-rising-of-the-shield-hero": "https://www.youtube.com/embed/rKnyi3TRznA",
  "sakamoto-days": "https://www.youtube.com/embed/y_G-W3BLDOA",
  "wind-breaker": "https://www.youtube.com/embed/ICSH2Dw4l6U",
  "mashle-magic-and-muscles": "https://www.youtube.com/embed/VLIuld03Y0c",
  "shangri-la-frontier": "https://www.youtube.com/embed/cHWh6aSqGOw",
  "lookism": "https://www.youtube.com/embed/a5oD0dMU3wU",
};

export function resolveTrailer(title: string): string | null {
  const slug = titleToSlug(title);
  return trailerRegistry[slug] ?? null;
}

export default trailerRegistry;
