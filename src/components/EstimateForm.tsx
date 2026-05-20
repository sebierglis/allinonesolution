"use client";

import { ArrowRight, Check, Send } from "lucide-react";
import { useState } from "react";

type EstimateFormProps = {
  theme?: "premium" | "dark" | "local";
  compact?: boolean;
  multiStep?: boolean;
};

const serviceOptions = [
  "Kitchen remodeling",
  "Bathroom remodeling",
  "Flooring",
  "Closets",
  "Painting",
  "Complete renovation",
  "Other",
];

export function EstimateForm({
  theme = "premium",
  compact = false,
  multiStep = false,
}: EstimateFormProps) {
  const [step, setStep] = useState(0);
  const isDark = theme === "dark";
  const isLocal = theme === "local";
  const panelClass = isDark
    ? "border-white/12 bg-white/8 text-white shadow-2xl shadow-black/30 backdrop-blur-xl"
    : isLocal
      ? "border-slate-200 bg-white text-slate-950 shadow-2xl shadow-slate-200"
      : "border-stone-200 bg-white text-stone-950 shadow-2xl shadow-stone-200";
  const fieldClass = isDark
    ? "border-white/12 bg-white/10 text-white placeholder:text-white/40 focus:border-cyan-300"
    : "border-stone-200 bg-white text-stone-950 placeholder:text-stone-400 focus:border-stone-950";
  const accentClass = isDark
    ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
    : isLocal
      ? "bg-emerald-600 text-white hover:bg-emerald-500"
      : "bg-stone-950 text-white hover:bg-stone-800";

  return (
    <form
      className={`rounded-[8px] border p-5 ${panelClass} ${compact ? "space-y-4" : "space-y-5"}`}
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${isDark ? "text-cyan-200" : isLocal ? "text-emerald-700" : "text-[#9b7440]"}`}>
          Free estimate
        </p>
        <h2 className={`${compact ? "text-2xl" : "text-3xl"} mt-2 font-semibold tracking-tight`}>
          Tell us about your project
        </h2>
      </div>

      {multiStep ? (
        <div className="flex gap-2" aria-label="Form progress">
          {[0, 1, 2].map((item) => (
            <span
              key={item}
              className={`h-1.5 flex-1 rounded-full ${item <= step ? (isDark ? "bg-cyan-300" : "bg-emerald-600") : isDark ? "bg-white/15" : "bg-stone-200"}`}
            />
          ))}
        </div>
      ) : null}

      {(!multiStep || step === 0) && (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Name</span>
            <input className={`h-12 w-full rounded-[8px] border px-4 outline-none transition ${fieldClass}`} placeholder="[Your name]" autoComplete="name" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Phone</span>
            <input className={`h-12 w-full rounded-[8px] border px-4 outline-none transition ${fieldClass}`} placeholder="[Phone number]" autoComplete="tel" />
          </label>
        </div>
      )}

      {(!multiStep || step === 1) && (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Email</span>
            <input className={`h-12 w-full rounded-[8px] border px-4 outline-none transition ${fieldClass}`} placeholder="[Email address]" type="email" autoComplete="email" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Project type</span>
            <select className={`h-12 w-full rounded-[8px] border px-4 outline-none transition ${fieldClass}`} defaultValue="">
              <option value="" disabled>
                Select service
              </option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {(!multiStep || step === 2) && (
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Project details</span>
          <textarea
            className={`min-h-28 w-full resize-y rounded-[8px] border px-4 py-3 outline-none transition ${fieldClass}`}
            placeholder="Share the space, timeline, photos available and preferred contact method."
          />
        </label>
      )}

      {multiStep && step < 2 ? (
        <button
          type="button"
          onClick={() => setStep((current) => current + 1)}
          className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-[8px] px-5 font-semibold transition ${accentClass}`}
        >
          Continue
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      ) : (
        <button
          type="submit"
          className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-[8px] px-5 font-semibold transition ${accentClass}`}
        >
          Request Free Estimate
          {multiStep ? <Check className="h-5 w-5" aria-hidden="true" /> : <Send className="h-5 w-5" aria-hidden="true" />}
        </button>
      )}
    </form>
  );
}
