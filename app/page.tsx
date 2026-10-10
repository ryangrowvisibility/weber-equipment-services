import Reveal from "./Reveal";

const PHONE = "(519) 998-9027";
const TEL = "tel:+15199989027";
const SMS = "sms:+15199989027";
const GOOGLE = "https://www.google.com/maps/search/?api=1&query=Weber%20Equipment%20Services&query_place_id=ChIJRQlu8jwYIoURZ3_kWy3KHHs";

function Icon({ d, className = "h-6 w-6" }: { d: string | string[]; className?: string }) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

const ic = {
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  message: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  pin: ["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z", "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  shovel: ["M2 22v-5l5-5 5 5-5 5z", "M9.5 14.5 16 8", "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"],
  trench: ["M2 8h6l2 8h4l2-8h6", "M2 20h20"],
  stump: ["M6 10c0-1.66 2.69-3 6-3s6 1.34 6 3-2.69 3-6 3-6-1.34-6-3z", "M6 10v7c0 1.66 2.69 3 6 3s6-1.34 6-3v-7", "M12 10h.01"],
  post: ["M12 3v18", "M8 7h8", "M9 21h6"],
  truck: ["M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", "M15 18H9", "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14", "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  grid: ["M3 3h18v18H3z", "M3 12h18", "M12 3v18"],
  level: ["M2 16h20", "M6 12h12", "M10 8h4"],
  check: "M20 6 9 17l-5-5",
  user: ["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  handshake: ["m11 17 2 2a1 1 0 1 0 3-3", "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4", "m21 3 1 11h-2", "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", "M3 4h8"],
  broom: ["m13 11 9-9", "M14.6 12.6c.8.8.9 2.1.2 3L10 21l-7-7 5.4-4.8c.9-.7 2.2-.6 3 .2z"],
  book: ["M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"],
  arrow: ["M5 12h14", "m12 5 7 7-7 7"],
  plus: ["M12 5v14", "M5 12h14"],
};

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.94 6.2 6.81.8-5.03 4.66 1.33 6.72L12 17.52l-6.05 3.36 1.33-6.72L2.25 9.5l6.81-.8z" />
        </svg>
      ))}
    </span>
  );
}

const services = [
  { icon: ic.shovel, name: "Small to medium excavation", text: "Skid steer and mini excavator work for homeowners and contractors: digging, site prep and backyard projects on a residential scale.", featured: true },
  { icon: ic.trench, name: "Trenching", text: "Clean trenches for conduit, drainage and utility runs. Buried concrete or old stumps along the line get handled as part of the job." },
  { icon: ic.stump, name: "Stump grinding", text: "Tree stumps ground down so you can mow, plant or build over the spot. One stump or a whole row of them." },
  { icon: ic.post, name: "Post hole drilling & setting", text: "Accurate post holes drilled and posts set for fences, decks and pergolas, without a weekend of hand-digging." },
  { icon: ic.truck, name: "Debris & hot tub removal", text: "Old hot tubs, building waste, yard debris and storm cleanup hauled away so your property is clear." },
  { icon: ic.grid, name: "Driveway extensions & brushed concrete walkways", text: "Concrete flatwork to widen a driveway or add a walkway, finished with a brushed surface for grip in our Ontario winters." },
  { icon: ic.level, name: "Grading, sod removal & material moving", text: "Site prep and general landscaping: grading for drainage, stripping old sod and moving soil, gravel and stone where you need it." },
];

const reviews = [
  { name: "Shauna R.", job: "Three residential projects", text: "We have done three projects with Tim. He is honest, fair, hard-working and attentive, patiently walked us through every step, and left the property clean after every day." },
  { name: "Derek S.", job: "Conduit trench", text: "Tim dug our conduit trench and dealt with buried concrete and old tree stumps without batting an eye. Prompt, and very fair pricing." },
  { name: "Doug M.", job: "Backyard renovation", text: "Tim saved our backyard reno. Attentive, responsive and an absolute workhorse." },
  { name: "Catheryne M.", job: "Stump grinding", text: "He showed up early, was very friendly, and did a fantastic job grinding several stumps." },
  { name: "Victor A.", job: "Equipment work", text: "Easy to deal with, friendly and knowledgeable." },
];

const steps = [
  { title: "Call or text Tim", text: "Describe the job: what needs to be dug, ground, removed or poured, and where you are in the tri-cities." },
  { title: "Site look & fair quote", text: "Tim looks at access, soil and what is in the way, explains the plan in plain terms and gives you an honest price." },
  { title: "The work", text: "We bring the right machine for the job and keep you posted, including if we hit something unexpected underground." },
  { title: "Clean finish", text: "Debris hauled, surfaces tidied and the property left clean at the end of every day, not just the last one." },
];

