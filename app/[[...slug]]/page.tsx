import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getViewForPath, PageRenderer } from "@/components/page-renderer";
import {
  blogPosts,
  getBlogPostBySlug,
  legalPages,
  projects,
  services,
  site,
} from "@/lib/site-data";
import { pathFromSlug } from "@/lib/utils";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export const runtime = "edge";

type RouteView = NonNullable<ReturnType<typeof getViewForPath>>;
type JsonLd = Record<string, unknown>;

const defaultImage = "/images/wall-logo.jpg";

const pageSeo: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    image?: string;
    schemaType?: string;
  }
> = {
  home: {
    title: "Digital Business Solution Company",
    description: site.description,
    keywords: [
      "Redorch Technology",
      "digital business solution",
      "software development company",
      "web application development",
      "mobile app development",
      "AI automation",
    ],
    image: "/images/generated/redorch-digital-product-lab.webp",
    schemaType: "WebPage",
  },
  about: {
    title: "About Redorch Technology",
    description:
      "Learn about Redorch Technology, a digital product and software development team helping businesses grow with AI automation, web apps, mobile apps, and software.",
    keywords: [
      "about Redorch Technology",
      "software development team",
      "digital product company Bangladesh",
      "web and mobile app team",
    ],
    image: "/images/generated/redorch-team-studio.webp",
    schemaType: "AboutPage",
  },
  "why-us": {
    title: "Why Choose Redorch Technology",
    description:
      "Why Redorch Technology is trusted for client-centric development, agile delivery, data protection, quality assurance, and long-term software support.",
    keywords: [
      "why choose Redorch",
      "software development support",
      "agile software team",
      "digital product delivery",
    ],
    image: "/images/generated/redorch-team-studio.webp",
    schemaType: "WebPage",
  },
  services: {
    title: "AI, Web, Mobile & Software Development Services",
    description:
      "Explore Redorch Technology services for AI automation, web applications, mobile apps, business software, strategic marketing, and game development.",
    keywords: [
      "software development services",
      "AI automation services",
      "web application development services",
      "mobile app development services",
      "business software development",
    ],
    image: "/images/generated/business-cms-backend-dashboard.webp",
    schemaType: "CollectionPage",
  },
  projects: {
    title: "Projects and Case Studies",
    description:
      "Explore Redorch Technology projects and case studies across mobile apps, business systems, eCommerce, logistics, verification technology, and enterprise software.",
    keywords: [
      "Redorch projects",
      "software case studies",
      "mobile app portfolio",
      "business software projects",
      "web application case study",
    ],
    image: "/images/project-delivery.png",
    schemaType: "CollectionPage",
  },
  contact: {
    title: "Get a Free Quote",
    description:
      "Request a free quote from Redorch Technology for AI automation, web applications, mobile apps, business software, marketing, or game development.",
    keywords: [
      "request software quote",
      "web development quote",
      "mobile app quote",
      "Redorch contact",
      "software development consultation",
    ],
    image: "/images/generated/business-cms-backend-dashboard.webp",
    schemaType: "ContactPage",
  },
  blog: {
    title: "Software, SEO & Digital Growth Blog",
    description:
      "Read human-written Redorch Technology articles about software planning, SEO, mobile apps, business systems, content strategy, and digital growth.",
    keywords: [
      "software development blog",
      "SEO blog",
      "digital growth resources",
      "business software articles",
      "Next.js SEO",
    ],
    image: "/images/generated/seo-content-growth-workspace.webp",
    schemaType: "Blog",
  },
  marketing: {
    title: "Marketing Strategy and Growth Consultant",
    description:
      "Unlock online growth potential with Redorch Technology's marketing strategy, SEO content planning, landing page copy, and conversion roadmap.",
    keywords: [
      "marketing strategy consultant",
      "digital marketing plan",
      "SEO content planning",
      "conversion strategy",
    ],
    image: "/images/generated/seo-content-growth-workspace.webp",
    schemaType: "WebPage",
  },
};

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const normalizedPath = path === "/" ? "" : path;
  return `${site.url}${normalizedPath}`;
}

