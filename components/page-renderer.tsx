import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Building2,
  CalendarDays,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDot,
  Crosshair,
  Gamepad2,
  Globe2,
  GraduationCap,
  Handshake,
  Heart,
  Layers3,
  LucideIcon,
  Mail,
  MonitorCog,
  Rocket,
  Search,
  ShieldCheck,
  Smile,
  Smartphone,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
  Zap,
  Clock3,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BlogList } from "@/components/blog-list";
import { ContactForm } from "@/components/contact-form";
import { ServiceFeatureGrid } from "@/components/service-feature-grid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServiceFaqSection } from "@/components/service-faq";
import {
  audiences,
  BlogPost,
  blogPosts,
  features,
  getBlogPostBySlug,
  industries,
  legalPages,
  processSteps,
  Project,
  projects,
  Service,
  ServiceFaq,
  services,
  site,
  stats,
  values,
} from "@/lib/site-data";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  BriefcaseBusiness,
  MonitorCog,
  Smartphone,
  TrendingUp,
  Gamepad2,
};

const audienceIconMap: Record<string, LucideIcon> = {
  "Start Up Business": Rocket,
  "Small & Medium Business": Store,
  "Enterprise Business": Building2,
  Agencies: Handshake,
};

const valueIconMap: Record<string, LucideIcon> = {
  "Love the Work": Heart,
  "Support the Team": Handshake,
  "Embrace Positivity": Smile,
  "Be a Doer": Zap,
  "Focus on the Customer": Crosshair,
  "Always Learning": GraduationCap,
};

const serviceDetailCopy: Record<
  string,
  {
    deliverablesTitle: string;
    deliverablesDescription: string;
  }
> = {
  "ai-automation-machine-learning": {
    deliverablesTitle: "AI automation deliverables your team can actually operate",
    deliverablesDescription:
      "Each output focuses on a real AI use case: data flow, model integration, prompt controls, approval steps, and a clear path to admin-panel management.",
  },
  "business-solution": {
    deliverablesTitle: "Business software deliverables for daily operations",
    deliverablesDescription:
      "The package turns your current process into mapped modules, dashboards, user roles, reports, and a release roadmap that supports everyday business work.",
  },
  "web-application-development": {
    deliverablesTitle: "Web application deliverables for a launch-ready product",
    deliverablesDescription:
      "Redorch prepares user flows, frontend screens, API integration planning, SEO-safe routes, and technical handover so the product can grow beyond the first release.",
  },
  "mobile-application-development": {
    deliverablesTitle: "Mobile app deliverables for real device users",
    deliverablesDescription:
      "The mobile plan covers app screens, clickable flows, API needs, QA priorities, store-launch preparation, and maintenance needs for Android, iOS, or hybrid products.",
  },
  "strategic-marketing-plan-development": {
    deliverablesTitle: "Marketing deliverables for measurable digital growth",
    deliverablesDescription:
      "The strategy package connects SEO content, landing pages, lead capture, campaign journeys, and analytics recommendations into one practical growth roadmap.",
  },
  "game-design-and-development": {
    deliverablesTitle: "Game and immersive experience deliverables for playable launches",
    deliverablesDescription:
      "The plan defines the game concept, user journey, prototype scope, AR or VR opportunities, testing priorities, and release support for interactive experiences.",
  },
};

type RouteView =
  | { kind: "home" }
  | { kind: "about" }
  | { kind: "why-us" }
  | { kind: "services" }
  | { kind: "service"; service: Service }
  | { kind: "projects"; title: string; description: string }
  | { kind: "project"; project: Project }
  | { kind: "contact" }
  | { kind: "blog" }
  | { kind: "post"; slug: string }
  | { kind: "legal"; path: keyof typeof legalPages }
  | { kind: "marketing" };

export function PageRenderer({ view }: { view: RouteView }) {
  switch (view.kind) {
    case "home":
      return <HomePage />;
    case "about":
      return <AboutPage />;
    case "why-us":
      return <WhyUsPage />;
    case "services":
      return <ServicesPage />;
    case "service":
      return <ServiceDetailPage service={view.service} />;
    case "projects":
      return <ProjectsPage title={view.title} description={view.description} />;
    case "project":
      return <ProjectDetailPage project={view.project} />;
    case "contact":
      return <ContactPage />;
    case "blog":
      return <BlogPage />;
    case "post":
      return <BlogPostPage slug={view.slug} />;
    case "legal":
      return <LegalPage path={view.path} />;
    case "marketing":
      return <MarketingPage />;
  }
}

