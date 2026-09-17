// Gallery content. Images live in /public/art/<slug>.jpg
export type Piece = {
  section: "range" | "chrome" | "riso" | "jelly";
  slug: string;
  title: string;
  style: string;
  occasion: string;
  caption: string;
  prompt: string;
};

export const pieces: Piece[] = [
  {
    "section": "range",
    "slug": "range-watercolor-apartment",
    "title": "Starter Pack",
    "style": "Watercolor",
    "occasion": "New place",
    "caption": "Zero furniture, one plant, fully moved in.",
    "prompt": "Loose watercolor painting of a tiny, nearly empty first apartment: a mattress on the floor, one proud houseplant, fairy lights taped to the wall, and a pizza box used as a table. Wet-on-wet washes, soft blooms, visible paper texture, lots of white paper. Palette of peach, sage, and warm grey. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-watercolor-windowsills",
    "title": "Same Coffee, Different Time Zone",
    "style": "Watercolor",
    "occasion": "Miss you",
    "caption": "Long distance, but make it a morning ritual.",
    "prompt": "Loose watercolor painting of two windowsills in two different cities, one sunny and one rainy, each with a cup of coffee, joined by a thin gold thread across the sky. Transparent layered washes, soft bleeding edges, granulation, white paper showing through. Palette of cobalt blue, rose, and soft gold. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-riso-leftonread",
    "title": "Left On Read",
    "style": "Risograph",
    "occasion": "Sorry",
    "caption": "The text was not ignored. It was buried under the laundry.",
    "prompt": "Two-color risograph print in fluorescent pink and teal: a phone lying face down in a messy pile of laundry, with unread message bubbles floating out of it like ghosts. Flat bold shapes, visible grain, halftone shading, slight misregistration, off-white recycled paper. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-riso-finals",
    "title": "Finals Era",
    "style": "Risograph",
    "occasion": "Good luck",
    "caption": "You versus a mountain of books and eleven coffees. Money is on you.",
    "prompt": "Two-color risograph print in bright red and blue: a student peeking out from under a mountain of textbooks, with a tower of empty coffee cups leaning beside them. Flat graphic shapes, heavy grain, halftone gradients, colors slightly misaligned so overlaps turn purple, cream zine paper. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-clay-puppy",
    "title": "New Gremlin, Who Dis",
    "style": "Claymation",
    "occasion": "New puppy",
    "caption": "Congratulations on the puppy. A moment of silence for the slipper.",
    "prompt": "Stop-motion claymation scene: a tiny clay puppy sitting in the middle of a shredded slipper, looking extremely proud of itself. Handmade plasticine with fingerprints and tool marks, glossy bead eyes, soft studio lighting, gentle shadows, shallow depth of field. Pastel mint clay background. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-clay-getwell",
    "title": "Blanket Burrito",
    "style": "Claymation",
    "occasion": "Get well",
    "caption": "Soup, cat, zero obligations. Doctor’s orders.",
    "prompt": "Stop-motion claymation scene filling the entire frame: a small clay person wrapped like a burrito in a striped rainbow blanket on a blue clay couch, with a bowl of soup, a tissue box, and a sleepy orange clay cat curled beside them. Plasticine texture, warm soft studio lighting, cozy miniature set, butter-yellow clay background. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-ukiyoe-quit",
    "title": "Out of Office, Permanently",
    "style": "Ukiyo-e woodblock",
    "occasion": "Quit the job",
    "caption": "He quit. The wave is metaphorical. Barely.",
    "prompt": "Japanese ukiyo-e woodblock print: a tiny office worker in a tie joyfully surfing a huge stylized wave on an open laptop, papers flying behind them. Bold carved black outlines, flat color, patterned foam and clouds, wood grain and washi paper texture. Palette of indigo, vermilion, and cream. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-ukiyoe-move",
    "title": "New City, Same You",
    "style": "Ukiyo-e woodblock",
    "occasion": "Big move",
    "caption": "The path is long. The suitcase has wheels.",
    "prompt": "Japanese ukiyo-e woodblock print: a small traveler pulling a rolling suitcase over a mountain pass, pine trees and stylized clouds around them, a tiny train crossing a bridge far below. Flat color, carved outlines, softly graded sky, paper texture. Palette of deep blue, soft green, and peach. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-bauhaus-grad",
    "title": "Cap Toss",
    "style": "Bauhaus",
    "occasion": "Graduation",
    "caption": "Degree unlocked. The shapes are celebrating on your behalf.",
    "prompt": "Bauhaus poster composition: a graduation cap made of a square and triangles flying upward on a strong diagonal, with a big circle sun and small geometric confetti. Primary red, yellow, and blue with black on off-white, flat color, strict grid, asymmetric balance, light print texture. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-bauhaus-rings",
    "title": "Two Circles, One Party",
    "style": "Bauhaus",
    "occasion": "Engagement",
    "caption": "You said yes. The confetti concurs.",
    "prompt": "Bauhaus composition: two bold interlocking circles as rings, balanced on a black line, with triangles and small squares bursting around them like confetti. Primary colors and black on warm off-white, crisp flat geometry, modernist balance, subtle paper texture. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-anime-earbuds",
    "title": "One Earbud Each",
    "style": "90s anime cel",
    "occasion": "Thinking of you",
    "caption": "The highest known form of friendship.",
    "prompt": "1990s hand-painted anime cel style: two original characters, best friends sitting on a train platform at golden hour sharing one pair of earbuds, power lines overhead. Cel-shaded figures, clean ink lines, lush painted background, soft film grain, warm orange and lavender sky, nostalgic mood. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-anime-snow",
    "title": "First Snow",
    "style": "90s anime cel",
    "occasion": "Happy holidays",
    "caption": "Catching snowflakes like it is a full-time position.",
    "prompt": "1990s hand-painted anime cel style: an original character in a huge scarf catching snowflakes on her tongue outside a glowing corner shop at night. Cel shading, clean line art, painted background, soft film grain, cool blue night with warm window light. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-nouveau-plantmom",
    "title": "Patron Saint of Houseplants",
    "style": "Art Nouveau",
    "occasion": "Mother’s Day",
    "caption": "For the mom whose other children are ferns.",
    "prompt": "Art Nouveau illustration: a woman calmly watering an absurd jungle of houseplants that surrounds her completely, framed by an ornamental arch of whiplash vines and leaves. Elegant contour lines, flat muted color, decorative border, thin gold accents. Palette of olive, dusty rose, cream, and gold. Portrait 5:7 greeting card front. No text anywhere."
  },
  {
    "section": "range",
    "slug": "range-nouveau-lily",
    "title": "Quiet Company",
    "style": "Art Nouveau",
    "occasion": "Sympathy",
    "caption": "For when there is nothing to say, and something still has to be sent.",
    "prompt": "Art Nouveau illustration, portrait 5:7 vertical: a single white lily bending gently in soft rain, framed by a tall decorative border of flowing stems and circles. Graceful linework, soft sage, grey-blue, and ivory with thin gold lines, calm and quiet. No text anywhere."
  },
  {
    "section": "chrome",
    "slug": "orig-chrome-wave",
    "title": "Chrome Wave",
    "style": "Ukiyo-e Chrome",
    "occasion": "Congrats",
    "caption": "Big news deserves a big wave.",
    "prompt": "Ukiyo-e Chrome style: a great curling wave with stylized foam curls and patterned clouds in the classic Japanese woodblock composition, with bold carved black outlines, but every surface rendered as glossy liquid chrome with iridescent pink and blue reflections. Soft lavender sky. Portrait 5:7."
  },
  {
    "section": "chrome",
    "slug": "orig-chrome-blossom",
    "title": "Chrome Blossom",
    "style": "Ukiyo-e Chrome",
    "occasion": "Valentine’s",
    "caption": "Petals, but iridescent.",
    "prompt": "Same Ukiyo-e Chrome style. New subject: two cherry blossom branches crossing to form a heart, with chrome petals drifting down. Portrait 5:7."
  },
  {
    "section": "riso",
    "slug": "orig-riso-promotion",
    "title": "Ascension (Promotion Edition)",
    "style": "Baroque Riso",
    "occasion": "Promotion",
    "caption": "Promoted. Ascended, really.",
    "prompt": "Baroque Riso style: the dramatic spotlight, deep shadows, and theatrical poses of a Baroque oil painting, printed as a grainy two-color risograph in fluorescent pink and deep blue, with halftone shading, slight misregistration, and cream paper. Subject: an office worker lifted on the shoulders of coworkers like a heavenly ascension, holding a laptop up to a beam of light. Portrait 5:7."
  },
  {
    "section": "riso",
    "slug": "orig-riso-breakup",
    "title": "Prescribed: One Tub",
    "style": "Baroque Riso",
    "occasion": "Breakup support",
    "caption": "The group chat has already been notified.",
    "prompt": "Same Baroque Riso style. New subject: one person collapsed dramatically across a velvet couch in a single beam of light, phone glowing on their chest, clutching an enormous tub of ice cream like a religious relic, spoon raised. Nobody else in frame. Portrait 5:7, artwork fills the entire frame, no paper border."
  },
  {
    "section": "riso",
    "slug": "orig-riso-gotchaday",
    "title": "His Grace",
    "style": "Baroque Riso",
    "occasion": "Gotcha day",
    "caption": "One year in the household, already the most dignified resident.",
    "prompt": "Same Baroque Riso style. New subject: a golden retriever posed like a noble in a formal portrait, wearing a ruffled collar and sitting on a velvet throne. Portrait 5:7."
  },
  {
    "section": "jelly",
    "slug": "genz-jelly-bear",
    "title": "Certified Gummy",
    "style": "Jelly Candy",
    "occasion": "You did it",
    "caption": "You did the thing. No notes.",
    "prompt": "Glossy jelly candy 3D style: a squishy translucent gummy bear giving a big thumbs up, surrounded by little jelly stars and bubbles. Wobbly rubbery shapes, see-through candy colors with light shining through, sugar sparkle, soft pastel gradient background, a texture you want to squeeze. Portrait 5:7."
  },
  {
    "section": "jelly",
    "slug": "genz-jelly-heart",
    "title": "Melting, Respectfully",
    "style": "Jelly Candy",
    "occasion": "Crush",
    "caption": "Crush status: liquefied.",
    "prompt": "Same jelly candy style. New subject: a jiggly jelly heart melting slightly on a pink plate with a tiny spoon beside it. Portrait 5:7."
  },
  {
    "section": "jelly",
    "slug": "genz-jelly-phone",
    "title": "Down Bad, But Make It Cute",
    "style": "Jelly Candy",
    "occasion": "Rough day",
    "caption": "Rough day. The phone took it harder than you did.",
    "prompt": "Same jelly candy style. New subject: a jelly phone with a crying face on its screen, wrapped in a gummy bandage. Portrait 5:7."
  }
];