function absoluteImage(path = defaultImage) {
  return path.startsWith("http") ? path : `${site.url}${path}`;
}

function metadataFor({
  title,
  description,
  path,
  image = defaultImage,
  keywords = [],
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteImage(image);

  return {
    title: title.includes(site.name) ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      locale: "en_US",
      siteName: site.name,
      title,
      description,
      url,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

function getStaticSeo(view: RouteView, path: string) {
  if (view.kind === "home") return pageSeo.home;
  if (view.kind === "projects") return pageSeo.projects;
  if (view.kind === "legal") {
    const page = legalPages[path as keyof typeof legalPages];
    return {
      title: page.title,
      description: page.description,
      keywords: [
        page.title.toLowerCase(),
        "Redorch Technology",
        "website policy",
        "service terms",
      ],
      image: defaultImage,
      schemaType: "WebPage",
    };
  }

  return pageSeo[view.kind] ?? pageSeo.home;
}

function getViewTitle(view: RouteView, path: string) {
  if (view.kind === "service") return view.service.title;
  if (view.kind === "project") return `${view.project.title} Case Study`;
  if (view.kind === "post") return getBlogPostBySlug(view.slug)?.title ?? "Blog Post";
  if (view.kind === "legal") return legalPages[path as keyof typeof legalPages].title;
  if (view.kind === "projects") return view.title;

  return getStaticSeo(view, path).title;
}

function getViewDescription(view: RouteView, path: string) {
  if (view.kind === "service") return view.service.seoDescription;
  if (view.kind === "project") return view.project.summary;
  if (view.kind === "post") return getBlogPostBySlug(view.slug)?.seoDescription ?? site.description;
  if (view.kind === "legal") return legalPages[path as keyof typeof legalPages].description;
  if (view.kind === "projects") return view.description;

  return getStaticSeo(view, path).description;
}

function breadcrumbSchema(view: RouteView, path: string): JsonLd {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: site.url,
    },
  ];

  if (view.kind === "service") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: absoluteUrl("/services/"),
    });
  }

  if (view.kind === "project") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: absoluteUrl("/projects/"),
    });
  }

  if (view.kind === "post") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: absoluteUrl("/blog/"),
    });
  }

  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: getViewTitle(view, path),
    item: absoluteUrl(path),
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function webPageSchema(view: RouteView, path: string): JsonLd {
  const seo = getStaticSeo(view, path);
  const schemaType =
    view.kind === "service" || view.kind === "post" || view.kind === "project"
      ? "WebPage"
      : seo.schemaType ?? "WebPage";

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: getViewTitle(view, path),
    description: getViewDescription(view, path),
    isPartOf: {
      "@id": `${site.url}/#website`,
    },
    publisher: {
      "@id": `${site.url}/#organization`,
    },
    inLanguage: "en-US",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteImage(
        view.kind === "service"
          ? view.service.image
          : view.kind === "project"
            ? view.project.image
            : view.kind === "post"
              ? getBlogPostBySlug(view.slug)?.image
              : seo.image,
      ),
    },
  };
}

function serviceFaqs(service: (typeof services)[number]) {
  const deliverables = service.deliverables.slice(0, 3).join(", ");

  return (
    service.faqs ?? [
      {
        question: `What does Redorch include in ${service.title.toLowerCase()}?`,
        answer: `${service.description} A typical engagement includes ${deliverables}, and a clear roadmap for launch.`,
      },
      {
        question: "Can this service connect with a future CMS or admin panel?",
        answer:
          "Yes. The frontend content is structured so pages, service details, projects, blog posts, and key sections can later be managed from a Node.js and MySQL backend.",
      },
      {
        question: "How does Redorch plan the first release?",
        answer:
          "We separate must-have launch features from later improvements, then map the UX, content, technical handover, and support plan around the business goal.",
      },
    ]
  );
}

