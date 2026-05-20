import {
  Bath,
  Blocks,
  Brush,
  Building2,
  CheckCircle2,
  Hammer,
  Home,
  MessageCircle,
  Phone,
  Ruler,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { EstimateForm } from "@/components/EstimateForm";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import {
  business,
  projects,
  services,
  videoTestimonials,
  writtenTestimonials,
} from "@/lib/site-data";

const story = [
  "We understand your vision",
  "We plan the details",
  "We execute with care",
  "We reveal the transformation",
];

const icons = [Home, Bath, Ruler, Blocks, Brush, Hammer, Building2, Sparkles];

export default function TechTransformationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071018] text-white">
      <ScrollProgress />
      <header className="fixed left-0 right-0 top-1 z-40 border-b border-white/10 bg-[#071018]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="font-semibold tracking-tight">
            {business.name}
          </a>
          <div className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <a href="#story" className="hover:text-white">Process</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#estimate" className="hover:text-white">Estimate</a>
          </div>
          <a
            href="#estimate"
            className="inline-flex h-11 items-center gap-2 rounded-[8px] bg-cyan-300 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Start
            <Zap className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="relative pt-20">
        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Immersive remodeling preview
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
              See What Your Space Can Become
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              All In One Solution brings kitchens, bathrooms, floors, offices
              and complete spaces to life with expert remodeling, modern finishes
              and a process built around trust.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex h-13 items-center justify-center rounded-[8px] bg-cyan-300 px-6 font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Start Your Transformation
              </a>
              <a
                href="#videos"
                className="inline-flex h-13 items-center justify-center rounded-[8px] border border-white/18 px-6 font-semibold text-white transition hover:border-white/50"
              >
                Watch Client Stories
              </a>
            </div>
          </Reveal>
          <Reveal delay={140} className="relative">
            <div className="rounded-[8px] border border-white/12 bg-white/8 p-3 shadow-2xl shadow-cyan-950/70 backdrop-blur-xl">
              <BeforeAfterSlider
                beforeSrc={projects[1].before}
                afterSrc={projects[1].after}
                beforeAlt="Bathroom before remodeling placeholder"
                afterAlt="Bathroom after remodeling placeholder"
                dark
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="story" className="relative border-y border-white/10 bg-[#0b1520]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.75fr_1fr]">
          <div className="self-start lg:sticky lg:top-32">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8b56d]">
                Scroll story
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                From first idea to reveal.
              </h2>
            </Reveal>
          </div>
          <div className="space-y-5">
            {story.map((item, index) => (
              <Reveal
                key={item}
                delay={index * 90}
                className="rounded-[8px] border border-white/10 bg-white/8 p-8 backdrop-blur"
                as="article"
              >
                <span className="text-sm font-semibold text-cyan-200">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-3xl font-semibold">{item}</h3>
                <p className="mt-4 max-w-2xl text-white/62">
                  A clear phase placeholder for the final sales copy and process
                  details.
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Services
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Dark interactive cards for every remodeling need.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal
                key={service}
                delay={(index % 4) * 60}
                className="group rounded-[8px] border border-white/10 bg-white/7 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/11"
                as="article"
              >
                <Icon className="h-7 w-7 text-cyan-200 transition group-hover:scale-110" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{service}</h3>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-[#09131d] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8b56d]">
              Before / after gallery
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Open each transformation.
            </h2>
          </Reveal>
          <div className="mt-12">
            <ProjectGallery projects={projects} dark />
          </div>
        </div>
      </section>

      <section id="videos" className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Video testimonials
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Horizontal client story carousel.
          </h2>
        </Reveal>
        <div className="mt-12">
          <VideoTestimonials items={videoTestimonials} variant="dark" horizontal />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b1520] py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Written testimonials as message placeholders.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-5">
            {writtenTestimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.project}
                delay={index * 90}
                className={`max-w-3xl rounded-[8px] border border-white/10 bg-white/8 p-6 backdrop-blur ${index % 2 ? "ml-auto" : ""}`}
                as="article"
              >
                <p className="text-white/72">{testimonial.text}</p>
                <p className="mt-4 font-semibold text-cyan-200">
                  {testimonial.name} · {testimonial.project}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1fr_0.82fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8b56d]">
            About Andrés
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            A remodeling lead with 9+ years of experience.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/64">
            Andrés leads each project with hands-on communication, modern finish
            awareness and a practical process. This editorial block is ready for
            the final photo, bio and brand story.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["9+ Years", "Homes + Offices", "Free Estimates"].map((metric) => (
              <div key={metric} className="rounded-[8px] border border-white/10 bg-white/8 p-5">
                <CheckCircle2 className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                <p className="mt-4 text-2xl font-semibold">{metric}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="rounded-[8px] border border-white/10 bg-white/8 p-3 backdrop-blur-xl">
          <Image
            src="/placeholders/andres-tech-placeholder.svg"
            alt="Editorial portrait placeholder for Andres"
            width={900}
            height={1100}
            className="image-reveal aspect-[4/5] w-full rounded-[8px] object-cover"
          />
        </Reveal>
      </section>

      <section id="estimate" className="bg-[#09131d] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1fr]">
          <Reveal className="self-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Multi-step estimate
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Start with the details that matter.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={business.phoneHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/15 px-5 font-semibold">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call
              </a>
              <a href={business.whatsappHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-white/15 px-5 font-semibold">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <EstimateForm theme="dark" multiStep />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-sm text-white/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-white">{business.altName}</p>
          <p>{business.phone} · {business.email} · {business.instagram}</p>
        </div>
      </footer>
    </main>
  );
}
