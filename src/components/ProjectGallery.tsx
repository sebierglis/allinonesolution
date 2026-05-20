"use client";

import { Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

type Project = {
  title: string;
  type: string;
  before: string;
  after: string;
  description: string;
};

type ProjectGalleryProps = {
  projects: Project[];
  dark?: boolean;
};

export function ProjectGallery({ projects, dark = false }: ProjectGalleryProps) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActive(project)}
            className={`group overflow-hidden rounded-[8px] text-left transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 ${
              dark
                ? "border border-white/10 bg-white/8 text-white focus:ring-cyan-300/30"
                : "border border-stone-200 bg-white text-stone-950 focus:ring-emerald-300/40"
            }`}
          >
            <span className="relative block aspect-[4/3] overflow-hidden">
              <Image
                src={project.after}
                alt={`${project.title} after placeholder`}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-stone-950">
                <Maximize2 className="h-5 w-5" aria-hidden="true" />
              </span>
            </span>
            <span className="block p-5">
              <span className={`text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-cyan-200" : "text-emerald-700"}`}>
                {project.type}
              </span>
              <span className="mt-2 block text-xl font-semibold">{project.title}</span>
              <span className={`mt-3 block text-sm ${dark ? "text-white/65" : "text-stone-600"}`}>
                {project.description}
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
          aria-label={`${active.title} before and after`}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-[8px] bg-white p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 z-10 grid h-10 w-10 place-items-center rounded-full bg-stone-950 text-white"
              aria-label="Close project gallery"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <BeforeAfterSlider
              beforeSrc={active.before}
              afterSrc={active.after}
              beforeAlt={`${active.title} before placeholder`}
              afterAlt={`${active.title} after placeholder`}
              dark={dark}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