function buildSchemas(view: RouteView, path: string): JsonLd[] {
  const schemas: JsonLd[] = [webPageSchema(view, path), breadcrumbSchema(view, path)];

  if (view.kind === "home") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Redorch Technology core services",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(service.href),
        name: service.title,
      })),
    });
  }

  if (view.kind === "services") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "Redorch Technology services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: absoluteUrl(service.href),
        },
      })),
    });
  }

  if (view.kind === "service") {
    const service = view.service;
    schemas.push(
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${absoluteUrl(service.href)}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.seoDescription,
        url: absoluteUrl(service.href),
        image: absoluteImage(service.image),
        provider: {
          "@id": `${site.url}/#organization`,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Bangladesh",
          },
          {
            "@type": "Country",
            name: "Worldwide",
          },
        ],
        audience: service.sectors.map((sector) => ({
          "@type": "Audience",
          audienceType: sector,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} deliverables`,
          itemListElement: service.deliverables.map((deliverable) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: deliverable,
            },
          })),
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: serviceFaqs(service).map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    );
  }

  if (view.kind === "projects") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: view.title,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(project.href),
        name: project.title,
        description: project.summary,
      })),
    });
  }

  if (view.kind === "project") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${absoluteUrl(view.project.href)}#case-study`,
      name: view.project.title,
      headline: `${view.project.title} Case Study`,
      description: view.project.summary,
      image: absoluteImage(view.project.image),
      url: absoluteUrl(view.project.href),
      creator: {
        "@id": `${site.url}/#organization`,
      },
      about: view.project.category,
      text: `${view.project.challenge} ${view.project.solution}`,
    });
  }

  if (view.kind === "blog") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${absoluteUrl("/blog/")}#blog`,
      name: "Redorch Technology Blog",
      description: pageSeo.blog.description,
      url: absoluteUrl("/blog/"),
      blogPost: blogPosts.slice(0, 10).map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: absoluteUrl(post.href),
        datePublished: post.publishedAt,
        image: absoluteImage(post.image),
      })),
    });
  }

  if (view.kind === "post") {
    const post = getBlogPostBySlug(view.slug);

    if (post) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(post.href)}#article`,
        headline: post.title,
        description: post.seoDescription,
        image: absoluteImage(post.image),
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          "@id": `${site.url}/#organization`,
        },
        publisher: {
          "@id": `${site.url}/#organization`,
        },
        mainEntityOfPage: {
          "@id": `${absoluteUrl(post.href)}#webpage`,
        },
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        wordCount: post.body.join(" ").split(/\s+/).filter(Boolean).length,
      });
    }
  }

  return schemas;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const view = getViewForPath(path);

  if (!view) {
    return {
      ...metadataFor({
        title: "Page Not Found",
        description:
          "The page you are looking for could not be found on Redorch Technology.",
        path,
        image: defaultImage,
      }),
      robots: { index: false, follow: false },
    };
  }

  if (view.kind === "service") {
    return metadataFor({
      title: view.service.seoTitle,
      description: view.service.seoDescription,
      path: view.service.href,
      image: view.service.image,
      keywords: [
        view.service.title,
        view.service.eyebrow,
        ...view.service.deliverables,
        ...view.service.sectors.slice(0, 4),
        "Redorch Technology",
      ],
    });
  }

  if (view.kind === "project") {
    return metadataFor({
      title: `${view.project.title} Case Study`,
      description: view.project.summary,
      path: view.project.href,
      image: view.project.image,
      keywords: [
        view.project.title,
        view.project.category,
        "case study",
        "software project",
        "Redorch Technology portfolio",
      ],
    });
  }

  if (view.kind === "post") {
    const post = getBlogPostBySlug(view.slug);

    if (post) {
      return metadataFor({
        title: `${post.seoTitle} | ${site.name}`,
        description: post.seoDescription,
        path: post.href,
        image: post.image,
        keywords: post.keywords,
        type: "article",
        publishedTime: post.publishedAt,
      });
    }
  }

  const seo = getStaticSeo(view, path);

  return metadataFor({
    title: seo.title,
    description: seo.description,
    path,
    image: seo.image,
    keywords: seo.keywords,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const view = getViewForPath(path);

  if (!view) {
    notFound();
  }

  const schemas = buildSchemas(view, path);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${path}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageRenderer view={view} />
    </>
  );
}