export const notes = {
  chrome: "Edo woodblock composition and carved black outlines, with every surface rendered in Y2K liquid chrome. Woodblock prints were cheap street-corner pop art, built to be read fast: flat color, hard outlines, one clear shape. That is exactly what a card has to do from arm’s length. Chrome is the opposite instinct, all surface and reflection, and it is the finish Gen Z keeps pulling back out of 2001. Together the composition stays readable and the surface feels new, so the card looks old and very online at the same time.",
  riso: "The spotlight, deep shadow, and theatrical posing of Baroque painting, printed as a grainy two-color riso zine. Baroque painters aimed a single light at one person and let the rest fall into shadow, which made ordinary moments look holy. Riso printing does the opposite job: cheap, grainy, slightly misaligned, impossible to take too seriously. Put together, a card can mean it and joke about it in the same breath. A promotion becomes an ascension. A breakup gets a tub of ice cream held like a relic. That is how people actually talk to each other.",
  jelly: "Squishy, translucent, glossy candy rendered in 3D. Jelly is everywhere right now: rubbery phone cases, jelly blush, gummy-looking jewelry, squishy toys running the ASMR side of TikTok and Pinterest. What all of it shares is touch. It looks like something you would press with your thumb. Cards are one of the last things people still buy to physically hand to someone, so a style built around wanting to squeeze it does something a flat illustration cannot. It also reads happy without reading childish, which is a narrow lane.",
};

