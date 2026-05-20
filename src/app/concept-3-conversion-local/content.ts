export type Language = "es" | "en";

export const contact = {
  phoneHref: "tel:+10000000000",
  whatsappHref: "https://wa.me/10000000000",
  emailHref: "mailto:hello@example.com",
  instagramHref: "https://instagram.com/",
};

export const concept3Content = {
  es: {
    meta: {
      languageLabel: "Idioma",
    },
    contact: {
      phone: "[Número de teléfono]",
      email: "[Email]",
      instagram: "[Instagram]",
    },
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      reviews: "Reseñas",
      about: "Sobre Andrés",
      faq: "FAQ",
      estimate: "Pedir estimado gratis",
      call: "Llamar ahora",
      menu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      eyebrow: "Estimados gratis disponibles",
      headlineStart: "Remodelaciones profesionales que cuidan cada",
      highlight: "detalle",
      subheadline:
        "Cocinas, baños, pisos, closets, pintura, carpintería y remodelaciones completas para hogares y oficinas. Un equipo con experiencia liderado por Andrés, con más de 9 años en el rubro.",
      primaryCta: "Pedir estimado gratis",
      secondaryCta: "Llamar / WhatsApp",
      chips: [
        "9+ años de experiencia",
        "Hogares y oficinas",
        "Estimados gratis",
        "Atención personalizada",
      ],
      imageAlt: "Cocina remodelada con sala integrada como referencia visual temporal",
    },
    form: {
      eyebrow: "Estimado gratis",
      title: "Contanos sobre tu proyecto",
      name: "Nombre",
      phone: "Teléfono",
      email: "Email",
      projectType: "Tipo de proyecto",
      projectDetails: "Detalles del proyecto",
      preferredContact: "Método de contacto preferido",
      namePlaceholder: "Tu nombre",
      phonePlaceholder: "Tu teléfono",
      emailPlaceholder: "Tu email",
      selectService: "Seleccionar servicio",
      detailsPlaceholder:
        "Contanos qué querés remodelar, el estado actual del espacio y cualquier detalle importante.",
      contactOptions: ["Llamada", "WhatsApp", "Email"],
      photos: "Agregar fotos del proyecto",
      button: "Pedir estimado gratis",
      microcopy:
        "Te contactaremos para entender tu proyecto y coordinar el siguiente paso.",
      success:
        "Gracias. Tu solicitud de estimado está lista para conectarse con email, CRM o WhatsApp.",
    },
    trust: {
      items: ["9+ años", "Residencial", "Comercial", "Estimados gratis"],
    },
    services: {
      label: "01 — Servicios",
      title: "Servicios de remodelación",
      subtitle:
        "Un solo equipo para resolver los detalles que hacen que tu espacio se vea mejor, funcione mejor y se sienta terminado.",
      items: [
        {
          title: "Remodelación de cocinas",
          description:
            "Diseños funcionales, gabinetes, mesadas, iluminación y terminaciones pensadas para el uso diario.",
          imageAlt: "Detalle visual temporal de cocina remodelada",
        },
        {
          title: "Remodelación de baños",
          description:
            "Mejorá tu baño con terminaciones, fixtures y una distribución más limpia.",
          imageAlt: "Baño remodelado como referencia visual temporal",
        },
        {
          title: "Instalación de pisos",
          description:
            "Pisos que ayudan a que cada ambiente se vea más prolijo, cómodo y terminado.",
          imageAlt: "Espacio interior remodelado con pisos cálidos",
        },
        {
          title: "Closets y almacenamiento",
          description:
            "Soluciones prácticas para organizar mejor espacios personales o de trabajo.",
        },
        {
          title: "Pintura interior y exterior",
          description:
            "Preparación, color y terminaciones limpias para renovar el aspecto del espacio.",
        },
        {
          title: "Drywall y terminaciones",
          description:
            "Reparaciones, preparación y terminaciones para paredes listas para el proyecto.",
        },
        {
          title: "Coordinación de plomería",
          description:
            "Coordinación de necesidades de plomería cuando el alcance del proyecto lo requiere.",
        },
        {
          title: "Coordinación eléctrica",
          description:
            "Apoyo en la coordinación eléctrica para cambios de layout, luces o fixtures.",
        },
        {
          title: "Carpintería",
          description:
            "Detalles, molduras, piezas a medida y terminaciones que completan el trabajo.",
        },
        {
          title: "Pavers y áreas exteriores",
          description:
            "Espacios exteriores más prolijos, útiles y preparados para disfrutar.",
          imageAlt: "Área exterior con pavers como referencia visual temporal",
        },
        {
          title: "Remodelación de hogares",
          description:
            "Mejoras integrales para conectar ambientes, acabados y funcionalidad.",
        },
        {
          title: "Remodelación de oficinas",
          description:
            "Actualizaciones para espacios comerciales más limpios, prácticos y profesionales.",
        },
      ],
    },
    projects: {
      label: "02 — Antes y después",
      title: "Proyectos destacados antes y después",
      subtitle:
        "Explorá ejemplos visuales de transformaciones en cocinas, baños y espacios exteriores. Cuando estén disponibles, estas imágenes se reemplazarán por proyectos reales aprobados.",
      beforeLabel: "Antes",
      afterLabel: "Después",
      sliderLabel: "Comparación interactiva de antes y después",
      servicesIncluded: "Servicios incluidos",
      close: "Cerrar proyecto",
      items: [
        {
          number: "Proyecto / 01",
          title: "Renovación de cocina",
          category: "Remodelación de cocina",
          description:
            "Una cocina más clara, funcional y moderna, preparada para el uso diario.",
          services: ["gabinetes", "iluminación", "mesadas", "terminaciones"],
          cta: "Quiero un resultado similar",
          before: "/images/concept-3/before-after/kitchen-before.png",
          after: "/images/concept-3/before-after/kitchen-after.png",
        },
        {
          number: "Proyecto / 02",
          title: "Actualización de baño",
          category: "Remodelación de baño",
          description:
            "Un baño renovado con mejores terminaciones, distribución más limpia y sensación más moderna.",
          services: ["cerámica", "fixtures", "vanitory", "terminaciones"],
          cta: "Quiero un resultado similar",
          before: "/images/concept-3/before-after/bathroom-before.png",
          after: "/images/concept-3/before-after/bathroom-after.png",
        },
        {
          number: "Proyecto / 03",
          title: "Pavers exteriores",
          category: "Áreas exteriores",
          description:
            "Un área exterior más prolija, útil y preparada para disfrutar.",
          services: ["pavers", "preparación de superficie", "terminaciones"],
          cta: "Quiero un resultado similar",
          before: "/images/concept-3/before-after/outdoor-before.png",
          after: "/images/concept-3/before-after/outdoor-after.png",
        },
      ],
    },
    why: {
      label: "03 — Por qué elegirnos",
      title: "Por qué hogares y negocios eligen All In One Solution",
      copy:
        "Con Andrés al frente, All In One Solution se enfoca en comunicación clara, planificación práctica y trabajos de remodelación profesionales para hogares y espacios comerciales.",
      benefits: [
        "Atención personalizada de principio a fin",
        "Experiencia en proyectos residenciales y comerciales",
        "Coordinación para múltiples necesidades de remodelación",
        "Recorridos claros del proyecto",
        "Proceso de estimado gratis",
        "Respeto por tu hogar o negocio",
      ],
      cardTitle: "Conocé a Andrés",
      cardSubtitle: "Liderazgo práctico en remodelación",
      photoCaption: "Planificación clara antes de comenzar",
      imageAlt: "Consulta de remodelación en cocina como referencia visual temporal",
      chips: ["9+ años", "Hogares y oficinas", "Estimados gratis", "Atención directa"],
    },
    videos: {
      label: "04 — Historias de clientes",
      title: "Historias de clientes",
      subtitle:
        "Los testimonios en video se podrán agregar cuando estén disponibles historias reales aprobadas por los clientes.",
      close: "Cerrar video",
      comingSoon: "Video testimonial próximamente",
      ready:
        "Este espacio está preparado para agregar un video real aprobado por el cliente.",
      items: [
        {
          title: "Cliente de remodelación de hogar",
          project: "Remodelación de hogar",
          quote:
            "La comunicación fue clara y el proyecto se sintió organizado desde la primera conversación.",
          thumbnail: "/images/concept-3/consultation-process.png",
        },
        {
          title: "Cliente de cocina y pisos",
          project: "Cocina y pisos",
          quote:
            "Las mejoras hicieron que el espacio se sintiera más limpio, luminoso y fácil de usar.",
          thumbnail: "/images/concept-3/kitchen-detail.png",
        },
        {
          title: "Cliente de oficina",
          project: "Remodelación de oficina",
          quote:
            "El equipo nos ayudó a entender los próximos pasos y mantuvo el proceso práctico.",
          thumbnail: "/images/concept-3/bathroom-remodel.png",
        },
      ],
    },
    reviews: {
      label: "05 — Reseñas",
      title: "Lo que dicen los clientes sobre trabajar con nosotros",
      ratingLabel: "Reseña de cinco estrellas",
      items: [
        {
          quote:
            "Andrés y su equipo fueron claros, respetuosos y fáciles de contactar durante todo el proyecto.",
          author: "Cliente de remodelación de cocina",
          service: "Remodelación de cocina",
        },
        {
          quote:
            "El trabajo hizo que nuestro espacio se sintiera más limpio, luminoso y funcional.",
          author: "Cliente de remodelación de baño",
          service: "Remodelación de baño",
        },
        {
          quote:
            "Valoramos la atención al detalle y la forma en que el equipo explicó cada paso.",
          author: "Cliente de remodelación de hogar",
          service: "Remodelación de hogar",
        },
      ],
    },
    about: {
      label: "06 — Sobre Andrés",
      title: "Conocé a Andrés",
      headline:
        "Un líder de remodelación con más de 9 años de experiencia práctica",
      copy:
        "Andrés lidera All In One Solution con un enfoque práctico, detallista y orientado a la confianza. Con más de 9 años en el rubro, se enfoca en comunicación clara, ejecución responsable y en ayudar a que cada cliente se sienta seguro desde el primer estimado hasta la revisión final.",
      photoCaption: "Foto de Andrés próximamente",
      imageAlt: "Imagen temporal para la sección de Andrés",
      cards: [
        "9+ años de experiencia",
        "Residencial y comercial",
        "Atención personalizada",
        "Estimados gratis",
      ],
    },
    process: {
      label: "07 — Proceso",
      title: "Un proceso simple desde el estimado hasta la revisión final",
      steps: [
        "Pedís tu estimado gratis",
        "Compartís los detalles del proyecto",
        "Revisamos alcance y opciones",
        "Realizamos el trabajo de remodelación",
        "Hacemos la revisión final",
      ],
    },
    faq: {
      label: "08 — Preguntas frecuentes",
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Ofrecen estimados gratis?",
          answer:
            "Sí. Podés pedir un estimado gratis completando el formulario, llamando o enviando un mensaje por WhatsApp con detalles de tu proyecto.",
        },
        {
          question: "¿Qué tipos de proyectos de remodelación realizan?",
          answer:
            "All In One Solution trabaja en cocinas, baños, pisos, closets, pintura, drywall, carpintería, pavers, hogares, oficinas y otras necesidades de remodelación.",
        },
        {
          question: "¿Trabajan en hogares y oficinas?",
          answer:
            "Sí. El equipo puede trabajar en proyectos residenciales y comerciales.",
        },
        {
          question: "¿Puedo enviar fotos de mi proyecto?",
          answer:
            "Sí. Podés enviar fotos para ayudar a entender mejor el espacio, el estado actual y lo que querés lograr.",
        },
        {
          question: "¿Ayudan con cocinas y baños?",
          answer:
            "Sí. Las remodelaciones de cocinas y baños son parte de los servicios principales.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Completá el formulario, llamá o enviá un mensaje por WhatsApp. El equipo revisará la información y coordinará el siguiente paso.",
        },
      ],
    },
    finalCta: {
      label: "09 — Contacto",
      title: "Hablemos sobre tu proyecto",
      subtitle:
        "Usá el formulario, llamá o enviá un mensaje por WhatsApp con fotos y detalles del espacio que querés remodelar.",
      call: "Llamar ahora",
      estimate: "Pedir estimado gratis",
      contactLabels: {
        phone: "Teléfono",
        email: "Email",
        instagram: "Instagram",
      },
    },
    begin: {
      label: "09 — Empecemos",
      title: "Empecemos tu remodelación",
      subtitle:
        "Contanos qué espacio querés transformar. Podemos revisar tu idea, entender el alcance del proyecto y ayudarte a dar el siguiente paso con un estimado gratis.",
      estimate: "Pedir estimado gratis",
      call: "Llamar ahora",
      whatsapp: "WhatsApp",
      imageAlt: "Cocina remodelada con luz cálida como referencia visual temporal",
      chips: [
        "9+ años de experiencia",
        "Hogares y oficinas",
        "Estimados gratis",
        "Atención personalizada",
      ],
    },
    footer: {
      description: "Remodelación de hogares y oficinas",
      location: "South Florida",
      explore: "Explorar",
      services: "Servicios",
      contact: "Contacto",
      links: ["Servicios", "Proyectos", "Reseñas", "FAQ"],
      serviceLinks: [
        "Remodelación de cocinas",
        "Remodelación de baños",
        "Remodelación de hogares",
      ],
    },
    sticky: {
      call: "Llamar",
      whatsapp: "WhatsApp",
      estimate: "Estimado",
    },
  },
  en: {
    meta: {
      languageLabel: "Language",
    },
    contact: {
      phone: "[Phone Number]",
      email: "[Email]",
      instagram: "[Instagram]",
    },
    nav: {
      services: "Services",
      projects: "Projects",
      reviews: "Reviews",
      about: "About Andrés",
      faq: "FAQ",
      estimate: "Get a Free Estimate",
      call: "Call Now",
      menu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Free estimates available",
      headlineStart: "Professional Remodeling That Handles Every",
      highlight: "Detail",
      subheadline:
        "Kitchens, bathrooms, flooring, closets, painting, carpentry and complete renovations for homes and offices. An experienced team led by Andrés, with 9+ years in the remodeling industry.",
      primaryCta: "Request Free Estimate",
      secondaryCta: "Call / WhatsApp",
      chips: [
        "9+ Years Experience",
        "Homes & Offices",
        "Free Estimates",
        "Personal Attention",
      ],
      imageAlt: "Remodeled kitchen and living area as a temporary visual reference",
    },
    form: {
      eyebrow: "Free estimate",
      title: "Tell us about your project",
      name: "Name",
      phone: "Phone",
      email: "Email",
      projectType: "Project type",
      projectDetails: "Project details",
      preferredContact: "Preferred contact method",
      namePlaceholder: "Your name",
      phonePlaceholder: "Your phone",
      emailPlaceholder: "Your email",
      selectService: "Select service",
      detailsPlaceholder:
        "Tell us what you want to remodel, the current state of the space and any important details.",
      contactOptions: ["Phone call", "WhatsApp", "Email"],
      photos: "Add project photos",
      button: "Request Free Estimate",
      microcopy:
        "We’ll contact you to understand your project and schedule the next step.",
      success:
        "Thanks. Your estimate request is ready to be connected to email, CRM or WhatsApp.",
    },
    trust: {
      items: ["9+ Years", "Residential", "Commercial", "Free Estimates"],
    },
    services: {
      label: "01 — Services",
      title: "Remodeling Services We Offer",
      subtitle:
        "One team for the remodeling details that make your space look better, work better and feel finished.",
      items: [
        {
          title: "Kitchen Remodeling",
          description:
            "Functional layouts, cabinets, counters, lighting and finishes designed around daily use.",
          imageAlt: "Temporary visual detail of a remodeled kitchen",
        },
        {
          title: "Bathroom Remodeling",
          description:
            "Upgrade your bathroom with better finishes, fixtures and a cleaner layout.",
          imageAlt: "Remodeled bathroom as a temporary visual reference",
        },
        {
          title: "Flooring",
          description:
            "Install flooring that helps each room feel cleaner, warmer and more finished.",
          imageAlt: "Remodeled interior with warm flooring",
        },
        {
          title: "Closets",
          description:
            "Practical storage updates for personal spaces, offices and everyday organization.",
        },
        {
          title: "Painting",
          description:
            "Clean prep, color and finish work for interiors and exterior surfaces.",
        },
        {
          title: "Drywall",
          description:
            "Wall repairs, preparation and finishes that get the space ready for the project.",
        },
        {
          title: "Plumbing Coordination",
          description:
            "Coordinate plumbing needs when the remodeling scope calls for it.",
        },
        {
          title: "Electrical Coordination",
          description:
            "Support electrical coordination for layout, lighting or fixture changes.",
        },
        {
          title: "Carpentry",
          description:
            "Trim, custom details and finish work that make the remodel feel complete.",
        },
        {
          title: "Pavers / Outdoor Areas",
          description:
            "Cleaner, more useful outdoor areas prepared for everyday enjoyment.",
          imageAlt: "Outdoor paver area as a temporary visual reference",
        },
        {
          title: "Home Remodeling",
          description:
            "Whole-home updates that connect rooms, finishes and function.",
        },
        {
          title: "Office Remodeling",
          description:
            "Commercial updates for cleaner, more practical and professional spaces.",
        },
      ],
    },
    projects: {
      label: "02 — Before & After",
      title: "Featured Before & After Projects",
      subtitle:
        "Explore visual examples of transformations for kitchens, bathrooms and outdoor spaces. When available, these images will be replaced with approved real projects.",
      beforeLabel: "Before",
      afterLabel: "After",
      sliderLabel: "Interactive before and after comparison",
      servicesIncluded: "Services included",
      close: "Close project",
      items: [
        {
          number: "Project / 01",
          title: "Kitchen Refresh",
          category: "Kitchen Remodeling",
          description:
            "A brighter, more functional and modern kitchen prepared for daily use.",
          services: ["cabinets", "lighting", "counters", "finishes"],
          cta: "Get a similar result",
          before: "/images/concept-3/before-after/kitchen-before.png",
          after: "/images/concept-3/before-after/kitchen-after.png",
        },
        {
          number: "Project / 02",
          title: "Bathroom Upgrade",
          category: "Bathroom Remodeling",
          description:
            "A refreshed bathroom with better finishes, a cleaner layout and a more modern feel.",
          services: ["tile", "fixtures", "vanity", "finishes"],
          cta: "Get a similar result",
          before: "/images/concept-3/before-after/bathroom-before.png",
          after: "/images/concept-3/before-after/bathroom-after.png",
        },
        {
          number: "Project / 03",
          title: "Outdoor Pavers",
          category: "Outdoor Areas",
          description:
            "A cleaner, more useful outdoor area prepared to enjoy.",
          services: ["pavers", "surface preparation", "finishes"],
          cta: "Get a similar result",
          before: "/images/concept-3/before-after/outdoor-before.png",
          after: "/images/concept-3/before-after/outdoor-after.png",
        },
      ],
    },
    why: {
      label: "03 — Why Choose Us",
      title: "Why Homeowners and Businesses Choose All In One Solution",
      copy:
        "Led by Andrés, All In One Solution focuses on clear communication, practical planning and professional remodeling work for homes and commercial spaces.",
      benefits: [
        "Personal attention from start to finish",
        "Residential and commercial experience",
        "Coordination for multiple remodeling needs",
        "Clear project walkthroughs",
        "Free estimate process",
        "Respect for your home or business",
      ],
      cardTitle: "Meet Andrés",
      cardSubtitle: "Practical remodeling leadership",
      photoCaption: "Clear planning before the work begins",
      imageAlt: "Remodeling consultation in a kitchen as a temporary visual reference",
      chips: ["9+ Years", "Homes & Offices", "Free Estimates", "Direct Care"],
    },
    videos: {
      label: "04 — Client Stories",
      title: "Client Stories",
      subtitle:
        "Video testimonials will be added as real approved client stories become available.",
      close: "Close video",
      comingSoon: "Video testimonial coming soon",
      ready: "This space is ready for a real approved client video.",
      items: [
        {
          title: "Home Remodeling Client",
          project: "Home Remodeling",
          quote:
            "The communication was clear and the project felt organized from the first conversation.",
          thumbnail: "/images/concept-3/consultation-process.png",
        },
        {
          title: "Kitchen & Flooring Client",
          project: "Kitchen and Flooring",
          quote:
            "The updates made the space feel cleaner, brighter and easier to use every day.",
          thumbnail: "/images/concept-3/kitchen-detail.png",
        },
        {
          title: "Office Remodeling Client",
          project: "Office Remodeling",
          quote:
            "The team helped us understand the next steps and kept the process practical.",
          thumbnail: "/images/concept-3/bathroom-remodel.png",
        },
      ],
    },
    reviews: {
      label: "05 — Reviews",
      title: "What Clients Say About Working With Us",
      ratingLabel: "Five star review",
      items: [
        {
          quote:
            "Andrés and his team were clear, respectful and easy to communicate with throughout the project.",
          author: "Kitchen Remodeling Client",
          service: "Kitchen Remodeling",
        },
        {
          quote:
            "The work made our space feel cleaner, brighter and much more functional.",
          author: "Bathroom Remodeling Client",
          service: "Bathroom Remodeling",
        },
        {
          quote:
            "We appreciated the attention to detail and the way the team explained each step.",
          author: "Home Remodeling Client",
          service: "Home Remodeling",
        },
      ],
    },
    about: {
      label: "06 — About Andrés",
      title: "Meet Andrés",
      headline: "A remodeling lead with 9+ years of hands-on experience",
      copy:
        "Andrés leads All In One Solution with a practical, detail-oriented approach to remodeling. With more than 9 years in the industry, he focuses on clear communication, reliable execution and helping clients feel confident from the first estimate to the final walkthrough.",
      photoCaption: "Andrés photo coming soon",
      imageAlt: "Temporary image for the Andrés section",
      cards: [
        "9+ Years Experience",
        "Residential & Commercial",
        "Personal Attention",
        "Free Estimates",
      ],
    },
    process: {
      label: "07 — Process",
      title: "A Simple Process From Estimate to Final Walkthrough",
      steps: [
        "Request your free estimate",
        "Share your project details",
        "Review scope and options",
        "Professional remodeling work",
        "Final walkthrough",
      ],
    },
    faq: {
      label: "08 — FAQ",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you offer free estimates?",
          answer:
            "Yes. You can request a free estimate by filling out the form, calling or sending a WhatsApp message with details about your project.",
        },
        {
          question: "What types of remodeling projects do you handle?",
          answer:
            "All In One Solution works on kitchens, bathrooms, flooring, closets, painting, drywall, carpentry, pavers, homes, offices and other remodeling needs.",
        },
        {
          question: "Do you work on homes and offices?",
          answer:
            "Yes. The team can work on residential and commercial projects.",
        },
        {
          question: "Can I send photos of my project?",
          answer:
            "Yes. You can send photos to help the team better understand the space, its current condition and what you want to achieve.",
        },
        {
          question: "Do you help with kitchens and bathrooms?",
          answer:
            "Yes. Kitchen and bathroom remodeling are part of the main services.",
        },
        {
          question: "How do I get started?",
          answer:
            "Fill out the form, call or send a WhatsApp message. The team will review the information and coordinate the next step.",
        },
      ],
    },
    finalCta: {
      label: "09 — Contact",
      title: "Ready to Talk About Your Project?",
      subtitle:
        "Use the form, call or send a WhatsApp message with photos and details about the remodel you need.",
      call: "Call Now",
      estimate: "Request Free Estimate",
      contactLabels: {
        phone: "Phone",
        email: "Email",
        instagram: "Instagram",
      },
    },
    begin: {
      label: "09 — Let’s Begin",
      title: "Let’s start your remodel",
      subtitle:
        "Tell us what space you want to transform. We can review your idea, understand the project scope and help you take the next step with a free estimate.",
      estimate: "Request Free Estimate",
      call: "Call Now",
      whatsapp: "WhatsApp",
      imageAlt: "Warm remodeled kitchen as a temporary visual reference",
      chips: [
        "9+ Years Experience",
        "Homes & Offices",
        "Free Estimates",
        "Personal Attention",
      ],
    },
    footer: {
      description: "Home & Office Remodeling",
      location: "South Florida",
      explore: "Explore",
      services: "Services",
      contact: "Contact",
      links: ["Services", "Projects", "Reviews", "FAQ"],
      serviceLinks: [
        "Kitchen Remodeling",
        "Bathroom Remodeling",
        "Home Remodeling",
      ],
    },
    sticky: {
      call: "Call",
      whatsapp: "WhatsApp",
      estimate: "Estimate",
    },
  },
} as const;
