import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { WHATSAPP_URL } from "@/components/site-header";

export const Route = createFileRoute("/guia-creacion-web")({
  head: () => ({
    meta: [
      {
        title:
          "Cómo crear una página web para tu negocio — Guía práctica | Alex Rojas",
      },
      {
        name: "description",
        content:
          "Guía paso a paso de lo que necesitas para crear una página web profesional para tu negocio: dominio, hosting, contenido, seguridad y SEO. Explicado en español claro.",
      },
      {
        property: "og:title",
        content: "Cómo crear una página web para tu negocio — Guía práctica",
      },
      {
        property: "og:description",
        content:
          "Todo lo que un dueño de negocio necesita saber antes de lanzar su página web: dominio, hosting, copy, seguridad y SEO técnico.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://alexoscp.lovable.app/guia-creacion-web",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://alexoscp.lovable.app/guia-creacion-web",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Cómo crear una página web para tu negocio — Guía práctica",
          author: { "@type": "Person", name: "Alex Miguel Rojas" },
          inLanguage: "es",
          mainEntityOfPage:
            "https://alexoscp.lovable.app/guia-creacion-web",
        }),
      },
    ],
  }),
  component: GuiaPage,
});

const STEPS = [
  {
    n: 1,
    t: "Define el objetivo de tu página",
    d: "Antes de pensar en colores o logos, decide qué quieres lograr: ¿recibir mensajes por WhatsApp, mostrar un catálogo, captar correos? El objetivo determina la estructura.",
  },
  {
    n: 2,
    t: "Consigue un dominio propio",
    d: "Tu dominio (tunegocio.com) es tu dirección en internet. Cuesta entre 10 y 20 dólares al año. Evita subdominios gratuitos: dan mala imagen y son difíciles de recordar.",
  },
  {
    n: 3,
    t: "Elige un hosting rápido y seguro",
    d: "El hosting es el servidor donde vive tu página. Necesitas uno con HTTPS incluido, copias de seguridad automáticas y respuesta en menos de 200 ms. Aquí es donde mis certificaciones en Linux y redes (CCNA) marcan la diferencia.",
  },
  {
    n: 4,
    t: "Escribe contenido pensado en tus clientes",
    d: "Una página bonita sin copy claro no vende. Cada sección debe responder: qué ofreces, para quién, y cómo te contactan. Habla en el idioma de tus clientes, no en tecnicismos.",
  },
  {
    n: 5,
    t: "Diseño optimizado para móvil",
    d: "Más del 70% de tus visitantes entrarán desde el celular. Si tu página tarda más de 3 segundos en cargar o se ve mal en pantalla pequeña, perdiste el cliente.",
  },
  {
    n: 6,
    t: "Configura SEO técnico desde el día uno",
    d: "Títulos únicos por página, descripciones, sitemap.xml, robots.txt, datos estructurados (JSON-LD) y certificado HTTPS. Esto le dice a Google que tu sitio existe y de qué trata.",
  },
  {
    n: 7,
    t: "Seguridad básica obligatoria",
    d: "HTTPS, formularios con protección anti-spam, actualizaciones automáticas y copias de seguridad. Una página hackeada cuesta más recuperarla que hacerla bien la primera vez.",
  },
  {
    n: 8,
    t: "Mide y mejora",
    d: "Conecta Google Search Console y un sistema de analítica para saber qué páginas funcionan y qué buscan tus clientes. Lo que no mides, no lo puedes mejorar.",
  },
] as const;

function GuiaPage() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-primary">
          Guía práctica
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
          Cómo crear una página web{" "}
          <span className="text-primary text-glow">para tu negocio</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Si tienes un negocio local en Massachusetts y estás pensando en
          lanzar tu página web, esta guía resume — sin tecnicismos — todo lo
          que necesitas tener listo antes de empezar. Está basada en los
          mismos estándares técnicos que aplico en cada proyecto que
          construyo.
        </p>

        <ol className="mt-10 space-y-6">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 font-bold text-primary">
                  {s.n}
                </span>
                <h2 className="text-xl font-semibold">{s.t}</h2>
              </div>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-primary/30 bg-card p-8">
          <h2 className="text-2xl font-bold">
            ¿Prefieres que lo haga por ti?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Si no quieres lidiar con dominios, hosting ni configuración
            técnica, yo me encargo de todo. Construyo la página, la pongo en
            línea segura y rápida, y te la entrego lista para recibir
            clientes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos por WhatsApp
            </CtaButton>
            <Link
              to="/servicios"
              className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-primary hover:text-primary"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
