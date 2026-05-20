"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  dark?: boolean;
  priority?: boolean;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
  dark = false,
  priority = false,
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(52);
  const id = useId();
  const trackRef = useRef<HTMLDivElement | null>(null);

  function updateFromPointer(clientX: number) {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(96, Math.max(4, Math.round(next))));
  }

  return (
    <div
      ref={trackRef}
      className={`group relative isolate aspect-[4/3] overflow-hidden rounded-[8px] ${dark ? "bg-slate-950" : "bg-stone-200"} ${className}`}
      onPointerDown={(event) => {
        updateFromPointer(event.clientX);
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (event.buttons === 1) updateFromPointer(event.clientX);
      }}
      role="group"
      aria-labelledby={`${id}-label`}
    >
      <span id={`${id}-label`} className="sr-only">
        Interactive before and after project comparison
      </span>
      <span className="sr-only">{beforeAlt}</span>

      <Image
        src={afterSrc}
        alt={afterAlt}
        width={1200}
        height={900}
        priority={priority}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src={beforeSrc}
          alt=""
          width={1200}
          height={900}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
        Before
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-950">
        After
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_24px_rgba(0,0,0,0.35)]"
        style={{ left: `${value}%` }}
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/90 text-sm font-bold text-stone-900 shadow-xl">
          <span aria-hidden="true">||</span>
        </div>
      </div>

      <label htmlFor={`${id}-range`} className="sr-only">
        Move to compare before and after
      </label>
      <input
        id={`${id}-range`}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        aria-valuetext={`${value}% showing before image`}
      />
    </div>
  );
}