function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
  compact = false,
  visual = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: React.ReactNode;
  compact?: boolean;
  visual?: boolean;
}) {
  const [primaryTitle, secondaryTitle] = splitHeroTitle(title);

  return (
    <section
      className={`section-soft text-foreground ${
        compact
          ? "pt-28 pb-20 lg:pt-32 lg:pb-24"
          : "min-h-[calc(72vh-76px)] pt-32 pb-24 lg:pt-36 lg:pb-28"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(248,96,17,0.09),transparent_34%)] dark:bg-[radial-gradient(circle_at_50%_22%,rgba(248,96,17,0.14),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border dark:bg-white/10" />
      <div className="container relative z-10 flex min-h-full flex-col items-center justify-center">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-7 rounded-full border-border bg-card/82 px-4 py-1.5 text-xs font-bold text-muted-foreground shadow-sm hover:bg-card/82 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/60">
            {eyebrow}
          </Badge>
          <h1
            className={`mx-auto max-w-5xl font-bold leading-[1.04] tracking-normal text-foreground dark:text-white ${
              compact ? "text-4xl sm:text-5xl lg:text-[58px]" : "text-5xl sm:text-6xl lg:text-[66px]"
            }`}
          >
            <span className="block">{primaryTitle}</span>
            {secondaryTitle ? (
              <span className="block text-slate-500 dark:text-white/48">
                {secondaryTitle}
              </span>
            ) : null}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg lg:text-xl lg:leading-8">
            {description}
          </p>
          {children ? <div className="mt-9 flex flex-wrap justify-center gap-3">{children}</div> : null}
        </div>
        {visual ? (
          <div className="mx-auto mt-12 w-full max-w-5xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-card p-2 shadow-[0_28px_90px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_34px_120px_rgba(0,0,0,0.38)] sm:aspect-[16/8] lg:aspect-[16/6.5]">
              <Image
                src={image}
                alt={`${title} visual`}
                fill
                priority={!compact}
                sizes="(min-width: 1280px) 1040px, 100vw"
                className="rounded-lg object-cover"
              />
              <div className="pointer-events-none absolute inset-2 rounded-lg bg-gradient-to-t from-slate-950/12 via-transparent to-white/8 dark:from-black/34 dark:to-white/5" />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function splitHeroTitle(title: string): [string, string] {
  const customSplits: Record<string, [string, string]> = {
    "Redorch Technology": ["Redorch Technology", "Digital products that grow"],
    "Technology services for products, platforms, and business growth": [
      "Technology services",
      "for products, platforms, and business growth",
    ],
    "A technology team passionate about helping businesses grow": [
      "A technology team",
      "helping businesses grow",
    ],
    "Software, SEO, and digital growth resources": [
      "Software, SEO, and",
      "digital growth resources",
    ],
    "Tell Redorch Technology what you want to build": [
      "Tell Redorch Technology",
      "what you want to build",
    ],
    "Unlock your online growth potential": [
      "Unlock your",
      "online growth potential",
    ],
    "We want your business to succeed": [
      "We want your business",
      "to succeed",
    ],
  };

  if (customSplits[title]) return customSplits[title];

  if (title.length < 28) return [title, ""];

  const words = title.split(" ");
  const splitIndex = Math.max(2, Math.ceil(words.length * 0.52));
  return [words.slice(0, splitIndex).join(" "), words.slice(splitIndex).join(" ")];
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge variant="accent">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-normal text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-foreground shadow-sm">
      <Icon className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
      <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary/70" />
    </div>
  );
}

function AnimatedSignalRail({ progress, index = 0 }: { progress: number; index?: number }) {
  return (
    <div
      className="signal-rail"
      style={
        {
          "--signal-progress": `${progress}%`,
          "--signal-delay": `${index * 0.18}s`,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <div className="signal-rail__fill" />
    </div>
  );
}

function CapabilityTicker() {
  const logos = [
    { name: "OpenAI", src: "/images/logos/openai.svg" },
    { name: "Turso", src: "/images/logos/turso.svg" },
    { name: "Vercel", src: "/images/logos/vercel.svg" },
    { name: "GitHub", src: "/images/logos/github.svg" },
    { name: "Claude", src: "/images/logos/claude.svg" },
    { name: "Clerk", src: "/images/logos/clerk.svg" },
    { name: "NVIDIA", src: "/images/logos/nvidia.svg" },
    { name: "Next.js", src: "/images/logos/nextdotjs.svg" },
    { name: "MySQL", src: "/images/logos/mysql.svg" },
    { name: "Node.js", src: "/images/logos/nodedotjs.svg" },
  ];
  const loop = [...logos, ...logos];

  return (
    <section className="section-soft py-7 text-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(248,96,17,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(248,96,17,0.14),transparent_34%)]" />
      <p className="relative z-10 mb-5 text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-white/45">
        Technology ecosystem
      </p>
      <div className="label-loop relative z-10 gap-8">
        {loop.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="group flex min-w-36 items-center justify-center gap-3 text-slate-600 transition hover:text-slate-950 dark:text-white/70 dark:hover:text-white"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={26}
              height={26}
              className="h-6 w-6 object-contain brightness-0 opacity-60 transition group-hover:opacity-100 dark:invert dark:opacity-70"
            />
            <span className="text-lg font-bold tracking-normal">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceVisual({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? Rocket;
  const highlights = service.deliverables.slice(0, 3);
  const progress = Math.min(88, 64 + index * 5);

  return (
    <div className="border-b border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-[#080f1d]">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#111827]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-950 shadow-sm dark:border-white/10 dark:bg-slate-950 dark:text-white">
              <Icon className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary/80" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight text-slate-950 dark:text-white">
                {service.title}
              </p>
              <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-white/52">
                {service.eyebrow}
              </p>
            </div>
          </div>
          <Badge className="border-slate-200 bg-slate-950 text-white hover:bg-slate-950 dark:border-white/10 dark:bg-white/10 dark:text-white">
            {String(index + 1).padStart(2, "0")}
          </Badge>
        </div>

        <div className="mt-4">
          <AnimatedSignalRail progress={progress} index={index} />
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="min-h-14 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold leading-5 text-slate-950 shadow-sm dark:border-white/10 dark:bg-slate-950/50 dark:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Business Solution"
        title="Redorch Technology"
        description="Complete digital solution for web applications, mobile apps, business platforms, and growth-ready technology products."
        image="/images/generated/redorch-digital-product-lab.webp"
      >
        <Button asChild size="lg">
          <Link href="/contact/">
            Get a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/projects/">View Projects</Link>
        </Button>
      </PageHero>
      <CapabilityTicker />

      <StatsBand />

      <section className="section-surface py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Badge variant="accent">Why Redorch</Badge>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl">
              Because delivery quality matters after the launch button too.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Redorch Technology crafts mobile apps, websites, web applications, AR/VR concepts, game products, and business systems that support real operations. The team focuses on useful interfaces, reliable delivery, and long-term improvement.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/15">
            <Image
              src="/images/generated/redorch-digital-product-lab.webp"
              alt="Digital strategy dashboard illustration"
              width={760}
              height={620}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <ServicesGrid />
      <IndustriesBand />
      <ProcessBand />
      <ProjectPreview />
      <CtaBand />
    </>
  );
}

function StatsBand() {
  return (
    <section className="section-soft py-12 dark:border-white/10 dark:bg-[#080808] dark:bg-none sm:py-14">
      <div className="container max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-white/80 bg-white p-6 text-center shadow-[0_22px_70px_rgba(15,23,42,0.08)] transition duration-300 dark:border-white/10 dark:bg-[#141414] dark:shadow-none"
            >
              <div className="text-4xl font-bold leading-none text-slate-950 dark:text-white">
                {stat.value}
              </div>
              <div className="mt-3 text-sm font-medium text-slate-500 dark:text-base dark:text-white/54">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="section-soft py-24">
      <div className="container">
        <SectionIntro
          eyebrow="Services"
          title="Digital solutions that can give wings to your business"
          description="Choose a focused service track or combine design, development, content, and support into one delivery roadmap."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Rocket;
            return (
              <Card
                key={service.slug}
                className="group flex h-full min-h-[500px] flex-col overflow-hidden border-slate-200 bg-white shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#10151f] dark:shadow-none dark:hover:border-white/18"
              >
                <ServiceVisual service={service} index={index} />
                <CardHeader className="flex-1 p-6">
                  <IconTile icon={Icon} />
                  <CardTitle className="mt-4 text-xl font-bold leading-tight text-slate-950 dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-slate-600 dark:text-white/62">
                    {service.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto p-6 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-white/70 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/10"
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustriesBand() {
  return (
    <section className="section-surface py-24">
      <div className="container">
        <SectionIntro
          eyebrow="Industries"
          title="We build across the categories your customers already use"
          description="From marketplaces to logistics systems, the frontend is structured so each vertical can later become editable through CMS content."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div
              key={industry}
              className="flex min-h-20 items-center rounded-lg border border-border bg-card px-4 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/40 hover:shadow-soft"
            >
              <CircleDot className="mr-3 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessBand() {
  return (
    <section className="section-brand py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge className="border-white/20 bg-white/10 text-white hover:bg-white/10">
              Process
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-4xl">
              A delivery flow that keeps design, code, and business goals moving together.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The project structure is ready for a future Node.js and MySQL CMS: pages, services, case studies, and blog posts are already separated as content data.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-lg shadow-slate-950/20 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-950 text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="font-semibold">{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectPreview() {
  return (
    <section className="section-surface py-24">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Badge variant="accent">Projects</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-foreground sm:text-4xl">
              Selected work from business platforms, delivery systems, and mobile products
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects/">
              See All Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="section-brand py-24">
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
          Grow with Redorch
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
          Share your idea, existing website, or software workflow. Redorch can shape the frontend, CMS, and product roadmap around the next launch.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-foreground px-8 text-background hover:bg-foreground/90 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
          >
            <Link href="/contact/">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology services for products, platforms, and business growth"
        description="Redorch Technology provides AI automation, web, mobile, business, marketing, and game development services with a CMS-ready frontend structure."
        image="/images/generated/redorch-digital-product-lab.webp"
        compact
      >
        <Button asChild size="lg">
          <Link href="/contact/">Get a Free Quote</Link>
        </Button>
      </PageHero>
      <CapabilityTicker />
      <ServicesGrid />
      <section className="section-surface py-24">
        <div className="container">
          <SectionIntro
            eyebrow="Key features"
            title="Services that make delivery dignified, practical, and measurable"
            description="The same foundations from the original site are now expressed as clearer SEO content and reusable frontend sections."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="premium-card border-white/80">
                <CardHeader>
                  <IconTile icon={BadgeCheck} />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription className="leading-6">{feature.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function getServiceFaqs(service: Service): ServiceFaq[] {
  if (service.faqs?.length) return service.faqs;

  const deliverables = service.deliverables.slice(0, 3).join(", ");

  return [
    {
      question: `What is included in ${service.title}?`,
      answer: `${service.description} A typical engagement includes ${deliverables}, and a clear roadmap for launch.`,
    },
    {
      question: "Do I need a complete technical document before starting?",
      answer:
        "No. Redorch can start from an idea, existing website, rough workflow, or business problem, then turn it into requirements, page structure, user flows, and implementation priorities.",
    },
    {
      question: "Can this service connect with a CMS or admin panel later?",
      answer:
        "Yes. The frontend content is structured so pages, service details, projects, blog posts, and key sections can later be managed from a Node.js and MySQL backend.",
    },
    {
      question: "How long does deployment usually take?",
      answer:
        "Timeline depends on scope, content readiness, integrations, and review cycles. A focused marketing or service page can move quickly, while larger product workflows need staged planning and testing.",
    },
    {
      question: "How does Redorch protect project and business data?",
      answer:
        "We keep access limited to the project need, separate sensitive content from public pages, and can work with NDA-ready discussions when the product, customer data, or business logic is confidential.",
    },
    {
      question: "What happens after launch?",
      answer:
        "After launch, Redorch can support fixes, content updates, SEO improvements, CMS planning, performance checks, and the next product features based on real user feedback.",
    },
  ];
}

function getServiceDetailCopy(service: Service) {
  return (
    serviceDetailCopy[service.slug] ?? {
      deliverablesTitle: `Focused deliverables for ${service.title.toLowerCase()}`,
      deliverablesDescription:
        "Each deliverable is scoped around the selected service so planning, content, frontend, backend needs, and launch support stay aligned.",
    }
  );
}

function ServiceInfoPanel({
  title,
  description,
  icon: Icon,
  items,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}) {
  return (
    <div className="premium-card flex h-full flex-col rounded-2xl border border-white/80 p-6">
      <IconTile icon={Icon} />
      <h3 className="mt-5 text-xl font-bold tracking-normal text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceDepthSection({ service }: { service: Service }) {
  return (
    <section className="section-soft py-24">
      <div className="container">
        <SectionIntro
          eyebrow="Service scope"
          title={`What we can do for ${service.title.toLowerCase()}`}
          description="A clearer breakdown of the product types, delivery work, and business sectors this service can support."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <ServiceInfoPanel
            title="What we build"
            description="Product types and solution categories that fit this service."
            icon={Layers3}
            items={service.solutions}
          />
          <ServiceInfoPanel
            title="What work we handle"
            description="Planning, design, technical, content, and launch responsibilities Redorch can cover."
            icon={MonitorCog}
            items={service.workScopes}
          />
          <ServiceInfoPanel
            title="Sectors we support"
            description="Industries and business contexts where this service can be applied."
            icon={Building2}
            items={service.sectors}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceDetailPage({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Rocket;
  const faqs = getServiceFaqs(service);
  const detailCopy = getServiceDetailCopy(service);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.description}
        image={service.image}
        compact
      >
        <Button asChild size="lg">
          <Link href="/contact/">Get a Free Quote</Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/projects/">See Related Work</Link>
        </Button>
      </PageHero>

      <section className="section-surface py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm">
              <Icon className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-normal text-foreground sm:text-4xl">
              What Redorch delivers for {service.title.toLowerCase()}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {service.summary}
            </p>
          </div>
          <ServiceFeatureGrid
            serviceTitle={service.title}
            items={service.bullets.map((item, index) => ({
              title: service.deliverables[index] ?? `Track ${index + 1}`,
              text: item,
              index,
            }))}
          />
        </div>
      </section>

      <ServiceDepthSection service={service} />

      <section className="section-surface py-24">
        <div className="container">
          <SectionIntro
            eyebrow="Deliverables"
            title={detailCopy.deliverablesTitle}
            description={detailCopy.deliverablesDescription}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.deliverables.map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card p-5 text-center font-semibold text-foreground shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFaqSection faqs={faqs} />

      <CtaBand />
    </>
  );
}

function ProjectsPage({ title, description }: { title: string; description: string }) {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={title}
        description={description}
        image="/images/project-delivery.png"
        compact
      />
      <section className="section-surface py-24">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="premium-card group flex h-full flex-col overflow-hidden border-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
      <Link href={project.href} className="block">
        <div className="bg-slate-100 p-2 dark:bg-slate-950">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white shadow-inner dark:bg-slate-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-contain transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </Link>
      <CardHeader className="flex-1">
        <Badge variant="secondary" className="w-fit">
          {project.category}
        </Badge>
        <CardTitle className="mt-3 leading-tight">
          <Link href={project.href} className="hover:text-primary">
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription className="leading-6">{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button asChild variant="outline" className="w-full">
          <Link href={project.href}>
            View Case Study
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        image={project.image}
        compact
      >
        <Button asChild size="lg">
          <Link href="/contact/">Discuss a Similar Project</Link>
        </Button>
      </PageHero>
      <section className="section-surface py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="premium-card rounded-lg border border-white/80 p-6">
            <h2 className="text-lg font-semibold text-foreground">Case study snapshot</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-semibold text-foreground">Category</dt>
                <dd className="mt-1 text-muted-foreground">{project.category}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Focus</dt>
                <dd className="mt-1 text-muted-foreground">Product strategy, UI, software architecture, and delivery support</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Route</dt>
                <dd className="mt-1 text-muted-foreground">{project.href}</dd>
              </div>
            </dl>
          </aside>
          <div className="space-y-10">
            <ContentBlock title="Challenge" icon={Target} text={project.challenge} />
            <ContentBlock title="Solution" icon={Layers3} text={project.solution} />
            <div>
              <div className="flex items-center gap-3">
                <IconTile icon={Sparkles} />
                <h2 className="text-2xl font-bold tracking-normal text-foreground">Results</h2>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {project.results.map((result) => (
                  <div key={result} className="rounded-lg border border-border bg-card p-5 text-sm leading-6 text-muted-foreground shadow-sm">
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ContentBlock({
  title,
  icon,
  text,
}: {
  title: string;
  icon: LucideIcon;
  text: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <IconTile icon={icon} />
        <h2 className="text-2xl font-bold tracking-normal text-foreground">{title}</h2>
      </div>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">{text}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A technology team passionate about helping businesses grow"
        description="Redorch Technology turns business ideas into useful digital products through strategy, design, development, and long-term support."
        image="/images/generated/redorch-team-studio.webp"
        compact
      />
      <CapabilityTicker />
      <section className="section-surface py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border border-border shadow-2xl shadow-slate-900/10">
            <Image
              src="/images/generated/redorch-team-studio.webp"
              alt="Redorch Technology team collaboration"
              width={760}
              height={680}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Badge variant="accent">Who we are</Badge>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-normal text-foreground sm:text-5xl">
              We equip leaders with strategy, vision, and reliable product execution.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Redorch works with startups, SMEs, enterprises, and agencies that need software, websites, mobile apps, and digital products with a clear business purpose. The approach is collaborative: understand the goal, shape the experience, build carefully, and support the launch.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Product", "Strategy"],
                ["UI/UX", "Design"],
                ["Code", "Delivery"],
              ].map(([a, b]) => (
                <div key={a} className="premium-card rounded-lg border border-white/80 p-5 text-center">
                  <div className="text-xl font-bold text-foreground">{a}</div>
                  <div className="text-sm text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AudienceSection />
      <MergedWhyUsSection />
      <CtaBand />
    </>
  );
}

function AudienceSection() {
  return (
    <section className="section-soft py-24">
      <div className="container">
        <SectionIntro
          eyebrow="Who we work with"
          title="Flexible delivery for different business stages"
          description="The same product discipline adapts to early MVPs, operational systems, enterprise workflows, and agency partnerships."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audienceIconMap[audience.title] ?? Users;

            return (
              <Card key={audience.title} className="premium-card border-white/80">
                <CardHeader>
                  <IconTile icon={Icon} />
                  <CardTitle className="mt-4">{audience.title}</CardTitle>
                  <CardDescription className="leading-6">{audience.text}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MergedWhyUsSection() {
  return (
    <section className="section-surface py-24">
      <div className="container">
        <SectionIntro
          eyebrow="Why Us"
          title="We want your business to succeed"
          description="Redorch combines client-centric development, agile delivery, dedicated teamwork, data protection, and ongoing enhancement."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = valueIconMap[value.title] ?? ShieldCheck;

            return (
              <Card key={value.title} className="premium-card border-white/80">
                <CardHeader>
                  <IconTile icon={Icon} />
                  <CardTitle className="mt-4">{value.title}</CardTitle>
                  <CardDescription className="leading-6">{value.text}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Us"
        title="We want your business to succeed"
        description="Redorch combines client-centric development, agile delivery, dedicated teamwork, data protection, and ongoing enhancement."
        image="/images/generated/redorch-team-studio.webp"
        compact
      />
      <section className="section-surface py-24">
        <div className="container">
          <SectionIntro
            eyebrow="Values"
            title="The working principles behind every project"
            description="These values guide how Redorch collaborates with clients, handles complexity, and keeps projects moving toward useful results."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = valueIconMap[value.title] ?? ShieldCheck;

              return (
                <Card key={value.title} className="premium-card border-white/80">
                  <CardHeader>
                    <IconTile icon={Icon} />
                    <CardTitle className="mt-4">{value.title}</CardTitle>
                    <CardDescription className="leading-6">{value.text}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <ProcessBand />
      <CtaBand />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Free Quote"
        title="Tell Redorch Technology what you want to build"
        description="Send your project goals, service needs, and business challenge. The frontend is ready for this form to connect with a Node.js and MySQL backend later."
        image="/images/generated/business-cms-backend-dashboard.webp"
        compact
      />
      <section className="section-surface py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <Card className="premium-card border-white/80">
              <CardHeader>
                <IconTile icon={Mail} />
                <CardTitle className="mt-4">Email</CardTitle>
                <CardDescription>
                  <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                    {site.email}
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="premium-card border-white/80">
              <CardHeader>
                <IconTile icon={Target} />
                <CardTitle className="mt-4">What to share</CardTitle>
                <CardDescription className="leading-6">
                  Tell us the service you need, your business goal, current website or app link, preferred launch timeline, and any reference design you like.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="premium-card border-white/80">
              <CardHeader>
                <IconTile icon={CalendarDays} />
                <CardTitle className="mt-4">Next step</CardTitle>
                <CardDescription className="leading-6">
                  Redorch reviews the brief, maps the right service track, and replies with a clear scope, delivery plan, and recommended starting point.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <ContactForm services={services.map(({ slug, title }) => ({ slug, title }))} />
        </div>
      </section>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Software, SEO, and digital growth resources"
        description="Human-written articles for business owners planning websites, mobile apps, custom software, SEO, and CMS-ready digital products."
        image="/images/generated/seo-content-growth-workspace.webp"
        compact
        visual={false}
      />
      <section className="section-surface py-24">
        <div className="container">
          <BlogList posts={blogPosts.map(({ body: _body, ...post }) => post)} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function BlogArticleHero({ post }: { post: BlogPost }) {
  return (
    <section className="section-soft pt-28 pb-12 text-foreground dark:text-white lg:pt-32 lg:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_8%,rgba(248,96,17,0.09),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_8%,rgba(248,96,17,0.12),transparent_30%)]" />
      <div className="container relative z-10 max-w-3xl">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground dark:text-white/60 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to blog
        </Link>

        <div className="mt-9">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-muted-foreground dark:text-white/64">
            <Badge className="border-primary/25 bg-primary/15 text-primary shadow-sm hover:bg-primary/15">
              {post.category}
            </Badge>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{post.date}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-[1.04] tracking-normal text-foreground dark:text-white sm:text-5xl lg:text-[56px]">
            {post.title}
          </h1>

          <div className="mt-9 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border bg-white dark:border-white/10">
              <Image
                src="/images/logo-icon.png"
                alt="Redorch Technology"
                width={48}
                height={48}
                className="h-full w-full object-contain p-2"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground dark:text-white">Redorch Team</p>
              <p className="mt-0.5 text-sm text-muted-foreground dark:text-white/52">Strategy, design, and engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPostPage({ slug }: { slug: string }) {
  const post = getBlogPostBySlug(slug);
  if (!post) return null;

  const imageAfterIndex = Math.max(3, Math.floor(post.body.length / 2) - 1);

  return (
    <>
      <BlogArticleHero post={post} />
      <article className="bg-background pb-24 text-foreground dark:bg-[#050505] dark:text-white">
        <div className="container max-w-3xl">
          <div className="border-t border-border pt-10 dark:border-white/10">
            <div className="space-y-7 text-lg leading-8 text-muted-foreground dark:text-white/68">
              {post.body.map((paragraph, index) => (
                <div key={paragraph}>
                  {index === 1 ? (
                    <h2 className="mb-5 mt-10 text-3xl font-bold tracking-normal text-foreground dark:text-white">
                      What this means for {post.category.toLowerCase()}
                    </h2>
                  ) : null}
                  {index === imageAfterIndex + 1 ? (
                    <h2 className="mb-5 mt-12 text-3xl font-bold tracking-normal text-foreground dark:text-white">
                      How to turn the idea into a launch-ready plan
                    </h2>
                  ) : null}
                  <p className={index === 0 ? "text-xl leading-9 text-slate-700 dark:text-white/78" : undefined}>
                    {paragraph}
                  </p>
                  {index === imageAfterIndex ? (
                    <figure className="my-12">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-card shadow-[0_30px_90px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 896px, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-3 text-sm text-muted-foreground dark:text-white/40">
                        Editorial visual for {post.title}
                      </figcaption>
                    </figure>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <Badge
                key={keyword}
                className="rounded-full border-border bg-card text-muted-foreground hover:bg-card dark:border-white/10 dark:bg-white/[0.08] dark:text-white/66 dark:hover:bg-white/[0.08]"
              >
                {keyword}
              </Badge>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90">
              <Link href="/blog/">Back to Blog</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-border bg-background text-foreground hover:bg-foreground hover:text-background dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-950"
            >
              <Link href="/contact/">
                Discuss a Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}

function LegalPage({ path }: { path: keyof typeof legalPages }) {
  const page = legalPages[path];
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={page.title}
        description={page.description}
        image="/images/generated/business-cms-backend-dashboard.webp"
        compact
        visual={false}
      />
      <section className="section-surface py-24">
        <div className="container max-w-4xl">
          <div className="grid gap-5">
            {page.sections.map((section) => (
              <Card key={section.title} className="premium-card border-white/80">
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription className="text-base leading-7">{section.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MarketingPage() {
  return (
    <>
      <PageHero
        eyebrow="Marketing Consultant Home"
        title="Unlock your online growth potential"
        description="A preserved legacy slug redesigned as a conversion-focused landing page for strategy, SEO, digital campaigns, and business growth."
        image="/images/generated/seo-content-growth-workspace.webp"
        compact
      >
        <Button asChild size="lg">
          <Link href="/services/strategic-marketing-plan-development/">
            Explore Marketing Strategy
          </Link>
        </Button>
      </PageHero>
      <section className="section-surface py-24">
        <div className="container grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Increase brand awareness",
              text: "Build a clearer message, stronger page structure, and content that supports discovery.",
              icon: Globe2,
            },
            {
              title: "Harness social proof",
              text: "Turn case studies, testimonials, and results into conversion-ready website sections.",
              icon: Search,
            },
            {
              title: "Drive leads and sales",
              text: "Plan calls to action, landing pages, and funnels around measurable customer journeys.",
              icon: BarChart3,
            },
          ].map((item) => (
            <Card key={item.title} className="premium-card border-white/80">
              <CardHeader>
                <IconTile icon={item.icon} />
                <CardTitle className="mt-4">{item.title}</CardTitle>
                <CardDescription className="leading-6">{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
      <ProjectPreview />
      <CtaBand />
    </>
  );
}

export function getViewForPath(path: string): RouteView | null {
  if (path === "/") return { kind: "home" };
  if (path === "/about/") return { kind: "about" };
  if (path === "/why-us/") return { kind: "why-us" };
  if (path === "/services/") return { kind: "services" };
  if (path === "/projects/")
    return {
      kind: "projects",
      title: "Projects",
      description:
        "Redorch Technology also provides all types of digital solutions for business. Explore selected work across software, mobile, logistics, eCommerce, and enterprise systems.",
    };
  if (path === "/case-studies/")
    return {
      kind: "projects",
      title: "Case Studies",
      description:
        "A closer look at Redorch Technology projects, business problems, software solutions, and digital product outcomes.",
    };
  if (path === "/contact/") return { kind: "contact" };
  if (path === "/blog/") return { kind: "blog" };
  if (path === "/marketing-consultant-home/") return { kind: "marketing" };
  if (path === "/privacy-policy/" || path === "/terms-of-service/")
    return { kind: "legal", path: path as keyof typeof legalPages };

  const serviceMatch = path.match(/^\/services\/([^/]+)\/$/);
  if (serviceMatch) {
    const service = services.find((item) => item.slug === serviceMatch[1]);
    return service ? { kind: "service", service } : null;
  }

  const projectMatch = path.match(/^\/case-study\/([^/]+)\/$/);
  if (projectMatch) {
    const project = projects.find((item) => item.slug === projectMatch[1]);
    return project ? { kind: "project", project } : null;
  }

  const postMatch = path.match(/^\/blog\/([^/]+)\/$/);
  if (postMatch && getBlogPostBySlug(postMatch[1])) {
    return { kind: "post", slug: postMatch[1] };
  }

  return null;
}
