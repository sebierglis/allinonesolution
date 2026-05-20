import {
  ArrowRight,
  Bath,
  Brush,
  Building2,
  CheckCircle2,
  Hammer,
  Home,
  MessageCircle,
  Phone,
  Ruler,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { EstimateForm } from "@/components/EstimateForm";
import { Reveal } from "@/components/Reveal";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import {
  business,
  processSteps,
  projects,
  services,
  videoTestimonials,
  writtenTestimonials,
} from "@/lib/site-data";

const icons = [Home, Bath, Ruler, Sparkles, Brush, Wrench, Hammer, Building2];

export default function PremiumTrustPage() {
  return (
    <main className="bg-[#fbfaf7] text-stone-950">
      <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#fbfaf7]/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="font-semibold tracking-tight">
            {business.name}
          </a>
          <div className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
            <a href="#services" className="hover:text-stone-950">Services</a>
            <a href="#projects" className="hover:text-stone-950">Projects</a>
            <a href="#about" className="hover:text-stone-950">About</a>
          </div>
          <a
            href="#estimate"
            className="inline-flex h-11 items-center gap-2 rounded-[8px] bg-stone-950 px-4 text-sm font-semibold text-white transition hover:bg-stone-800"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_0.92fr]">
          <Reveal className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9b7440]">
              Premium remodeling services
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
              Transform Your Home With a Remodeling Team You Can Trust
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600">
              All In One Solution helps homeowners and businesses renovate
              kitchens, bathrooms, floors, closets, offices and full spaces with
              professional execution, personal attention and 9+ years of
              experience.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex h-13 items-center justify-center rounded-[8px] bg-stone-950 px-6 font-semibold text-white transition hover:bg-stone-800"
              >
                Get a Free Estimate
              </a>
              <a
                href="#projects"
                className="inline-flex h-13 items-center justify-center rounded-[8px] border border-stone-300 px-6 font-semibold text-stone-950 transition hover:border-stone-950"
              >
                View Our Projects
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="parallax-soft rounded-[8px] border border-stone-200 bg-white p-3 shadow-2xl shadow-stone-300/70">
              <BeforeAfterSlider
                beforeSrc={projects[0].before}
                afterSrc={projects[0].after}
                beforeAlt="Kitchen before remodeling placeholder"
                afterAlt="Kitchen after remodeling placeholder"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Trust signals" className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {["9+ Years Experience", "Residential & Commercial", "Free Estimates", "Personalized Service"].map((item) => (
            <Reveal key={item} className="flex items-center gap-3 py-4" as="article">
              <CheckCircle2 className="h-5 w-5 text-[#b68a4a]" aria-hidden="true" />
              <span className="font-semibold">{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b7440]">
            Services
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Clean execution for every part of the renovation.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal
                key={service}
                delay={(index % 4) * 70}
                className="rounded-[8px] border border-stone-200 bg-white p-6 shadow-lg shadow-stone-200/70"
                as="article"
              >
                <Icon className="h-7 w-7 text-[#9b7440]" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{service}</h3>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="projects" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b7440]">
              Projects
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Before and after project placeholders.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 100} as="article">
                <BeforeAfterSlider
                  beforeSrc={project.before}
                  afterSrc={project.after}
                  beforeAlt={`${project.title} before placeholder`}
                  afterAlt={`${project.title} after placeholder`}
                />
                <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-stone-600">{project.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b7440]">
            Video testimonials
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Client story placeholders.
          </h2>
        </Reveal>
        <div className="mt-12">
          <VideoTestimonials items={videoTestimonials} />
        </div>
      </section>

      <section className="bg-[#f1ede5] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Written testimonials.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {writtenTestimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.project}
                delay={index * 90}
                className="rounded-[8px] bg-white p-7 shadow-xl shadow-stone-300/60"
                as="article"
              >
                <div className="flex gap-1 text-[#b68a4a]" aria-label="Five star review placeholder">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  {testimonial.text}
                </p>
                <p className="mt-6 font-semibold">{testimonial.name}</p>
                <p className="text-sm text-stone-500">{testimonial.project}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.85fr_1fr]">
        <Reveal className="rounded-[8px] border border-stone-200 bg-white p-4 shadow-2xl shadow-stone-200">
          <Image
            src="/placeholders/andres-placeholder.svg"
            alt="Portrait placeholder for Andres"
            width={900}
            height={1100}
            className="aspect-[4/5] w-full rounded-[8px] object-cover"
          />
        </Reveal>
        <Reveal delay={120} className="self-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b7440]">
            About Andrés
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Personal attention from a remodeling lead with 9+ years of experience.
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Andrés leads All In One Solution with a practical, detail-oriented
            approach across residential and commercial remodeling. Replace this
            section with the final bio, approved photo and company story.
          </p>
        </Reveal>
      </section>

      <section className="bg-stone-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A clear 5-step process.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal
                key={step}
                delay={index * 80}
                className="rounded-[8px] border border-white/10 bg-white/6 p-5"
                as="article"
              >
                <span className="text-sm font-semibold text-[#d8b56d]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1fr]">
        <Reveal className="self-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b7440]">
            Start your remodel
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Request a free estimate with no invented details.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={business.phoneHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-stone-300 px-5 font-semibold">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phone}
            </a>
            <a href={business.whatsappHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-stone-300 px-5 font-semibold">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <EstimateForm theme="premium" />
        </Reveal>
      </section>

      <footer className="border-t border-stone-200 bg-white px-5 py-10 text-sm text-stone-600">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-stone-950">{business.altName}</p>
          <p>{business.email} · {business.instagram}</p>
        </div>
      </footer>
    </main>
  );
}
