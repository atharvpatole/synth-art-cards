# Art Styles

A library of art styles for greeting cards, generated end to end with image models.

**Live:** https://REPLACE-ME.vercel.app

Twenty-two card fronts across seven art movements, two original styles built by combining
movements that do not usually meet, one style based on a current Gen Z trend, and a finished
5x7 birthday card. Every prompt is published next to the image it produced.

## What is in it

| Section | Contents |
| --- | --- |
| Range | 14 cards across watercolor, risograph, claymation, ukiyo-e, Bauhaus, 90s anime cel, and Art Nouveau |
| Ukiyo-e Chrome | Original style: woodblock composition and carved outlines rendered in Y2K liquid chrome |
| Baroque Riso | Original style: Baroque spotlight and staging printed as a two-color riso zine |
| Jelly Candy | A style built on the jelly/gummy trend running through Pinterest and the ASMR side of TikTok |
| Production test | A finished 5x7 birthday card front, with its prompt in prose and as a JSON spec |

## Method

Each style is written as a reusable JSON spec before anything is generated: medium, palette,
line, texture, composition, and what to avoid. A card is then that spec plus an occasion, which
keeps a whole set on-style instead of drifting image to image, and makes a new occasion a
one-line change rather than a new prompt.

```json
{
  "style": "Risograph",
  "medium": "two-color risograph print",
  "palette": ["fluorescent pink", "teal"],
  "texture": "visible grain, slight misregistration, halftone dots",
  "form": "flat bold shapes, no gradients",
  "composition": "single centered subject, generous margins, portrait 5:7",
  "avoid": ["photorealism", "3D shading", "text"],
  "subject": "{occasion scene}"
}
```

All images were generated with Nano Banana 2 (Gemini 3.1 Flash Image). No artist names, studios,
brands, or existing characters appear in any prompt: styles are described by their traits, so the
output stays commercially usable.

## Stack

Next.js (App Router), TypeScript, plain CSS, deployed on Vercel.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  page.tsx      gallery page
  content.ts    every card: title, style, occasion, caption, prompt
  styles.css
public/
  art/          images, 5:7 portrait
```

Edit copy in `app/content.ts` only. Adding a card means adding one entry and dropping a matching
`public/art/<slug>.jpg`.

## Credit

Art direction, prompts, and curation by Atharv Patole.
[atharvpatole.dev](https://www.atharvpatole.dev/)
