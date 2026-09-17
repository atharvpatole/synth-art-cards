// Generated from the actual files in public/art/.
// next/image uses width/height to infer the aspect ratio it reserves for each
// image, so these must be the real intrinsic pixel dimensions. They are not all
// the same: most cards are 1000x1407, but six came out of the model at other
// sizes. Hard-coding a single 1000x1400 for every card would letterbox-stretch
// each one into an aspect ratio it does not actually have.
export type ImageSize = { width: number; height: number };

export const imageSizes: Record<string, ImageSize> = {
  "cardtest-birthday": { width: 728, height: 1024 },
  "genz-jelly-bear": { width: 1000, height: 1407 },
  "genz-jelly-heart": { width: 1000, height: 1407 },
  "genz-jelly-phone": { width: 1000, height: 1407 },
  "orig-chrome-blossom": { width: 728, height: 1024 },
  "orig-chrome-wave": { width: 1000, height: 1407 },
  "orig-riso-breakup": { width: 728, height: 1019 },
  "orig-riso-gotchaday": { width: 744, height: 1042 },
  "orig-riso-promotion": { width: 742, height: 1039 },
  "range-anime-earbuds": { width: 1000, height: 1407 },
  "range-anime-snow": { width: 1000, height: 1407 },
  "range-bauhaus-grad": { width: 1000, height: 1407 },
  "range-bauhaus-rings": { width: 1000, height: 1407 },
  "range-clay-getwell": { width: 1000, height: 1407 },
  "range-clay-puppy": { width: 1000, height: 1407 },
  "range-nouveau-lily": { width: 1000, height: 1407 },
  "range-nouveau-plantmom": { width: 1000, height: 1407 },
  "range-riso-finals": { width: 1000, height: 1407 },
  "range-riso-leftonread": { width: 1000, height: 1407 },
  "range-ukiyoe-move": { width: 1000, height: 1407 },
  "range-ukiyoe-quit": { width: 728, height: 1024 },
  "range-watercolor-apartment": { width: 1000, height: 1407 },
  "range-watercolor-windowsills": { width: 1000, height: 1407 },
};

export function sizeFor(slug: string): ImageSize {
  const size = imageSizes[slug];
  if (!size) throw new Error(`No image size recorded for slug "${slug}"`);
  return size;
}
