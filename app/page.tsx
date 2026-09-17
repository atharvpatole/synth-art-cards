import Image from "next/image";
import { pieces, notes, cardTest } from "./content";
import { sizeFor } from "./image-sizes";
import "./styles.css";

export const metadata = {
  title: "Art Styles \u2014 a card-art style library",
  description:
    "Twenty-two greeting card fronts across seven art movements, two original styles, and a Gen Z style. Every prompt published.",
};

function Card({ p }: { p: (typeof pieces)[number] }) {
  const { width, height } = sizeFor(p.slug);
  return (
    <figure className="card">
      <Image
        src={`/art/${p.slug}.jpg`}
        alt={p.title}
        width={width}
        height={height}
        sizes="(max-width: 700px) 100vw, 300px"
      />
      <figcaption>
        <h3>{p.title}</h3>
        <p className="meta">
          {p.style} &middot; {p.occasion}
        </p>
        <p className="cap">{p.caption}</p>
        <details>
          <summary>Prompt</summary>
          <p className="prompt">{p.prompt}</p>
        </details>
      </figcaption>
    </figure>
  );
}

function Grid({ section }: { section: string }) {
  return (
    <div className="grid">
      {pieces
        .filter((p) => p.section === section)
        .map((p) => (
          <Card key={p.slug} p={p} />
        ))}
    </div>
  );
}

export default function HeartStampPage() {
  return (
    <div className="hs wrap">
      <header>
        <h1>Art Styles</h1>
        <p className="lede">
          A library of art styles for greeting cards, built with generative image models.
        </p>
        <p className="lede">
          Twenty-two card fronts across seven art movements, two original styles made by combining
          movements that do not usually meet, one style built on a trend Gen Z is actually using, and
          a finished 5x7 birthday card. Each style is written as a reusable spec first, then generated
          against it, so a whole set stays on-style instead of drifting image to image. Every prompt
          sits under its image.
        </p>
      </header>

      <section>
        <h2>Range</h2>
        <p className="sub">
          Seven movements, each built around a real occasion someone would actually send. Painting,
          print, stop-motion, woodblock, modernist design, cel animation, and decorative illustration.
        </p>
        <Grid section="range" />
      </section>

      <section>
        <h2>Original style 01 &middot; Ukiyo-e Chrome</h2>
        <p className="note">{notes.chrome}</p>
        <Grid section="chrome" />
      </section>

      <section>
        <h2>Original style 02 &middot; Baroque Riso</h2>
        <p className="note">{notes.riso}</p>
        <Grid section="riso" />
      </section>

      <section>
        <h2>Gen Z style &middot; Jelly Candy</h2>
        <p className="note">{notes.jelly}</p>
        <Grid section="jelly" />
      </section>

      <section>
        <h2>Production test &middot; Birthday card</h2>
        <p className="sub">
          A finished 5x7 portrait front in the Baroque Riso style, with the copy rendered in-model.
          The same prompt is shown as prose and as the JSON spec used to generate sets.
        </p>
        <div className="cardtest">
          <figure className="card">
            <Image
              src={`/art/${cardTest.slug}.jpg`}
              alt={cardTest.title}
              width={sizeFor(cardTest.slug).width}
              height={sizeFor(cardTest.slug).height}
              sizes="(max-width: 700px) 100vw, 340px"
            />
            <figcaption>
              <h3>{cardTest.title}</h3>
              <p className="meta">{cardTest.meta}</p>
            </figcaption>
          </figure>
          <div>
            <p className="meta">Prompt</p>
            <pre>{cardTest.prompt}</pre>
            <p className="meta">Same prompt, structured for production</p>
            <pre>{cardTest.json}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2>How it is made</h2>
        <ul className="tools">
          <li>
            <strong>Nano Banana 2</strong> (Gemini 3.1 Flash Image) generates every image here.
          </li>
          <li>
            <strong>Claude</strong> breaks each movement down into its defining traits, which become a
            JSON style spec: medium, palette, line, texture, composition, and what to avoid.
          </li>
          <li>
            Each card is then a spec plus an occasion, so one style can carry a whole set without
            drifting, and a new occasion is a one-line change rather than a new prompt.
          </li>
          <li>
            Built with the OpenAI, Anthropic, and Gemini APIs, plus batch pipelines in Python and
            TypeScript.
          </li>
        </ul>
      </section>

      <footer>
        <p>
          Atharv Patole &middot; <a href="mailto:atharvpatole6@gmail.com">atharvpatole6@gmail.com</a>{" "}
          &middot; <a href="https://www.atharvpatole.dev/">atharvpatole.dev</a>
        </p>
      </footer>
    </div>
  );
}
