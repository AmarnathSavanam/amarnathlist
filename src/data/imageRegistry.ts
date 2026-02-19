/**
 * Image Registry — centralised image lookup for any title.
 * To update an image, add the title (lower-case) as key with poster / banner URLs.
 * Components call `resolveImages(title, fallbackPoster, fallbackBanner)`.
 */

interface ImageEntry {
  poster?: string;
  banner?: string;
}

const imageRegistry: Record<string, ImageEntry> = {
  // Example:
  // "naruto": { poster: "/images/naruto-poster.jpg", banner: "/images/naruto-banner.jpg" },
};

export function resolveImages(
  title: string,
  fallbackPoster: string,
  fallbackBanner: string
) {
  const key = title.toLowerCase();
  const entry = imageRegistry[key];
  return {
    poster: entry?.poster || fallbackPoster,
    banner: entry?.banner || fallbackBanner,
  };
}

export default imageRegistry;
