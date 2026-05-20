"use client";

import { Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type VideoItem = {
  title: string;
  role: string;
  quote: string;
  thumbnail: string;
};

type VideoTestimonialsProps = {
  items: VideoItem[];
  variant?: "light" | "dark" | "local";
  horizontal?: boolean;
};

export function VideoTestimonials({
  items,
  variant = "light",
  horizontal = false,
}: VideoTestimonialsProps) {
  const [active, setActive] = useState<VideoItem | null>(null);
  const dark = variant === "dark";

  return (
    <>
      <div
        className={
          horizontal
            ? "scrollbar-hide flex snap-x gap-5 overflow-x-auto pb-3"
            : "grid gap-5 md:grid-cols-3"
        }
      >
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(item)}
            className={`group relative min-h-[270px] overflow-hidden rounded-[8px] text-left shadow-xl transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 ${
              horizontal ? "min-w-[82%] snap-start sm:min-w-[390px]" : ""
            } ${
              dark
                ? "bg-white/8 shadow-black/30 focus:ring-cyan-300/30"
                : "bg-white shadow-stone-200 focus:ring-amber-300/50"
            }`}
            aria-label={`Open video testimonial placeholder: ${item.title}`}
          >
            <Image
              src={item.thumbnail}
              alt=""
              width={900}
              height={520}
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute left-5 top-36 grid h-14 w-14 place-items-center rounded-full bg-white text-stone-950 shadow-xl transition group-hover:scale-105">
              <Play className="h-6 w-6 fill-current" aria-hidden="true" />
            </span>
            <span className={`block p-5 ${dark ? "text-white" : "text-stone-950"}`}>
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] opacity-70">
                {item.role}
              </span>
              <span className="mt-2 block text-xl font-semibold">{item.title}</span>
              <span className={`mt-3 block text-sm ${dark ? "text-white/68" : "text-stone-600"}`}>
                {item.quote}
              </span>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[8px] bg-stone-950 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/12 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Close video testimonial"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="grid aspect-video place-items-center bg-[linear-gradient(135deg,#1c2936,#0c1118)]">
              <div className="text-center">
                <Play className="mx-auto h-14 w-14 fill-current text-white/90" aria-hidden="true" />
                <p className="mt-4 text-lg font-semibold">{active.title}</p>
                <p className="mt-2 text-sm text-white/60">
                  Video placeholder. Replace with the approved client video.
                </p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                {active.role}
              </p>
              <p className="mt-3 text-xl">{active.quote}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
