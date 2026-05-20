"use client";

import {
  ArrowRight,
  Bath,
  BriefcaseBusiness,
  Brush,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  DoorOpen,
  Hammer,
  Home,
  MessageCircle,
  Phone,
  Play,
  Ruler,
  ShieldCheck,
  Star,
  Trees,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { Reveal } from "@/components/Reveal";
import {
  ExecutiveImpactCarousel,
  type ExecutiveImpactItem,
} from "@/components/ui/executive-impact-carousel";
import {
  concept3Content,
  contact,
  type Language,
} from "../content";

type Content = (typeof concept3Content)[Language];
type ServiceItem = Content["services"]["items"][number];
type FAQItem = Content["faq"]["items"][number];
type Project = Content["projects"]["items"][number];
type VideoStory = Content["videos"]["items"][number];

const storageKey = "all-in-one-concept-3-language";
const serviceIcons = [
  Home,
  Bath,
  Ruler,
  DoorOpen,
  Brush,
  Wrench,
  Zap,
  ClipboardCheck,
  Hammer,
  Trees,
  Home,
  BriefcaseBusiness,
];
const imageAssets = {
  hero: "/images/concept-3/hero-kitchen-living.png",
  kitchen: "/images/concept-3/kitchen-detail.png",
  bathroom: "/images/concept-3/bathroom-remodel.png",
  outdoor: "/images/concept-3/outdoor-pavers.png",
  andres: "/images/concept-3/about-andres-temp.png",
  consultation: "/images/concept-3/consultation-process.png",
};
const sectionOneServiceImages = {
  office: "/images/concept-3/section-1/service-office.png",
  livingWall: "/images/concept-3/section-1/service-living-wall.png",
  openKitchenLiving: "/images/concept-3/section-1/service-open-kitchen-living.png",
  indoorOutdoor: "/images/concept-3/section-1/service-indoor-outdoor.png",
  hallway: "/images/concept-3/section-1/service-hallway.png",
  bathVanity: "/images/concept-3/section-1/service-bath-vanity.png",
  kitchenBar: "/images/concept-3/section-1/service-kitchen-bar.png",
  bathLarge: "/images/concept-3/section-1/service-bath-large.png",
  flooring: "/images/concept-3/section-1/service-flooring.png",
  closet: "/images/concept-3/section-1/service-closet.png",
  kitchenWaterView: "/images/concept-3/section-1/service-kitchen-water-view.png",
};
const featuredServiceImages: Record<number, string> = {
  0: sectionOneServiceImages.kitchenWaterView,
  1: sectionOneServiceImages.bathLarge,
  2: sectionOneServiceImages.flooring,
  3: sectionOneServiceImages.closet,
  4: sectionOneServiceImages.hallway,
  5: sectionOneServiceImages.livingWall,
  6: sectionOneServiceImages.bathVanity,
  7: sectionOneServiceImages.kitchenBar,
  8: sectionOneServiceImages.livingWall,
  9: sectionOneServiceImages.indoorOutdoor,
  10: sectionOneServiceImages.openKitchenLiving,
  11: sectionOneServiceImages.office,
};
const alternateServiceImages: Record<number, string> = {
  0: sectionOneServiceImages.kitchenBar,
  1: sectionOneServiceImages.bathVanity,
  2: sectionOneServiceImages.openKitchenLiving,
  3: sectionOneServiceImages.livingWall,
  4: sectionOneServiceImages.indoorOutdoor,
  5: sectionOneServiceImages.hallway,
  6: sectionOneServiceImages.bathLarge,
  7: sectionOneServiceImages.kitchenWaterView,
  8: sectionOneServiceImages.closet,
  9: imageAssets.outdoor,
  10: imageAssets.hero,
  11: imageAssets.consultation,
};

export function ConversionLocalLanding() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "es";
    const stored = window.localStorage.getItem(storageKey);
    return stored === "en" || stored === "es" ? stored : "es";
  });
  const content = concept3Content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
  }

  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden bg-[#f7f5ef] pb-28 text-[#17212b] md:pb-0">
      <Header
        content={content}
        language={language}
        onLanguageChange={changeLanguage}
      />
      <ConversionHero content={content} />
      <MobileProofStrip content={content} />
      <PremiumServiceGrid content={content} />
      <FeaturedProjects content={content} />
      <WhyChoose content={content} />
      <VideoTestimonials content={content} />
      <WrittenReviews content={content} />
      <AboutAndres content={content} />
      <ProcessSteps content={content} />
      <FAQAccordion content={content} />
      <FinalCTA content={content} />
      <Footer content={content} />
      <StickyMobileCTA content={content} />
    </main>
  );
}

