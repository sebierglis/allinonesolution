import Link from "next/link";
import { ArrowRight } from "lucide-react";

const concepts = [
  {
    href: "/concept-1-premium-trust",
    label: "Concept 1",
    title: "Premium Trust",
    text: "Elegant, warm and high-end, built around credibility and polished execution.",
  },
  {
    href: "/concept-2-tech-transformation",
    label: "Concept 2",
    title: "Tech Transformation",
    text: "Dark, cinematic and immersive, with sticky storytelling and interactive visuals.",
  },
  {
    href: "/concept-3-conversion-local",
    label: "Concept 3",
    title: "Conversion Local",
    text: "Direct, lead-focused and fast, with the estimate form above the fold.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-12 text-stone-950 sm:py-20">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b7440]">
          All In One Solution
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Landing page concept selector
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          Three complete Next.js landing page mockups for comparing premium trust,
          immersive transformation and local conversion approaches.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.href}
              href={concept.href}
              className="group rounded-[8px] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/70 transition duration-300 hover:-translate-y-1 hover:border-stone-950"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9b7440]">
                {concept.label}
              </span>
              <h2 className="mt-4 text-2xl font-semibold">{concept.title}</h2>
              <p className="mt-3 text-stone-600">{concept.text}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold">
                Open route
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