export const cardTest = {
  slug: "cardtest-birthday",
  title: "Happy Birthday (dramatic, as always)",
  meta: "Baroque Riso \u00b7 Birthday \u00b7 5x7 portrait",
  prompt: "Birthday greeting card front, portrait 5:7. Style: Baroque Riso, the dramatic spotlight and deep shadows of a Baroque oil painting printed as a grainy two-color risograph in fluorescent pink and deep blue, with halftone shading, slight misregistration, and cream paper. Scene: a lavish birthday cake on a draped velvet table, one candle blazing like a holy spotlight, confetti falling in slow motion. At the top, elegant serif lettering in deep blue that reads exactly \"Happy Birthday\". At the bottom, small lettering that reads exactly \"(dramatic, as always)\". Keep all text and the cake well inside the edges.",
  json: "{\n  \"card\": { \"occasion\": \"birthday\", \"format\": \"5x7 portrait front\" },\n  \"style\": \"Baroque Riso\",\n  \"style_traits\": [\"Baroque spotlight and deep shadow\", \"two-color risograph\",\n                   \"fluorescent pink + deep blue\", \"halftone\", \"misregistration\", \"cream paper\"],\n  \"scene\": \"lavish cake on draped velvet table, one candle blazing like a spotlight, slow confetti\",\n  \"text\": [\n    { \"position\": \"top\",    \"copy\": \"Happy Birthday\",        \"type\": \"elegant serif, deep blue\" },\n    { \"position\": \"bottom\", \"copy\": \"(dramatic, as always)\", \"type\": \"small serif\" }\n  ],\n  \"safe_area\": \"all text and subject inside edges\"\n}",
};