const faqs = [
  { q: "What areas do you serve?", a: "We are based in Kitchener and work across Kitchener, Waterloo, Cambridge and the surrounding area. If you are just outside the tri-cities, call and ask." },
  { q: "What size jobs do you take on?", a: "Small to medium jobs are our specialty: backyard digs, trenches, stumps, post holes, removals, grading and concrete walkways or driveway extensions. We work with a skid steer and a mini excavator." },
  { q: "Do you work for contractors or just homeowners?", a: "Both. Homeowners hire us directly, and contractors bring us in for the equipment portion of their projects." },
  { q: "What happens if you hit something buried?", a: "It happens. Old concrete, roots and stumps are part of the work. Tim deals with it calmly, explains your options and keeps the job moving at a fair price." },
  { q: "Will you clean up afterward?", a: "Yes. Customers consistently mention that the property was left clean after every day of work. Debris and removed material can be hauled away." },
  { q: "Can you remove an old hot tub?", a: "Yes. Hot tub removal and haul-away is one of our regular jobs, along with building waste, yard debris and storm cleanup." },
  { q: "How do I get a quote?", a: `Call or text Tim at ${PHONE}. Photos of the area help, and he will walk you through the plan and give you a fair price before work starts.` },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Weber Equipment Services",
    telephone: "+1-519-998-9027",
    address: { "@type": "PostalAddress", addressLocality: "Kitchener", addressRegion: "ON", addressCountry: "CA" },
    areaServed: ["Kitchener", "Waterloo", "Cambridge"].map((n) => ({ "@type": "City", name: n })),
    hasMap: GOOGLE,
    founder: { "@type": "Person", name: "Tim" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5" },
    makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2">Skip to content</a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-sm text-white/85 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon d={ic.pin} className="h-4 w-4" /> Kitchener · Waterloo · Cambridge and surrounding area</span>
          <span>Skid steer &amp; mini excavator services</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 md:h-20 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Weber Equipment Services home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon d={ic.shovel} className="h-5 w-5" /></span>
            <span className="leading-none">
              <span className="block font-slab text-[1.4rem] font-bold text-ink">Weber</span>
              <span className="mt-0.5 block text-xs font-semibold text-muted">Equipment Services</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 font-semibold text-muted lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden font-bold text-ink hover:text-brand md:block">{PHONE}</a>
            <a href={TEL} className="btn-press hidden min-h-12 items-center gap-2 rounded-lg bg-cta px-5 font-bold text-white hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cta sm:inline-flex">
              <Icon d={ic.phone} className="h-5 w-5" /> Get a Quote
            </a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn-press grid h-12 w-12 place-items-center rounded-lg bg-cta text-white sm:hidden"><Icon d={ic.phone} className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top">
          <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.3fr_1fr] lg:py-24">
            <div>
              <p className="font-semibold text-brand">Owner-operated by Tim · Based in Kitchener</p>
              <h1 className="mt-3 text-[clamp(2.3rem,5vw,3.75rem)] text-ink">
                Small Excavation, Stump Grinding &amp; Concrete Work in Kitchener, Waterloo and Cambridge
              </h1>
              <p className="mt-5 max-w-[58ch] text-lg text-muted md:text-xl">
                Skid steer and mini excavator work for homeowners and contractors: trenches, post holes, stump grinding, hot tub removal, driveway extensions and brushed concrete walkways. Honest work, fair prices, clean job sites.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-cta px-7 text-lg font-bold text-white shadow-sm hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cta">
                  <Icon d={ic.phone} className="h-5 w-5" /> Call {PHONE}
                </a>
                <a href="#services" className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-2 border-brand px-7 text-lg font-bold text-brand hover:bg-brand-soft">
                  See Our Services
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-semibold text-ink">
                <span className="flex items-center gap-2"><Stars /> 5.0</span>
                <span className="text-line" aria-hidden="true">|</span>
                <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">5 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Repeat customers</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Homeowners &amp; contractors</span>
              </div>
            </div>

            <div className="space-y-4">
              <figure className="rounded-xl border border-line bg-surface p-7 shadow-[0_18px_40px_-22px_oklch(0.25_0.065_262/0.4)]">
                <Stars className="h-6 w-6" />
                <blockquote className="mt-4 font-slab text-[1.4rem] font-semibold leading-snug text-ink">
                  &ldquo;Honest, fair, hard-working and attentive. He left the property clean after every day.&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-[0.95rem]">
                  <span className="font-bold text-ink">Shauna R.</span>
                  <span className="text-muted"> · Three projects with Tim · Google review</span>
                </figcaption>
              </figure>
              <div className="rounded-xl bg-brand p-6 text-white">
                <p className="font-slab text-xl font-bold">Quick facts</p>
                <ul className="mt-3 space-y-2 text-[1rem] text-white/90">
                  {["Skid steer + mini excavator", "Compact machines for residential jobs", "Serving the tri-cities and area", "Call or text for a fair quote"].map((t) => (
                    <li key={t} className="flex items-start gap-2.5"><Icon d={ic.check} className="mt-1 h-4 w-4 shrink-0 text-cta" /> {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers hire Weber" className="border-y border-line bg-tint">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-5 px-5 py-7 md:grid-cols-4 md:px-6">
            {[
              { icon: ic.check, t: "5.0 on Google", s: "Every review five stars" },
              { icon: ic.user, t: "Owner on site", s: "Tim runs the machine" },
              { icon: ic.handshake, t: "Fair pricing", s: "Mentioned in review after review" },
              { icon: ic.broom, t: "Clean job sites", s: "Tidied every day" },
            ].map((x) => (
              <li key={x.t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface text-brand"><Icon d={x.icon} className="h-5 w-5" /></span>
                <span>
                  <span className="block font-bold leading-tight text-ink">{x.t}</span>
                  <span className="text-sm text-muted">{x.s}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="max-w-2xl">
              <p className="font-semibold text-brand">Services</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">Equipment work for backyards, driveways and job sites</h2>
              <p className="mt-4 text-muted">If it needs digging, grinding, drilling, hauling or pouring on a residential scale, Tim can likely do it. Here is what we do most.</p>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Reveal key={s.name} className={s.featured ? "md:col-span-2 lg:col-span-1" : ""}>
                  <article className={`flex h-full flex-col rounded-xl border bg-surface p-6 ${s.featured ? "border-cta border-t-4" : "border-line"}`}>
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand"><Icon d={s.icon} /></span>
                    <h3 className="mt-5 text-[1.35rem] text-ink">{s.name}</h3>
                    <p className="mt-2 flex-1 text-[1rem] text-muted">{s.text}</p>
                    <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:text-cta-hover">
                      Call about this <Icon d={ic.arrow} className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              ))}
              <Reveal>
                <div className="flex h-full flex-col justify-between rounded-xl border-2 border-dashed border-line p-6">
                  <div>
                    <h3 className="text-[1.35rem] text-ink">Something else?</h3>
                    <p className="mt-2 text-[1rem] text-muted">Storm cleanup, moving a pile of gravel, opening up a garden bed. Text a photo and ask.</p>
                  </div>
                  <a href={SMS} className="btn-press mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand px-5 font-bold text-brand hover:bg-brand-soft">
                    <Icon d={ic.message} className="h-5 w-5" /> Text {PHONE}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-semibold text-brand">Reviews</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">Rated 5.0 on Google</h2>
                <p className="mt-3 text-muted">Customers keep coming back to the same words: honest, fair, hard-working, and clean.</p>
              </div>
              <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="btn-press inline-flex min-h-12 shrink-0 items-center gap-2 self-start rounded-lg border-2 border-ink/15 bg-surface px-5 font-bold text-ink hover:border-brand md:self-auto">
                Read all reviews on Google <Icon d={ic.arrow} className="h-4 w-4" />
              </a>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {reviews.slice(1).map((r) => (
                <Reveal key={r.name}>
                  <figure className="flex h-full flex-col rounded-xl border border-line bg-surface p-6">
                    <Stars />
                    <blockquote className="mt-3 flex-1 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-5 border-t border-line pt-4 text-[0.95rem]">
                      <span className="font-bold text-ink">{r.name}</span>
                      <span className="text-muted"> · {r.job}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">Reviews are lightly shortened from the originals on our Google listing.</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <Reveal>
              <p className="font-semibold text-brand">About</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">A small-equipment specialist who explains the job as he does it</h2>
              <div className="mt-6 space-y-4 text-ink/90">
                <p>
                  Weber Equipment Services is run by Tim and based in Kitchener. With a skid steer and a mini excavator, he takes on the jobs that are too big for a shovel and too small or too tight for a full excavation company: trenches, stumps, post holes, backyard digs, removals and concrete flatwork.
                </p>
                <p>
                  Customers hire Tim because he is honest about what the job needs and fair about what it costs. When the ground throws a surprise, like old concrete or buried roots, he deals with it calmly and talks you through it.
                </p>
                <p>
                  And when the machine goes quiet at the end of the day, the site gets cleaned up. Several of our customers have hired us for project after project.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: ic.handshake, t: "Honest and fair", s: "Straight answers and fair pricing, per our reviews." },
                  { icon: ic.book, t: "Explains the process", s: "Patient guidance so you know what is happening." },
                  { icon: ic.check, t: "Calm under surprises", s: "Buried concrete and old stumps handled without fuss." },
                  { icon: ic.broom, t: "Clean every day", s: "The property is tidied before Tim leaves." },
                ].map((d) => (
                  <li key={d.t} className="rounded-xl border border-line bg-surface p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-cta/10 text-cta-hover"><Icon d={d.icon} className="h-5 w-5" /></span>
                    <h3 className="mt-3 text-lg text-ink">{d.t}</h3>
                    <p className="mt-1 text-[0.98rem] text-muted">{d.s}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <Reveal className="max-w-2xl">
              <p className="font-semibold text-brand">How it works</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">Simple from first call to final clean-up</h2>
            </Reveal>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="border-l-4 border-brand pl-5">
                  <span className="font-slab text-3xl font-bold text-cta">{i + 1}</span>
                  <h3 className="mt-1 text-xl text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-[1rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <Reveal>
              <p className="font-semibold text-brand">Service area</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">Serving the tri-cities and surrounding area</h2>
              <p className="mt-4 text-muted">Based in Kitchener, we work across Waterloo Region. Outside these cities? Give us a call and we will let you know.</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {["Kitchener", "Waterloo", "Cambridge", "Surrounding area"].map((c) => (
                  <li key={c} className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 font-semibold text-ink">
                    <Icon d={ic.pin} className="h-4 w-4 text-brand" /> {c}
                  </li>
                ))}
              </ul>
              <a href={TEL} className="btn-press mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-cta px-6 font-bold text-white hover:bg-cta-hover">
                <Icon d={ic.phone} className="h-5 w-5" /> Call {PHONE}
              </a>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-line">
                <iframe
                  title="Map of Weber Equipment Services' area: Kitchener, Waterloo and Cambridge, Ontario"
                  src="https://maps.google.com/maps?q=Kitchener%2C%20Ontario&z=10&output=embed"
                  className="h-[340px] w-full md:h-[400px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <p className="font-semibold text-brand">FAQ</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">Common questions</h2>
              <p className="mt-4 text-muted">Still wondering? Call or text Tim at <a href={TEL} className="font-bold text-brand underline underline-offset-4">{PHONE}</a>.</p>
            </Reveal>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-line bg-surface">
                  <summary className="flex min-h-14 items-center justify-between gap-4 px-5 py-4 font-bold text-ink">
                    {f.q}
                    <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon d={ic.plus} className="h-4 w-4" /></span>
                  </summary>
                  <p className="px-5 pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 md:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)]">Got a stump, a trench or a walkway in mind? Call Tim at {PHONE}.</h2>
              <p className="mt-3 text-lg text-white/85">Small excavation, stump grinding and concrete work across Kitchener, Waterloo and Cambridge. Fair quotes, clean sites.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={TEL} className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-cta px-7 text-lg font-bold text-white hover:bg-cta-hover">
                <Icon d={ic.phone} className="h-5 w-5" /> Call {PHONE}
              </a>
              <a href={SMS} className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-2 border-white/70 px-7 text-lg font-bold text-white hover:bg-white/10">
                <Icon d={ic.message} className="h-5 w-5" /> Text Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-deep pb-28 pt-14 text-white/85 md:pb-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-slab text-2xl font-bold text-white">Weber Equipment Services</p>
            <p className="mt-2 text-[0.98rem]">Small excavation, stump grinding and concrete work. Owner-operated by Tim, based in Kitchener, Ontario.</p>
            <p className="mt-3 text-[0.98rem]">Also find us on Facebook, HomeStars and Nextdoor.</p>
            <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4">
              <Icon d={ic.pin} className="h-4 w-4" /> Weber on Google Maps
            </a>
          </div>
          <div>
            <p className="font-bold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-[0.98rem]">
              <li><a href={TEL} className="font-semibold text-white hover:underline">{PHONE}</a></li>
              <li>Call or text for a quote</li>
              <li>Kitchener, ON</li>
              <li>Serving Kitchener, Waterloo, Cambridge &amp; area</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5 text-[0.98rem]">
              {services.map((s) => (
                <li key={s.name}><a href="#services" className="hover:text-white hover:underline">{s.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] border-t border-white/15 px-5 pt-6 text-sm text-white/65 md:px-6">
          © {new Date().getFullYear()} Weber Equipment Services. All rights reserved.
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-surface/95 p-3 backdrop-blur md:hidden">
        <a href={TEL} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta font-bold text-white"><Icon d={ic.phone} className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand font-bold text-brand"><Icon d={ic.message} className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