function Header({
  content,
  language,
  onLanguageChange,
}: {
  content: Content;
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const navItems = [
    [content.nav.services, "#services"],
    [content.nav.projects, "#projects"],
    [content.nav.reviews, "#reviews"],
    [content.nav.about, "#about"],
    [content.nav.faq, "#faq"],
  ];

  return (
    <header className="sticky top-0 z-40 w-screen max-w-full overflow-hidden border-b border-[#e7dfd2]/80 bg-[#fffdf8]/90 shadow-[0_10px_30px_rgba(23,33,43,0.04)] backdrop-blur-xl transition-shadow">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 overflow-hidden px-4 py-4 sm:px-5 md:gap-3 md:py-3.5">
        <a href="#" className="min-w-0 truncate text-sm font-semibold tracking-tight min-[380px]:text-base sm:text-lg">
          All In One Solution
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-[#17212b]">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle
            content={content}
            language={language}
            onLanguageChange={onLanguageChange}
          />
          <a
            href={contact.phoneHref}
            className="inline-flex h-10 items-center gap-2 rounded-[8px] border border-[#d8c9af] bg-white px-4 text-sm font-semibold text-[#17212b] transition hover:border-[#b98c51]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {content.nav.call}
          </a>
          <a
            href="#estimate"
            className="inline-flex h-10 items-center gap-2 rounded-[8px] bg-[#15845f] px-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-[#116d50]"
          >
            {content.nav.estimate}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="shrink-0 md:hidden">
          <LanguageToggle
            content={content}
            language={language}
            onLanguageChange={onLanguageChange}
            compact
          />
        </div>
      </nav>
    </header>
  );
}

function LanguageToggle({
  content,
  language,
  onLanguageChange,
  compact = false,
}: {
  content: Content;
  language: Language;
  onLanguageChange: (language: Language) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`inline-flex shrink-0 rounded-[8px] border border-[#d8c9af] bg-white ${compact ? "p-0.5" : "p-1"}`}
      aria-label={content.meta.languageLabel}
    >
      {(["es", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onLanguageChange(item)}
          className={`rounded-[6px] font-bold transition ${
            language === item
              ? "bg-[#17212b] text-white"
              : "text-slate-600 hover:bg-[#f1ede5]"
          } ${compact ? "h-7 min-w-7 px-1.5 text-[11px]" : "h-8 min-w-10 px-2.5 text-xs"}`}
          aria-pressed={language === item}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function SectionLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.22em] ${
        dark ? "text-[#d8b56d]" : "text-[#8f6a36]"
      }`}
    >
      {children}
    </p>
  );
}

function MobileAutoCarousel({
  children,
  className = "",
  trackClassName = "",
}: {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carouselTrack = trackRef.current as HTMLDivElement | null;
    if (!carouselTrack) return;
    const track = carouselTrack;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    if (reducedMotion.matches || !mobile.matches) return;

    let pauseUntil = 0;

    function getItems() {
      return Array.from(track.children) as HTMLElement[];
    }

    function getNearestIndex() {
      const items = getItems();
      if (!items.length) return 0;
      const currentLeft = track.scrollLeft;
      let nearest = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const targetLeft = item.offsetLeft - track.offsetLeft;
        const distance = Math.abs(targetLeft - currentLeft);
        if (distance < nearestDistance) {
          nearest = index;
          nearestDistance = distance;
        }
      });

      return nearest;
    }

    function moveNext() {
      if (Date.now() < pauseUntil || document.hidden) return;
      const items = getItems();
      if (items.length < 2) return;
      const nextIndex = (getNearestIndex() + 1) % items.length;
      const nextItem = items[nextIndex];
      track.scrollTo({ left: nextItem.offsetLeft - track.offsetLeft, behavior: "smooth" });
      setActiveIndex(nextIndex);
    }

    function pauseAutoScroll() {
      pauseUntil = Date.now() + 6500;
    }

    function updateActiveIndex() {
      setActiveIndex(getNearestIndex());
    }

    const interval = window.setInterval(moveNext, 3600);
    track.addEventListener("pointerdown", pauseAutoScroll, { passive: true });
    track.addEventListener("focusin", pauseAutoScroll);
    track.addEventListener("scroll", updateActiveIndex, { passive: true });

    return () => {
      window.clearInterval(interval);
      track.removeEventListener("pointerdown", pauseAutoScroll);
      track.removeEventListener("focusin", pauseAutoScroll);
      track.removeEventListener("scroll", updateActiveIndex);
    };
  }, []);

  const itemCount = Array.isArray(children) ? children.length : 1;

  return (
    <div className={`max-w-full overflow-hidden md:hidden ${className}`}>
      <div
        ref={trackRef}
        className={`flex max-w-full snap-x gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${trackClassName}`}
      >
        {children}
      </div>
      {itemCount > 1 ? (
        <div className="mt-4 flex justify-center gap-1.5" aria-hidden="true">
          {Array.from({ length: itemCount }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-5 bg-[#15845f]" : "w-1.5 bg-[#d8c9af]"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ConversionHero({ content }: { content: Content }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[84svh] overflow-hidden bg-[#101b26] text-white md:hidden">
        <Image
          src={sectionOneServiceImages.openKitchenLiving}
          alt={content.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1520]/48" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,21,32,0.12)_0%,rgba(11,21,32,0.48)_42%,rgba(11,21,32,0.84)_100%)]" />
        <div className="relative z-10 flex min-h-[84svh] flex-col justify-end overflow-hidden px-4 pb-12 pt-14 text-center">
          <Reveal>
            <p className="mx-auto max-w-[17rem] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e3c279] min-[380px]:text-[11px]">
              {content.hero.eyebrow}
            </p>
            <h1 className="mx-auto mt-5 max-w-[21rem] font-serif text-[1.82rem] font-semibold leading-[1.06] tracking-tight [text-wrap:balance] min-[380px]:text-[2rem]">
              {content.hero.headlineStart}
              <span className="block italic text-[#e3c279]">{content.hero.highlight}</span>
            </h1>
            <p className="mx-auto mt-5 line-clamp-5 max-w-[19.5rem] text-sm leading-7 text-white/82">
              {content.hero.subheadline}
            </p>
            <div className="mx-auto mt-6 flex max-w-xs flex-wrap justify-center gap-2">
              {content.hero.chips.slice(0, 2).map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/18 bg-white/12 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mx-auto mt-8 grid w-full max-w-[17.5rem] gap-3 min-[380px]:max-w-[18.5rem]">
              <a
                href="#mobile-estimate"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#15845f] px-7 font-semibold text-white shadow-2xl shadow-black/30"
              >
                {content.hero.primaryCta}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={contact.whatsappHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/22 bg-white/12 px-6 font-semibold text-white backdrop-blur"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {content.hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <div id="mobile-estimate" className="bg-[#fffdf8] px-4 py-6 md:hidden">
        <EstimateCard content={content} compactMobile />
      </div>
      <div className="relative hidden overflow-hidden bg-[linear-gradient(135deg,#fffdf8_0%,#f1ede5_58%,#e8ddcb_100%)] md:block">
        <div className="absolute inset-0 opacity-[0.16]">
          <Image
            src={imageAssets.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fffdf8_0%,rgba(255,253,248,0.86)_48%,rgba(255,253,248,0.62)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b98c51]/40 to-transparent" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#d8b56d]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 sm:py-12 lg:min-h-[calc(100vh-69px)] lg:grid-cols-[1fr_0.84fr] lg:gap-10 lg:py-16">
          <Reveal className="self-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8f6a36]">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-[2.65rem] font-semibold leading-[1] tracking-tight text-[#17212b] sm:text-6xl lg:text-7xl">
              {content.hero.headlineStart}{" "}
              <span className="italic text-[#8f6a36]">{content.hero.highlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {content.hero.subheadline}
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {content.hero.chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9cab3] bg-white/75 px-4 py-2 text-sm font-semibold text-[#17212b] shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#15845f]" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[#15845f] px-6 font-semibold text-white shadow-xl shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-[#116d50] sm:h-13 sm:w-auto"
              >
                {content.hero.primaryCta}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={contact.whatsappHref}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[8px] border border-[#d8c9af] bg-white/85 px-6 font-semibold text-[#17212b] transition hover:border-[#b98c51] sm:h-13 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {content.hero.secondaryCta}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} id="estimate" className="relative">
            <div className="pointer-events-none absolute -inset-5 hidden rounded-[8px] border border-white/50 bg-white/20 shadow-2xl shadow-slate-900/10 lg:block" />
            <EstimateCard content={content} compactMobile />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MobileProofStrip({ content }: { content: Content }) {
  const items = [
    content.trust.items[0],
    content.hero.chips[1],
    content.trust.items[3],
  ];

  return (
    <section className="border-y border-[#e5dac9] bg-[#fffdf8] px-4 py-4 md:hidden">
      <div className="grid grid-cols-3 gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[8px] border border-[#e8dece] bg-white px-2 py-3 text-center shadow-sm"
          >
            <CheckCircle2 className="mx-auto h-4 w-4 text-[#15845f]" aria-hidden="true" />
            <p className="mt-1 text-[11px] font-bold leading-4 text-[#17212b]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EstimateCard({
  content,
  dark = false,
  compactMobile = false,
}: {
  content: Content;
  dark?: boolean;
  compactMobile?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const form = content.form;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className={`w-full max-w-full rounded-[8px] border p-4 shadow-[0_24px_80px_rgba(23,33,43,0.14)] backdrop-blur sm:p-5 md:p-7 ${
        dark
          ? "border-white/10 bg-white text-[#17212b]"
          : "border-[#ded2bf] bg-white/95"
      } ${compactMobile ? "shadow-[0_18px_50px_rgba(23,33,43,0.12)]" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6a36]">
            {form.eyebrow}
          </p>
          <h2 className={`mt-2 font-semibold tracking-tight ${compactMobile ? "text-xl" : "text-2xl sm:text-3xl"}`}>
            {form.title}
          </h2>
        </div>
        <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-[#edf6f2] text-[#15845f] sm:grid md:h-12 md:w-12">
          <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <div
        className={`mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 ${
          compactMobile ? "grid-cols-1 min-[420px]:grid-cols-2" : ""
        }`}
      >
        <Field label={form.name} placeholder={form.namePlaceholder} autoComplete="name" />
        <Field label={form.phone} placeholder={form.phonePlaceholder} autoComplete="tel" />
        <Field
          label={form.email}
          placeholder={form.emailPlaceholder}
          type="email"
          autoComplete="email"
          className={compactMobile ? "hidden sm:block" : ""}
        />
        <label className={compactMobile ? "min-w-0 min-[420px]:col-span-2 sm:col-span-1" : "block min-w-0"}>
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            {form.projectType}
          </span>
          <select
            defaultValue=""
            className="h-12 w-full min-w-0 rounded-[8px] border border-[#ded6c8] bg-white px-4 text-slate-800 outline-none transition focus:border-[#15845f] focus:ring-4 focus:ring-emerald-100"
          >
            <option value="" disabled>
              {form.selectService}
            </option>
            {content.services.items.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className={compactMobile ? "mt-4 hidden min-w-0 sm:block" : "mt-4 block min-w-0"}>
        <span className="mb-2 block text-sm font-semibold text-slate-700">
          {form.projectDetails}
        </span>
        <textarea
          className="min-h-24 w-full min-w-0 resize-y rounded-[8px] border border-[#ded6c8] bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#15845f] focus:ring-4 focus:ring-emerald-100 sm:min-h-28"
          placeholder={form.detailsPlaceholder}
        />
      </label>
      <div
        className={
          compactMobile
            ? "mt-4 hidden gap-3 sm:grid sm:grid-cols-[1fr_1fr] sm:gap-4"
            : "mt-4 grid gap-3 sm:grid-cols-[1fr_1fr] sm:gap-4"
        }
      >
        <label className="block min-w-0">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            {form.preferredContact}
          </span>
          <select className="h-12 w-full min-w-0 rounded-[8px] border border-[#ded6c8] bg-white px-4 text-slate-800 outline-none transition focus:border-[#15845f] focus:ring-4 focus:ring-emerald-100">
            {form.contactOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-dashed border-[#cbb89b] bg-[#fbfaf6] px-4 text-sm font-semibold text-[#6f5633] transition hover:border-[#b98c51] hover:bg-[#f4eee4] sm:mt-7">
          <Camera className="h-5 w-5" aria-hidden="true" />
          {form.photos}
          <input type="file" className="sr-only" multiple accept="image/*" />
        </label>
      </div>
      <button
        type="submit"
        className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#15845f] px-5 font-semibold text-white shadow-xl shadow-emerald-900/15 transition hover:bg-[#116d50] ${compactMobile ? "h-[52px]" : "h-12"}`}
      >
        {form.button}
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>
      <p
        className={`mt-3 text-center text-sm leading-6 text-slate-500 ${
          compactMobile ? "hidden sm:block" : ""
        }`}
      >
        {form.microcopy}
      </p>
      {submitted ? (
        <div
          role="status"
          className="mt-4 rounded-[8px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
        >
          {form.success}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  autoComplete,
  className = "",
}: {
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <label className={`block min-w-0 ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>
      <input
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="h-12 w-full min-w-0 rounded-[8px] border border-[#ded6c8] bg-white px-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#15845f] focus:ring-4 focus:ring-emerald-100"
      />
    </label>
  );
}

function getServiceImpactItems(content: Content): ExecutiveImpactItem[] {
  return content.services.items.map((service, index) => ({
    id: `${index}-${service.title}`,
    title: service.title,
    description: service.description,
    primaryImage: featuredServiceImages[index] ?? imageAssets.hero,
    secondaryImage: alternateServiceImages[index] ?? imageAssets.consultation,
    tag: String(index + 1).padStart(2, "0"),
    ctaLabel: content.hero.primaryCta,
    href: "#estimate",
  }));
}

function PremiumServiceGrid({ content }: { content: Content }) {
  const mobileServices = content.services.items.slice(0, 4);
  const compactServices = content.services.items.slice(4);
  const impactItems = getServiceImpactItems(content);

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:pb-0 lg:pt-24">
      <Reveal>
        <SectionLabel>{content.services.label}</SectionLabel>
        <div className="mt-4 grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            {content.services.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {content.services.subtitle}
          </p>
        </div>
      </Reveal>
      <MobileAutoCarousel className="mt-8" trackClassName="gap-4">
        {mobileServices.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={Icon}
              index={index}
              image={featuredServiceImages[index]}
              imageAlt={"imageAlt" in service ? service.imageAlt : service.title}
              className="min-w-[86%] snap-start"
            />
          );
        })}
      </MobileAutoCarousel>
      <MobileServiceChips services={compactServices} />
      <ExecutiveImpactCarousel items={impactItems} className="mt-12" />
    </section>
  );
}

function MobileServiceChips({
  services,
}: {
  services: readonly ServiceItem[];
}) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-2 md:hidden">
      {services.map((service) => (
        <a
          key={service.title}
          href="#mobile-estimate"
          className="flex min-h-12 min-w-0 items-center gap-2 overflow-hidden rounded-[8px] border border-[#e5dac9] bg-white px-3 py-2 text-sm font-semibold leading-tight text-[#17212b] shadow-sm"
        >
          <Check className="h-4 w-4 shrink-0 text-[#15845f]" aria-hidden="true" />
          <span className="min-w-0 break-words">{service.title}</span>
        </a>
      ))}
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
  image,
  imageAlt,
  hiddenOnMobile = false,
  className = "",
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  index: number;
  image?: string;
  imageAlt?: string;
  hiddenOnMobile?: boolean;
  className?: string;
}) {
  const mobileVisibility = hiddenOnMobile ? "hidden md:block" : "";

  if (image) {
    return (
      <Reveal
        delay={(index % 3) * 70}
        as="article"
        className={`${mobileVisibility} ${className} group overflow-hidden rounded-[8px] border border-[#e5dac9] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c8b18e] hover:shadow-xl hover:shadow-slate-900/8`}
      >
        <div className="relative h-44 overflow-hidden sm:h-48">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17212b]/55 to-transparent" />
          <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-[8px] bg-white/90 text-[#15845f] shadow-lg sm:bottom-4 sm:left-4 sm:h-11 sm:w-11">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </span>
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="text-base font-semibold leading-tight sm:text-xl sm:leading-normal">{title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{description}</p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal
      delay={(index % 3) * 70}
      as="article"
      className={`${mobileVisibility} ${className} group min-h-48 rounded-[8px] border border-[#e5dac9] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c8b18e] hover:shadow-xl hover:shadow-slate-900/8 sm:min-h-52 sm:p-6`}
    >
      <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-[#f1ede5] text-[#8f6a36] transition group-hover:bg-[#edf6f2] group-hover:text-[#15845f]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </Reveal>
  );
}

function FeaturedProjects({ content }: { content: Content }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-[#101b26] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <Reveal>
          <SectionLabel dark>{content.projects.label}</SectionLabel>
          <div className="mt-4 grid gap-5 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
              {content.projects.title}
            </h2>
            <p className="hidden max-w-2xl text-lg leading-8 text-white/65 sm:block">
              {content.projects.subtitle}
            </p>
          </div>
        </Reveal>
        <MobileAutoCarousel className="mt-10">
          {content.projects.items.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              content={content}
              onSelect={setActiveProject}
              className="min-w-[92%] snap-start"
            />
          ))}
        </MobileAutoCarousel>
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {content.projects.items.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              content={content}
              onSelect={setActiveProject}
            />
          ))}
        </div>
      </div>
      <ProjectModal
        content={content}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

function ProjectCard({
  project,
  index,
  content,
  onSelect,
  className = "",
}: {
  project: Project;
  index: number;
  content: Content;
  onSelect: (project: Project) => void;
  className?: string;
}) {
  return (
    <Reveal
      delay={index * 80}
      as="article"
      className={`${className} group overflow-hidden rounded-[8px] border border-white/10 bg-white/8 p-2 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#d8b56d]/50 sm:p-3`}
    >
      <div className="relative">
        <LocalizedBeforeAfterSlider
          beforeSrc={project.before}
          afterSrc={project.after}
          beforeAlt={`${project.title} ${content.projects.beforeLabel}`}
          afterAlt={`${project.title} ${content.projects.afterLabel}`}
          beforeLabel={content.projects.beforeLabel}
          afterLabel={content.projects.afterLabel}
          ariaLabel={content.projects.sliderLabel}
          dark
        />
      </div>
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="block w-full p-4 text-left focus:outline-none focus:ring-4 focus:ring-[#d8b56d]/30"
        aria-label={`${project.number}: ${project.title}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8b56d] sm:text-sm">
          {project.number}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200 sm:text-sm sm:tracking-[0.18em]">
          {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-semibold sm:text-2xl">{project.title}</h3>
        <p className="mt-3 hidden text-sm leading-6 text-white/65 sm:block sm:text-base sm:leading-7">
          {project.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 ring-1 ring-white/10 sm:bg-transparent sm:px-0 sm:py-0 sm:text-emerald-200 sm:ring-0">
          {project.cta}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </button>
    </Reveal>
  );
}

function LocalizedBeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  ariaLabel,
  dark = false,
  className = "",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  ariaLabel: string;
  dark?: boolean;
  className?: string;
}) {
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
      className={`group relative isolate aspect-[4/3] overflow-hidden rounded-[8px] ${
        dark ? "bg-slate-950" : "bg-stone-200"
      } ${className}`}
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
        {ariaLabel}
      </span>
      <span className="sr-only">{beforeAlt}</span>
      <Image
        src={afterSrc}
        alt={afterAlt}
        width={1200}
        height={900}
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
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
        {beforeLabel}
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-950 sm:right-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
        {afterLabel}
      </div>
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_24px_rgba(0,0,0,0.35)]"
        style={{ left: `${value}%` }}
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/90 text-sm font-bold text-stone-900 shadow-xl sm:h-12 sm:w-12">
          <span aria-hidden="true">||</span>
        </div>
      </div>
      <label htmlFor={`${id}-range`} className="sr-only">
        {ariaLabel}
      </label>
      <input
        id={`${id}-range`}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        aria-valuetext={`${value}%`}
      />
    </div>
  );
}

function ProjectModal({
  content,
  project,
  onClose,
}: {
  content: Content;
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-3 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.number}: ${project.title}`}
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[8px] bg-[#fffdf8] p-4 text-[#17212b] shadow-2xl md:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-[#17212b] text-white shadow-lg transition hover:bg-[#263748] sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          aria-label={content.projects.close}
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <LocalizedBeforeAfterSlider
          beforeSrc={project.before}
          afterSrc={project.after}
          beforeAlt={`${project.title} ${content.projects.beforeLabel}`}
          afterAlt={`${project.title} ${content.projects.afterLabel}`}
          beforeLabel={content.projects.beforeLabel}
          afterLabel={content.projects.afterLabel}
          ariaLabel={content.projects.sliderLabel}
          className="max-h-[570px]"
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.58fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6a36]">
              {project.number}
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#15845f]">
              {project.category}
            </p>
            <h3 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {project.description}
            </p>
          </div>
          <div className="rounded-[8px] border border-[#e5dac9] bg-white p-5">
            <p className="font-semibold">{content.projects.servicesIncluded}</p>
            <ul className="mt-4 space-y-3">
              {project.services.map((service) => (
                <li key={service} className="flex gap-3 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#15845f]" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
            <a
              href="#mobile-estimate"
              onClick={onClose}
              className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-[#15845f] px-4 font-semibold text-white transition hover:bg-[#116d50] md:hidden"
            >
              {project.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#estimate"
              onClick={onClose}
              className="mt-6 hidden h-11 w-full items-center justify-center gap-2 rounded-[8px] bg-[#15845f] px-4 font-semibold text-white transition hover:bg-[#116d50] md:inline-flex"
            >
              {project.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyChoose({ content }: { content: Content }) {
  return (
    <section id="about" className="mx-auto hidden max-w-7xl gap-8 px-4 py-14 sm:px-5 sm:py-20 md:grid lg:grid-cols-[1fr_0.86fr] lg:items-center lg:gap-10 lg:py-24">
      <Reveal>
        <SectionLabel>{content.why.label}</SectionLabel>
        <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
          {content.why.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg">
          {content.why.copy}
        </p>
        <MobileAutoCarousel className="mt-7" trackClassName="gap-3">
          {content.why.benefits.slice(0, 4).map((benefit) => (
            <BenefitCard key={benefit} benefit={benefit} className="min-w-[78%] snap-start" />
          ))}
        </MobileAutoCarousel>
        <div className="mt-8 hidden gap-4 md:grid md:grid-cols-2">
          {content.why.benefits.map((benefit) => (
            <BenefitCard key={benefit} benefit={benefit} />
          ))}
        </div>
        <div className="mt-5 hidden items-center justify-between gap-4 rounded-[8px] border border-[#e5dac9] bg-[#fffdf8] p-4 shadow-sm md:flex">
          <div className="flex flex-wrap gap-2">
            {content.hero.chips.slice(0, 3).map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-[#edf6f2] px-3 py-1.5 text-xs font-semibold text-[#116d50]"
              >
                {chip}
              </span>
            ))}
          </div>
          <a
            href="#estimate"
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-[8px] bg-[#15845f] px-4 text-sm font-semibold text-white"
          >
            {content.hero.primaryCta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
      <MeetAndresCard content={content} />
    </section>
  );
}

function BenefitCard({
  benefit,
  className = "",
}: {
  benefit: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} flex gap-3 rounded-[8px] border border-[#e5dac9] bg-white p-4 shadow-sm`}
    >
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#15845f]" aria-hidden="true" />
      <p className="text-sm font-medium leading-6 sm:text-base">{benefit}</p>
    </div>
  );
}

function MeetAndresCard({ content }: { content: Content }) {
  return (
    <Reveal
      delay={120}
      className="rounded-[8px] border border-[#e5dac9] bg-white p-3 shadow-[0_24px_70px_rgba(23,33,43,0.1)] sm:p-4"
    >
      <div className="relative overflow-hidden rounded-[8px] bg-[#f1ede5]">
        <Image
          src={imageAssets.consultation}
          alt={content.why.imageAlt}
          width={900}
          height={620}
          className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-[#17212b] backdrop-blur">
          {content.why.photoCaption}
        </span>
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6a36]">
          {content.why.cardTitle}
        </p>
        <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{content.why.cardSubtitle}</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {content.why.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-[8px] bg-[#f1ede5] px-3 py-2 text-center text-sm font-semibold"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function VideoTestimonials({ content }: { content: Content }) {
  const [activeVideo, setActiveVideo] = useState<VideoStory | null>(null);

  return (
    <section className="bg-[#fffdf8] py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <Reveal>
          <SectionLabel>{content.videos.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            {content.videos.title}
          </h2>
          <p className="mt-5 hidden max-w-2xl text-lg leading-8 text-slate-600 sm:block">
            {content.videos.subtitle}
          </p>
        </Reveal>
        <MobileAutoCarousel className="mt-8">
          {content.videos.items.map((story, index) => (
            <VideoStoryCard
              key={story.title}
              story={story}
              index={index}
              onSelect={setActiveVideo}
              className="min-w-[84%] snap-start"
            />
          ))}
        </MobileAutoCarousel>
        <div className="mt-10 hidden gap-5 sm:mt-12 md:grid md:grid-cols-3">
          {content.videos.items.map((story, index) => (
            <VideoStoryCard
              key={story.title}
              story={story}
              index={index}
              onSelect={setActiveVideo}
            />
          ))}
        </div>
      </div>
      <VideoModal
        content={content}
        story={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}

function VideoStoryCard({
  story,
  index,
  onSelect,
  className = "",
}: {
  story: VideoStory;
  index: number;
  onSelect: (story: VideoStory) => void;
  className?: string;
}) {
  return (
    <Reveal
      delay={index * 70}
      as="article"
      className={className}
    >
      <button
        type="button"
        onClick={() => onSelect(story)}
        className="group w-full overflow-hidden rounded-[8px] border border-[#e5dac9] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/8"
        aria-label={story.title}
      >
        <span className="relative block">
          <Image
            src={story.thumbnail}
            alt=""
            width={900}
            height={520}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#101b26]/70 via-[#101b26]/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#17212b] sm:left-5 sm:top-5 sm:tracking-[0.16em]">
            {story.project}
          </span>
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#17212b] shadow-xl transition group-hover:scale-105 sm:h-16 sm:w-16">
            <Play className="h-5 w-5 fill-current sm:h-6 sm:w-6" aria-hidden="true" />
          </span>
        </span>
        <span className="block p-5 sm:p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8f6a36] sm:text-sm sm:tracking-[0.18em]">
            {story.project}
          </span>
          <span className="mt-3 block text-lg font-semibold sm:text-xl">{story.title}</span>
          <span className="mt-3 block text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {story.quote}
          </span>
        </span>
      </button>
    </Reveal>
  );
}

function VideoModal({
  content,
  story,
  onClose,
}: {
  content: Content;
  story: VideoStory | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!story) return;
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={story.title}
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-[8px] bg-[#101b26] text-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/12 text-white backdrop-blur transition hover:bg-white/20"
          aria-label={content.videos.close}
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="grid aspect-video place-items-center bg-[linear-gradient(135deg,#172536,#0c1219)]">
          <div className="px-5 text-center sm:px-8">
            <Play className="mx-auto h-12 w-12 fill-current text-white/90 sm:h-14 sm:w-14" aria-hidden="true" />
            <p className="mt-4 text-xl font-semibold sm:text-2xl">{content.videos.comingSoon}</p>
            <p className="mt-3 text-white/62">{content.videos.ready}</p>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d8b56d]">
            {story.project}
          </p>
          <p className="mt-3 text-lg leading-8 text-white/78">{story.quote}</p>
        </div>
      </div>
    </div>
  );
}

function WrittenReviews({ content }: { content: Content }) {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-20 lg:py-24">
      <Reveal>
        <SectionLabel>{content.reviews.label}</SectionLabel>
        <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
          {content.reviews.title}
        </h2>
      </Reveal>
      <MobileAutoCarousel className="mt-8">
        {content.reviews.items.map((review, index) => (
          <ReviewCard
            key={review.author}
            review={review}
            index={index}
            ratingLabel={content.reviews.ratingLabel}
            className="min-w-[86%] snap-start"
          />
        ))}
      </MobileAutoCarousel>
      <div className="mt-12 hidden gap-5 md:grid md:grid-cols-3">
        {content.reviews.items.map((review, index) => (
          <ReviewCard
            key={review.author}
            review={review}
            index={index}
            ratingLabel={content.reviews.ratingLabel}
          />
        ))}
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  index,
  ratingLabel,
  className = "",
}: {
  review: Content["reviews"]["items"][number];
  index: number;
  ratingLabel: string;
  className?: string;
}) {
  return (
    <Reveal
      delay={index * 70}
      as="article"
      className={`${className} rounded-[8px] border border-[#e5dac9] bg-white p-5 shadow-sm sm:p-7`}
    >
      <div className="flex gap-1 text-[#b98c51]" aria-label={ratingLabel}>
        {Array.from({ length: 5 }).map((_, star) => (
          <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">
        &ldquo;{review.quote}&rdquo;
      </p>
      <p className="mt-6 font-semibold">{review.author}</p>
      <p className="mt-1 text-sm font-medium text-[#15845f]">
        {review.service}
      </p>
    </Reveal>
  );
}

function AboutAndres({ content }: { content: Content }) {
  return (
    <section className="hidden bg-[#fffdf8] py-16 md:block md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-5 lg:grid-cols-[0.78fr_1fr] lg:gap-10">
        <Reveal className="rounded-[8px] border border-[#e5dac9] bg-white p-3 shadow-[0_24px_70px_rgba(23,33,43,0.08)] sm:p-4">
          <div className="relative overflow-hidden rounded-[8px]">
            <Image
              src={imageAssets.andres}
              alt={content.about.photoCaption}
              width={900}
              height={1100}
              className="aspect-[5/4] w-full object-cover object-top sm:aspect-[4/5]"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold text-[#17212b] backdrop-blur sm:bottom-4 sm:left-4 sm:px-4">
              {content.about.photoCaption}
            </span>
          </div>
        </Reveal>
        <Reveal delay={120} className="self-center">
          <SectionLabel>{content.about.label}</SectionLabel>
          <p className="mt-4 text-lg font-semibold text-[#15845f]">
            {content.about.title}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            {content.about.headline}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg">
            {content.about.copy}
          </p>
          <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {content.about.cards.map((card) => (
              <div
                key={card}
                className="flex items-center gap-3 rounded-[8px] border border-[#e5dac9] bg-white p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-[#15845f]" aria-hidden="true" />
                <p className="font-semibold">{card}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSteps({ content }: { content: Content }) {
  return (
    <section className="relative overflow-hidden bg-[#101b26] py-12 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-12">
        <Image
          src={imageAssets.consultation}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#101b26]/86" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5">
        <Reveal>
          <SectionLabel dark>{content.process.label}</SectionLabel>
          <h2 className="mt-4 max-w-4xl font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            {content.process.title}
          </h2>
        </Reveal>
        <MobileAutoCarousel className="mt-8 sm:mt-12" trackClassName="gap-3">
          {content.process.steps.map((step, index) => (
            <ProcessStepCard
              key={step}
              step={step}
              index={index}
              className="min-w-[76%] snap-start"
            />
          ))}
        </MobileAutoCarousel>
        <div className="mt-12 hidden gap-4 md:grid md:grid-cols-5">
          {content.process.steps.map((step, index) => (
            <ProcessStepCard key={step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({
  step,
  index,
  className = "",
}: {
  step: string;
  index: number;
  className?: string;
}) {
  return (
    <Reveal
      delay={index * 70}
      as="article"
      className={`${className} rounded-[8px] border border-white/10 bg-white/8 p-5`}
    >
      <span className="text-sm font-semibold text-[#d8b56d]">
        0{index + 1}
      </span>
      <h3 className="mt-4 text-lg font-semibold">{step}</h3>
    </Reveal>
  );
}

function FAQAccordion({ content }: { content: Content }) {
  const [openIndex, setOpenIndex] = useState(0);
  const mobileFaqs = [
    content.faq.items[0],
    content.faq.items[1],
    content.faq.items[3],
    content.faq.items[5],
  ];

  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-12 sm:px-5 sm:py-20 lg:py-24">
      <Reveal>
        <SectionLabel>{content.faq.label}</SectionLabel>
        <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
          {content.faq.title}
        </h2>
      </Reveal>
      <FAQList items={mobileFaqs} openIndex={openIndex} setOpenIndex={setOpenIndex} className="mt-8 md:hidden" />
      <FAQList items={content.faq.items} openIndex={openIndex} setOpenIndex={setOpenIndex} className="mt-10 hidden md:block" />
    </section>
  );
}

function FAQList({
  items,
  openIndex,
  setOpenIndex,
  className = "",
}: {
  items: readonly FAQItem[];
  openIndex: number;
  setOpenIndex: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={`${className} divide-y divide-[#e5dac9] rounded-[8px] border border-[#e5dac9] bg-white shadow-sm`}>
        {items.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="p-5 sm:p-6">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold outline-none focus:ring-4 focus:ring-emerald-100 sm:gap-5 sm:text-lg"
                aria-expanded={isOpen}
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {isOpen ? (
                <p className="mt-4 leading-8 text-slate-600">{faq.answer}</p>
              ) : null}
            </div>
          );
        })}
      </div>
  );
}

function FinalCTA({ content }: { content: Content }) {
  return (
    <section className="relative overflow-hidden bg-[#101b26] py-12 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-60">
        <Image
          src={imageAssets.hero}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#101b26]/42" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#101b26_0%,rgba(16,27,38,0.58)_42%,rgba(16,27,38,0.18)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-5 lg:grid-cols-[0.78fr_1fr] lg:gap-10">
        <Reveal className="self-center">
          <SectionLabel dark>{content.finalCta.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            {content.finalCta.title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-lg sm:leading-8">
            {content.finalCta.subtitle}
          </p>
          <div className="mt-6 grid gap-2 rounded-[8px] border border-white/10 bg-white/8 p-4 text-sm text-white/78 sm:mt-8 sm:bg-transparent sm:p-0 sm:text-white/75 sm:border-0">
            <p>
              {content.finalCta.contactLabels.phone}: {content.contact.phone}
            </p>
            <p>
              {content.finalCta.contactLabels.email}: {content.contact.email}
            </p>
            <p>
              {content.finalCta.contactLabels.instagram}: {content.contact.instagram}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:flex md:flex-row">
            <a
              href="#mobile-estimate"
              className="col-span-2 inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[#15845f] px-5 font-semibold text-white shadow-xl shadow-black/20 md:hidden"
            >
              {content.finalCta.estimate}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/15 bg-white/8 px-5 font-semibold"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {content.finalCta.call}
            </a>
            <a
              href={contact.whatsappHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/15 bg-white/8 px-5 font-semibold"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="hidden md:block">
          <EstimateCard content={content} dark />
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ content }: { content: Content }) {
  return (
    <footer className="border-t border-[#e5dac9] bg-[#fffdf8] px-4 py-10 pb-28 text-sm text-slate-600 sm:px-5 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-[#17212b]">All In One Solution</p>
          <p className="mt-3 leading-7">{content.footer.description}</p>
          <p className="mt-1">{content.footer.location}</p>
        </div>
        <div className="hidden md:block">
          <p className="font-semibold text-[#17212b]">{content.footer.explore}</p>
          <div className="mt-3 grid gap-2">
            {content.footer.links.map((label, index) => {
              const href = ["#services", "#projects", "#reviews", "#faq"][index];
              return (
                <a key={label} href={href}>
                  {label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block">
          <p className="font-semibold text-[#17212b]">{content.footer.services}</p>
          <div className="mt-3 grid gap-2">
            {content.footer.serviceLinks.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-[#17212b]">{content.footer.contact}</p>
          <div className="mt-3 grid gap-2">
            <a href={contact.phoneHref}>{content.contact.phone}</a>
            <a href={contact.emailHref}>{content.contact.email}</a>
            <a href={contact.instagramHref}>{content.contact.instagram}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCTA({ content }: { content: Content }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid w-full max-w-[100vw] grid-cols-3 gap-1 overflow-hidden border-t border-[#d8c9af] bg-[#fffdf8]/95 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-2xl backdrop-blur md:hidden">
      <a
        href={contact.phoneHref}
        className="grid min-w-0 place-items-center gap-1 rounded-[8px] py-2 text-[10px] font-semibold text-[#17212b] min-[380px]:text-[11px]"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        {content.sticky.call}
      </a>
      <a
        href={contact.whatsappHref}
        className="grid min-w-0 place-items-center gap-1 rounded-[8px] py-2 text-[10px] font-semibold text-[#17212b] min-[380px]:text-[11px]"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        {content.sticky.whatsapp}
      </a>
      <a
        href="#mobile-estimate"
        className="grid min-w-0 place-items-center gap-1 rounded-[8px] bg-[#15845f] px-1 py-2 text-[10px] font-semibold text-white min-[380px]:text-[11px]"
      >
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
        {content.sticky.estimate}
      </a>
    </div>
  );
}
