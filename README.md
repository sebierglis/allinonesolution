# All In One Solution landing concepts

Next.js + TypeScript + Tailwind CSS project with three remodeling landing page mockups:

- `/concept-1-premium-trust`
- `/concept-2-tech-transformation`
- `/concept-3-conversion-local`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Replace editable placeholders

Most business content is centralized in:

```text
src/lib/site-data.ts
```

Update this file to replace:

- phone and WhatsApp links
- email
- Instagram
- service labels
- project titles and descriptions
- written testimonials
- video testimonial labels
- FAQ text

Image and video thumbnail placeholders live in:

```text
public/placeholders
```

Replace those files with real project photos, approved video thumbnails and the approved photo for Andres. Keep the same filenames for the fastest swap, or update the paths in `src/lib/site-data.ts`.

## Components

- `src/components/BeforeAfterSlider.tsx`: accessible before/after slider with mouse, touch and keyboard support.
- `src/components/VideoTestimonials.tsx`: video testimonial cards with modal placeholder.
- `src/components/EstimateForm.tsx`: reusable contact/free estimate form, including multi-step mode.
- `src/components/Reveal.tsx`: scroll reveal animation that respects `prefers-reduced-motion`.
- `src/components/ProjectGallery.tsx`: project gallery with modal before/after view.
