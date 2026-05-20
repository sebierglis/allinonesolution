"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type ExecutiveImpactItem = {
  id: string;
  title: string;
  description: string;
  primaryImage: string;
  secondaryImage: string;
  tag: string;
  ctaLabel: string;
  href: string;
};

function splitIntoColumns(items: ExecutiveImpactItem[]) {
  const repeatedItems = [...items, ...items].map((item, index) => ({
    ...item,
    id: `${item.id}-loop-${index}`,
  }));

  return [
    repeatedItems.filter((_, index) => index % 3 === 0),
    repeatedItems.filter((_, index) => index % 3 === 1),
    repeatedItems.filter((_, index) => index % 3 === 2),
  ];
}

export function ExecutiveImpactCarousel({
  items,
  className = "",
}: {
  items: ExecutiveImpactItem[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const columns = useMemo(() => splitIntoColumns(items), [items]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const viewport = container.querySelector<HTMLElement>(
          "[data-impact-viewport]",
        );
        const lists = gsap.utils.toArray<HTMLElement>(
          "[data-impact-list]",
          container,
        );

        if (!viewport || !lists.length) return;

        lists.forEach((list, index) => {
          const viewportHeight = viewport.clientHeight;
          const travel = Math.max(0, list.scrollHeight - viewportHeight) * 0.64;
          const startsAtBottom = index % 2 === 1;

          gsap.fromTo(
            list,
            { y: startsAtBottom ? -travel : 0 },
            {
              y: startsAtBottom ? 0 : -travel,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      }, container);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, [items]);

  return (
    <div ref={containerRef} className={`hidden md:block ${className}`}>
      <div
        data-impact-viewport
        className="relative h-[calc(100vh-5rem)] min-h-[640px] max-h-[860px] overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-[#f7f5ef] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-[#f7f5ef] to-transparent" />
        <div className="grid h-full grid-cols-3 gap-5 xl:gap-7">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="relative flex justify-center overflow-hidden"
            >
              <div
                data-impact-list
                className="flex w-full flex-col gap-8 will-change-transform xl:gap-10"
              >
                {column.map((item) => (
                  <ImpactCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImpactCard({ item }: { item: ExecutiveImpactItem }) {
  return (
    <figure className="group relative w-full">
      <div className="relative aspect-[0.9] overflow-hidden rounded-[8px] border border-[#e5dac9] bg-white p-3 shadow-[0_22px_70px_rgba(23,33,43,0.12)]">
        <div className="relative h-full overflow-hidden rounded-[6px]">
          <Image
            src={item.primaryImage}
            alt={item.title}
            fill
            sizes="(min-width: 1280px) 24rem, 30vw"
            className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <Image
            src={item.secondaryImage}
            alt=""
            fill
            sizes="(min-width: 1280px) 24rem, 30vw"
            className="object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101b26]/78 via-[#101b26]/20 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5 transition duration-500 group-hover:translate-y-3 group-hover:opacity-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8b56d]">
              {item.tag}
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-white">
              {item.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/72">
              {item.description}
            </p>
          </figcaption>
          <a
            href={item.href}
            className="absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 translate-y-5 items-center gap-2 whitespace-nowrap rounded-[8px] border border-white/35 bg-white/92 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#17212b] opacity-0 shadow-xl backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {item.ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </figure>
  );
}
