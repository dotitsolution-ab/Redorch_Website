export const site = {
  name: "Redorch Technology",
  url: "https://redorch.com",
  email: "hello@redorch.com",
  phone: "(880) 9696176747",
  phoneHref: "tel:+8809696176747",
  address: "Dhaka, Bangladesh",
  description:
    "Redorch Technology designs and develops AI automation, web applications, mobile apps, business software, digital products, and growth-ready technology solutions.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Projects", href: "/projects/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
];

export const stats = [
  { value: "9+", label: "featured case studies" },
  { value: "6", label: "core service tracks" },
  { value: "360", label: "delivery support mindset" },
  { value: "100%", label: "custom project planning" },
];

export const industries = [
  "eCommerce",
  "Education",
  "Healthcare & Fitness",
  "Logistics",
  "Social Networking",
  "Real Estate",
  "Travel & Hospitality",
  "Food & Restaurant",
  "On-Demand Solutions",
  "Gaming & AR/VR",
];

export const features = [
  {
    title: "Client centric development",
    text: "Every feature is shaped around business goals, user journeys, and operational realities.",
  },
  {
    title: "Agile delivery",
    text: "Roadmaps, sprints, demos, and feedback loops keep the product moving with clarity.",
  },
  {
    title: "Dedicated team",
    text: "Designers, developers, and QA work as one focused unit for each engagement.",
  },
  {
    title: "Reliable support",
    text: "Launch support, maintenance, and enhancement planning are built into the workflow.",
  },
  {
    title: "Data protection",
    text: "NDA-ready delivery practices protect sensitive product, customer, and business data.",
  },
  {
    title: "Quality assurance",
    text: "Testing, review, and release checks help reduce risk before a product reaches users.",
  },
];

export const processSteps = [
  "Requirement Gathering",
  "UI/UX Design",
  "Prototype",
  "App Development",
  "Quality Assurance",
  "Deployment",
  "Support & Maintenance",
];

export const audiences = [
  {
    title: "Start Up Business",
    text: "Build an MVP, validate a product idea, and prepare for early users.",
  },
  {
    title: "Small & Medium Business",
    text: "Digitize workflows, launch customer-facing platforms, and improve operations.",
  },
  {
    title: "Enterprise Business",
    text: "Develop scalable systems, integrations, dashboards, and data-driven tools.",
  },
  {
    title: "Agencies",
    text: "Partner with a delivery team for production, maintenance, and specialist builds.",
  },
];

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  icon: string;
  href: string;
  bullets: string[];
  deliverables: string[];
  solutions: string[];
  workScopes: string[];
  sectors: string[];
  faqs?: ServiceFaq[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "ai-automation-machine-learning",
    title: "AI Automation & Machine Learning",
    eyebrow: "AI-powered systems",
    summary:
      "Practical AI workflows, prediction tools, smart assistants, and automation systems built around real business operations.",
    description:
      "Redorch Technology helps businesses turn manual work, customer questions, documents, and scattered data into useful AI-powered systems. We plan safe automations, machine learning features, chat assistants, and admin-ready workflows that support teams without making the product complicated.",
    image: "/images/generated/ai-automation-workflow.webp",
    icon: "BrainCircuit",
    href: "/services/ai-automation-machine-learning/",
    bullets: [
      "AI workflow planning for sales, support, operations, reporting, and content tasks",
      "Custom chatbot, assistant, recommendation, and document-processing feature planning",
      "Machine learning model integration strategy with clean data flow and review controls",
      "Admin-ready AI controls prepared for future Node.js and MySQL backend management",
    ],
    deliverables: [
      "AI use-case map",
      "Automation workflow",
      "Model integration plan",
      "Human review controls",
    ],
    solutions: [
      "Customer support AI assistants",
      "Document search and knowledge-base AI",
      "Lead scoring and sales automation",
      "Recommendation and personalization flows",
      "Reporting and data summary automation",
      "Internal productivity assistants",
    ],
    workScopes: [
      "AI opportunity discovery and use-case selection",
      "Data source mapping for files, forms, website content, and CRM records",
      "Prompt, workflow, and human-review control planning",
      "Model/API integration planning with cost and privacy considerations",
      "Admin-ready controls for prompts, knowledge sources, and approvals",
      "Testing plans for accuracy, fallback behavior, and team adoption",
    ],
    sectors: [
      "Customer support",
      "eCommerce",
      "Logistics",
      "Education",
      "Real estate",
      "Agency operations",
      "Retail and SMEs",
      "Internal business teams",
    ],
    faqs: [
      {
        question: "What can Redorch build with AI and machine learning?",
        answer:
          "We can plan and build practical AI features such as customer support assistants, document search, lead scoring, recommendation flows, reporting automation, content workflows, and internal productivity tools.",
      },
      {
        question: "Do I need clean data before starting an AI project?",
        answer:
          "No. We can begin with your current files, forms, website content, or workflow notes, then identify what data is useful, what needs cleanup, and what should stay under human review.",
      },
      {
        question: "Which AI models can be integrated?",
        answer:
          "The frontend is model-agnostic. During backend planning, we can connect suitable language, vision, embedding, or prediction models based on cost, privacy, speed, and your business use case.",
      },
      {
        question: "How do you keep AI outputs safe for business use?",
        answer:
          "We design AI flows with clear instructions, approval steps, access rules, logging, and fallback paths so teams can review important outputs before they affect customers or operations.",
      },
      {
        question: "Can AI features be managed from a CMS or admin panel later?",
        answer:
          "Yes. Prompts, knowledge sources, FAQs, workflow rules, and approval statuses can be structured for a future Node.js and MySQL admin panel.",
      },
      {
        question: "How long does an AI automation project take?",
        answer:
          "A focused prototype can often start in a few weeks. A production-ready workflow depends on data quality, integrations, user roles, review steps, and the number of business processes involved.",
      },
    ],
    seoTitle: "AI Automation and Machine Learning Services | Redorch Technology",
    seoDescription:
      "Build AI automation, machine learning workflows, chat assistants, document processing, and intelligent business tools with Redorch Technology.",
  },
  {
    slug: "business-solution",
    title: "Business Solution",
    eyebrow: "Business growth",
    summary:
      "Custom software and workflow systems for faster, more accurate, and more reliable business operations.",
    description:
      "Redorch Technology builds business solutions that connect teams, customers, and data in one practical workflow. From internal dashboards to account, inventory, delivery, and support systems, we design software around the way your company actually works.",
    image: "/images/generated/business-cms-backend-dashboard.webp",
    icon: "BriefcaseBusiness",
    href: "/services/business-solution/",
    bullets: [
      "Business process mapping and digital workflow planning",
      "Custom dashboards, reporting, and role-based access",
      "Operational software for sales, inventory, delivery, accounts, and support",
      "Secure data structure prepared for future CMS or admin panel integration",
    ],
    deliverables: [
      "Requirement document",
      "Information architecture",
      "Admin-ready modules",
      "Release roadmap",
    ],
    solutions: [
      "CRM and customer management systems",
      "Inventory and stock management tools",
      "Delivery, dispatch, and operation dashboards",
      "Accounts, billing, and reporting modules",
      "Vendor, branch, and staff management panels",
      "Custom admin portals for daily workflows",
    ],
    workScopes: [
      "Business process audit and workflow mapping",
      "Role-based module planning for owners, managers, staff, and customers",
      "Dashboard, report, notification, and approval-flow design",
      "Database structure planning for future Node.js and MySQL backend",
      "Data import, export, and migration planning",
      "QA, launch support, and next-phase roadmap preparation",
    ],
    sectors: [
      "Retail",
      "Logistics",
      "Legal and compliance",
      "Healthcare clinics",
      "Education",
      "Service businesses",
      "NGO and field teams",
      "SME operations",
    ],
    faqs: [
      {
        question: "What kind of business software can Redorch build?",
        answer:
          "Redorch can plan and build workflow systems, dashboards, inventory modules, delivery tools, account management panels, reporting screens, customer portals, and internal operation software based on your current process.",
      },
      {
        question: "Do you study our existing business process first?",
        answer:
          "Yes. We start by mapping how your team currently handles customers, orders, approvals, reports, and repeated manual tasks. The software plan is then shaped around the real workflow instead of a generic template.",
      },
      {
        question: "Can the system have different user roles?",
        answer:
          "Yes. We can plan role-based access for owners, managers, staff, customers, vendors, or branch users so each person sees the screens and actions they need.",
      },
      {
        question: "Will the business solution support reports and dashboards?",
        answer:
          "Yes. Reporting can be planned for sales, inventory, delivery status, team performance, customer activity, or other business metrics that help decision-making.",
      },
      {
        question: "Can it connect to a future Node.js and MySQL backend?",
        answer:
          "Yes. The frontend structure can be prepared around clean content and data modules so the backend can later manage records, users, permissions, reports, and admin workflows.",
      },
      {
        question: "How do we decide the first release scope?",
        answer:
          "We separate must-have daily workflows from future improvements. This keeps the first release focused, easier to test, and more useful for the team from day one.",
      },
    ],
    seoTitle: "Business Solution Development Company | Redorch Technology",
    seoDescription:
      "Build custom business software, dashboards, workflow systems, and scalable digital solutions with Redorch Technology.",
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    eyebrow: "Interactive web platforms",
    summary:
      "Modern web apps, SaaS platforms, portals, and enterprise systems built for speed, security, and growth.",
    description:
      "Technology changes quickly, so your application needs a foundation that can evolve. Redorch Technology develops custom web applications with clean UI, strong architecture, admin-ready content models, and performance-focused delivery.",
    image: "/images/generated/web-mobile-development-studio.webp",
    icon: "MonitorCog",
    href: "/services/web-application-development/",
    bullets: [
      "Custom web application and SaaS product development",
      "Enterprise portals, customer dashboards, and workflow automation",
      "CMS-ready page, blog, project, and portfolio content structures",
      "SEO-friendly frontend architecture with fast static pages",
    ],
    deliverables: [
      "UX flow",
      "Frontend application",
      "API integration plan",
      "Technical handover",
    ],
    solutions: [
      "SaaS platforms and subscription products",
      "Customer portals and member dashboards",
      "Booking, appointment, and request systems",
      "Marketplace and directory platforms",
      "Admin dashboards and internal tools",
      "CMS-ready business websites with app-like sections",
    ],
    workScopes: [
      "Information architecture and UX flow planning",
      "Responsive frontend application development",
      "Authentication, role, and API integration planning",
      "SEO-friendly public pages and metadata structure",
      "Performance, accessibility, and responsive testing",
      "Technical handover for backend and CMS integration",
    ],
    sectors: [
      "SaaS startups",
      "Professional services",
      "Education and LMS",
      "Real estate",
      "Healthcare admin",
      "eCommerce",
      "Enterprise portals",
      "Agency projects",
    ],
    faqs: [
      {
        question: "What types of web applications can Redorch develop?",
        answer:
          "Redorch can develop SaaS platforms, customer portals, admin dashboards, booking systems, business portals, internal tools, reporting panels, and custom web products.",
      },
      {
        question: "Can the web application be SEO-friendly?",
        answer:
          "Yes. Public pages can be built with clean routes, metadata, structured content, fast loading, sitemap support, and content blocks that are easy to connect with a CMS later.",
      },
      {
        question: "Do you design the UX flow before development?",
        answer:
          "Yes. We map user journeys, page structure, forms, dashboard states, and key actions before development so the application feels clear and purposeful.",
      },
      {
        question: "Can the frontend connect with APIs later?",
        answer:
          "Yes. The frontend can be prepared with API-ready data structures so a Node.js backend, MySQL database, authentication, and admin panel can connect in the backend phase.",
      },
      {
        question: "Can Redorch modernize an existing web application?",
        answer:
          "Yes. We can review the existing interface, content, routes, performance, and feature flow, then redesign or rebuild the frontend without losing important business logic.",
      },
      {
        question: "What is included in technical handover?",
        answer:
          "Handover can include route structure, component notes, content fields, deployment guidance, SEO fields, and a roadmap for backend integration or future feature development.",
      },
    ],
    seoTitle: "Web Application Development Services | Redorch Technology",
    seoDescription:
      "Hire Redorch Technology for custom web application development, SaaS platforms, business portals, and scalable frontend systems.",
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    eyebrow: "Fully functional mobile apps",
    summary:
      "Android, iOS, and hybrid mobile applications designed for smooth user experiences and real business use.",
    description:
      "Mobile apps are part of everyday life and business. Redorch Technology helps startups and organizations turn ideas into reliable Android, iOS, and cross-platform products with clean design, useful features, and launch support.",
    image: "/images/generated/web-mobile-development-studio.webp",
    icon: "Smartphone",
    href: "/services/mobile-application-development/",
    bullets: [
      "Android and iOS application design and development",
      "Hybrid app planning for faster market entry",
      "API-driven mobile products with admin and reporting needs",
      "Store launch, QA, maintenance, and enhancement support",
    ],
    deliverables: [
      "Mobile UI/UX",
      "Clickable prototype",
      "Production app",
      "Launch checklist",
    ],
    solutions: [
      "Customer mobile apps for Android and iOS",
      "Grocery, food, delivery, and marketplace apps",
      "Booking, service request, and appointment apps",
      "Learning, community, and membership apps",
      "Business operation and staff field apps",
      "Hybrid apps connected with web dashboards",
    ],
    workScopes: [
      "Mobile user journey, screen flow, and navigation planning",
      "Clickable prototype for app review before production",
      "Android, iOS, or hybrid app development planning",
      "API-driven features for login, orders, content, reports, and admin control",
      "Device-size testing, QA priorities, and launch checklist",
      "Maintenance, update, and next-feature planning after release",
    ],
    sectors: [
      "Grocery and food delivery",
      "Retail and eCommerce",
      "Logistics and courier",
      "Education",
      "Healthcare appointments",
      "Real estate",
      "Startup MVPs",
      "Field service teams",
    ],
    faqs: [
      {
        question: "Can Redorch build Android and iOS mobile apps?",
        answer:
          "Yes. Redorch can plan and build Android, iOS, or hybrid mobile app experiences depending on your budget, launch timeline, features, and backend requirements.",
      },
      {
        question: "What should be planned before mobile app development starts?",
        answer:
          "The first step is to define the core user action, screens, onboarding, login, notifications, API needs, admin requirements, analytics, and launch priorities.",
      },
      {
        question: "Do you create clickable mobile prototypes?",
        answer:
          "Yes. A clickable prototype helps review the app flow, screen hierarchy, forms, buttons, and user journey before full production development begins.",
      },
      {
        question: "Can the app connect with a website or admin panel?",
        answer:
          "Yes. Mobile apps can be planned around API-driven data so orders, users, content, reports, or settings can be managed from a backend or CMS later.",
      },
      {
        question: "Will the app be tested on real device sizes?",
        answer:
          "Yes. Mobile UI needs careful testing across device sizes, navigation patterns, loading states, form behavior, and real user conditions before launch.",
      },
      {
        question: "Can Redorch support app launch and updates?",
        answer:
          "Yes. Launch preparation can include QA priorities, store checklist planning, release notes, maintenance needs, bug fixes, and future feature recommendations.",
      },
    ],
    seoTitle: "Mobile App Development Company | Redorch Technology",
    seoDescription:
      "Redorch Technology builds Android, iOS, and hybrid mobile apps for startups, businesses, and enterprise workflows.",
  },
  {
    slug: "strategic-marketing-plan-development",
    title: "Strategic Marketing Plan Development",
    eyebrow: "Digital growth planning",
    summary:
      "Marketing strategy, campaign planning, and conversion-focused digital journeys for measurable growth.",
    description:
      "A strong digital product needs a clear growth strategy. Redorch Technology plans content, conversion journeys, landing pages, SEO structure, and campaign-ready assets so your website can support retention, leads, and sales.",
    image: "/images/generated/seo-content-growth-workspace.webp",
    icon: "TrendingUp",
    href: "/services/strategic-marketing-plan-development/",
    bullets: [
      "SEO-ready page structure and keyword-focused content planning",
      "Landing page and lead capture strategy",
      "Campaign journeys for awareness, retention, and conversion",
      "Analytics-ready recommendations for future backend integration",
    ],
    deliverables: [
      "SEO content map",
      "Landing page copy",
      "Conversion plan",
      "Growth recommendations",
    ],
    solutions: [
      "SEO service-page content plans",
      "Landing pages for campaigns and offers",
      "Lead generation funnels and inquiry flows",
      "Blog topic maps and internal-link plans",
      "Website conversion audits",
      "Analytics-ready growth recommendations",
    ],
    workScopes: [
      "Audience, offer, and competitor positioning review",
      "Keyword, page, and content hierarchy planning",
      "Landing page copywriting and CTA structure",
      "Conversion path, form, and lead quality planning",
      "Analytics event and performance-measurement recommendations",
      "Campaign journey planning for awareness, retention, and sales",
    ],
    sectors: [
      "Software companies",
      "Local service businesses",
      "eCommerce brands",
      "Real estate",
      "Education and training",
      "Healthcare services",
      "B2B agencies",
      "Startup launches",
    ],
    faqs: [
      {
        question: "What is included in a strategic marketing plan?",
        answer:
          "The plan can include SEO content structure, landing page messaging, campaign journeys, lead capture flow, conversion goals, analytics needs, and follow-up recommendations.",
      },
      {
        question: "Can Redorch plan SEO content for service pages?",
        answer:
          "Yes. We can plan service page topics, keywords, headings, internal links, metadata, blog support articles, and content blocks that help both search visibility and buyer confidence.",
      },
      {
        question: "Do you write landing page copy?",
        answer:
          "Yes. Landing page copy can be structured around the offer, audience pain points, benefits, proof, objections, and a clear call to action.",
      },
      {
        question: "Can marketing planning connect with website design?",
        answer:
          "Yes. Strategy works best when copy, design, CTA placement, form fields, trust signals, and analytics are planned together instead of separately.",
      },
      {
        question: "How do you measure marketing success?",
        answer:
          "Measurement can include organic traffic, ranking movement, CTA clicks, form submissions, lead quality, conversion rate, and content performance.",
      },
      {
        question: "Is this service useful before running ads?",
        answer:
          "Yes. A clear page structure, message, offer, and tracking setup should be ready before spending money on campaigns, otherwise traffic may not convert well.",
      },
    ],
    seoTitle: "Strategic Marketing Plan Development | Redorch Technology",
    seoDescription:
      "Plan SEO content, campaigns, landing pages, and growth journeys with Redorch Technology's strategic marketing service.",
  },
  {
    slug: "game-design-and-development",
    title: "Game Design and Development",
    eyebrow: "Games, AR, and VR",
    summary:
      "Game, AR, and VR product development for immersive digital experiences across mobile and web platforms.",
    description:
      "Redorch Technology supports game concepts from idea to playable experience. We plan mechanics, interfaces, AR/VR opportunities, and production workflows for casual games, educational games, and interactive brand experiences.",
    image: "/images/generated/game-ar-vr-experience-studio.webp",
    icon: "Gamepad2",
    href: "/services/game-design-and-development/",
    bullets: [
      "Casual game concept planning and UI/UX",
      "Unity 3D and multi-platform production planning",
      "AR and VR experience strategy",
      "Testing, iteration, deployment, and support",
    ],
    deliverables: [
      "Game concept",
      "Experience map",
      "Prototype plan",
      "Release support",
    ],
    solutions: [
      "Casual mobile and web game concepts",
      "Educational and training game experiences",
      "Brand activation and event games",
      "AR product demos and interactive campaigns",
      "VR experience planning and prototypes",
      "Gamified product onboarding flows",
    ],
    workScopes: [
      "Game concept, audience, and mechanic planning",
      "Experience map, user journey, and reward-flow design",
      "Prototype scope for testing gameplay before full production",
      "2D/3D UI direction, device needs, and performance planning",
      "AR/VR feasibility review and platform recommendations",
      "Testing, iteration, release, and support planning",
    ],
    sectors: [
      "Brand marketing",
      "Education",
      "Training and simulation",
      "Events and activations",
      "Retail product demos",
      "Entertainment startups",
      "Museums and exhibitions",
      "Interactive campaigns",
    ],
    faqs: [
      {
        question: "What types of games and interactive experiences can Redorch plan?",
        answer:
          "Redorch can plan casual games, educational games, brand activations, AR concepts, VR experiences, web-based interactive products, and mobile game prototypes.",
      },
      {
        question: "Do you start with a game concept document?",
        answer:
          "Yes. The concept should define the audience, core mechanic, player journey, platform, visual direction, rewards, controls, and success metric before production.",
      },
      {
        question: "Can Redorch create a prototype plan before full development?",
        answer:
          "Yes. A prototype plan helps test the main interaction, technical feasibility, art direction, device performance, and user engagement before building the full experience.",
      },
      {
        question: "Can AR or VR be added to a brand experience?",
        answer:
          "Yes. AR and VR can be considered when they support a clear goal, such as product education, training, event engagement, or immersive storytelling.",
      },
      {
        question: "What platforms can be considered for release?",
        answer:
          "Depending on the concept, the experience can be planned for mobile, web, desktop, event devices, AR-capable phones, or VR headsets.",
      },
      {
        question: "How do you keep a game project practical?",
        answer:
          "We define the smallest playable version first, test the core mechanic early, then expand visuals, levels, content, and release support based on feedback.",
      },
    ],
    seoTitle: "Game Design and Development Services | Redorch Technology",
    seoDescription:
      "Create game, AR, and VR experiences with Redorch Technology's game design and development services.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  href: string;
};

export const projects: Project[] = [
  {
    slug: "one-company",
    title: "Legal Solutions Management - One Company",
    category: "Business platform",
    image: "/images/project-one-company.png",
    summary:
      "A one-stop business management platform for registration, compliance, IT, legal, tax, and digital service workflows.",
    challenge:
      "Small businesses needed one place to manage formation, compliance, legal support, tax, IT, and marketing tasks without jumping between providers.",
    solution:
      "Redorch delivered a dashboard-led platform structure with service modules, account flows, and a product experience designed around simple business administration.",
    results: [
      "Unified personal dashboard for small business users",
      "Service modules for ASIC, legal, tax, IT, and digital marketing",
      "A scalable foundation for future automation and partner workflows",
    ],
    href: "/case-study/one-company/",
  },
  {
    slug: "fake-product-detector",
    title: "Fake Product Detector",
    category: "Verification technology",
    image: "/images/project-fakebuzz.png",
    summary:
      "An anti-fake coding platform built to help brands and consumers fight counterfeit consumer goods.",
    challenge:
      "Counterfeit products create financial, safety, and trust risks across medicine, personal care, electronics, and retail markets.",
    solution:
      "The platform supports product verification journeys that help brands confirm authenticity and give consumers a direct way to check products.",
    results: [
      "Verification-first product experience",
      "Brand protection positioning for high-risk markets",
      "Scalable content and product education structure",
    ],
    href: "/case-study/fake-product-detector/",
  },
  {
    slug: "cepbasket-mobile-app",
    title: "Cepbasket Mobile App",
    category: "Grocery delivery",
    image: "/images/project-cepbasket.jpeg",
    summary:
      "A grocery delivery software suite with modern retail features, mobile flows, and API-driven operations.",
    challenge:
      "Entrepreneurs and enterprises needed a platform that could support shopper journeys, product catalogues, delivery flows, and business management.",
    solution:
      "Redorch shaped a suite of web and mobile experiences for grocery eCommerce, delivery operations, and scalable retail management.",
    results: [
      "Customer shopping journey for online grocery",
      "Operational structure for delivery and catalogue workflows",
      "Product foundation ready for customization by business model",
    ],
    href: "/case-study/cepbasket-mobile-app/",
  },
  {
    slug: "beneficial-selection-system",
    title: "Beneficial Selection System",
    category: "Government and NGO",
    image: "/images/project-beneficial.png",
    summary:
      "A beneficiary selection mobile app and admin portal for SWAPNO, a social safety net project in Bangladesh.",
    challenge:
      "The project needed a reliable way to verify NID data, evaluate eligibility, select beneficiaries, and collect field information.",
    solution:
      "Redorch developed a native mobile app and admin portal to support verification, selection, waiting lists, household checks, geodata, and image data capture.",
    results: [
      "NID verification and eligibility workflow",
      "Lottery and waiting-list beneficiary selection",
      "Field data collection with admin monitoring",
    ],
    href: "/case-study/beneficial-selection-system/",
  },
  {
    slug: "enterprise-account-management-system",
    title: "Enterprise Account Management System",
    category: "Accounts and operations",
    image: "/images/project-eams.png",
    summary:
      "A centralized account and enterprise management system for CMSME business operations under the SWAPNO project.",
    challenge:
      "Multiple trade and production-based enterprises needed a unified system for business functions, logistics, transactions, and support.",
    solution:
      "Redorch created an integrated web-based management system with enterprise accounts, transaction flows, support tickets, and admin guidance.",
    results: [
      "Centralized enterprise account management",
      "Trade and production workflow coverage",
      "Admin, ticketing, and support modules",
    ],
    href: "/case-study/enterprise-account-management-system/",
  },
  {
    slug: "delivery-management-system",
    title: "Delivery Management System",
    category: "Logistics software",
    image: "/images/project-delivery.png",
    summary:
      "A B2B delivery management system for merchants, warehouses, dispatching, tracking, wallets, proof of delivery, and reporting.",
    challenge:
      "Delivery operations needed one system to coordinate merchants, warehouses, orders, riders, customer communication, and returns.",
    solution:
      "The system organizes the full delivery lifecycle from order creation to dispatch, live status, proof of delivery, analytics, and return management.",
    results: [
      "Merchant, warehouse, and order management",
      "Real-time tracking and dispatch workflows",
      "Analytics, reporting, wallet, and return modules",
    ],
    href: "/case-study/delivery-management-system/",
  },
  {
    slug: "investment-management-system-and-website",
    title: "Investment Management System and Website",
    category: "Consulting platform",
    image: "/images/project-investment.png",
    summary:
      "A business consultancy and investment website for startups and established companies seeking growth guidance.",
    challenge:
      "The client needed a clear platform to communicate consultancy services, project support, market research, and startup coaching.",
    solution:
      "Redorch structured a digital presence around growth strategy, service clarity, client education, and conversion pathways.",
    results: [
      "Clear consultancy service positioning",
      "Website structure for trust and lead generation",
      "Growth-oriented content architecture",
    ],
    href: "/case-study/investment-management-system-and-website/",
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    category: "Inventory software",
    image: "/images/project-inventory.png",
    summary:
      "A software system for tracking, organizing, and managing inventory with real-time stock visibility and order workflows.",
    challenge:
      "Businesses needed accurate stock levels, product movement tracking, order management, and reliable inventory control.",
    solution:
      "Redorch designed inventory workflows that help teams record stock, manage purchase and sales orders, reduce overstocking, and prevent stockouts.",
    results: [
      "Real-time inventory quantity and location visibility",
      "Purchase, sales, and backorder management",
      "Improved inventory control and operational clarity",
    ],
    href: "/case-study/inventory-management-system/",
  },
  {
    slug: "artwork-base-ecommerce-website",
    title: "Artwork Base eCommerce Website",
    category: "eCommerce",
    image: "/images/project-artwork.png",
    summary:
      "An online artwork marketplace where artists can showcase, manage, and sell creative work to customers.",
    challenge:
      "Artists needed a digital marketplace for profiles, artwork uploads, categories, secure purchase flows, and customer discovery.",
    solution:
      "Redorch planned the eCommerce structure around artwork browsing, artist profiles, inventory control, payments, and fulfilment support.",
    results: [
      "Artwork catalogue and artist profile model",
      "Customer browsing and purchase flow",
      "Marketplace-ready content and inventory structure",
    ],
    href: "/case-study/artwork-base-ecommerce-website/",
  },
];

export const values = [
  {
    title: "Love the Work",
    text: "We enjoy solving difficult product and engineering problems with practical creativity.",
  },
  {
    title: "Support the Team",
    text: "We collaborate clearly, respect ownership, and keep delivery focused on the shared goal.",
  },
  {
    title: "Embrace Positivity",
    text: "We listen first, assume good intent, and keep feedback useful for the next step.",
  },
  {
    title: "Be a Doer",
    text: "We move from discussion to execution with a bias for progress and measurable outcomes.",
  },
  {
    title: "Focus on the Customer",
    text: "We think from the user's side of the screen and the business owner's side of the table.",
  },
  {
    title: "Always Learning",
    text: "We keep improving the stack, process, and product thinking behind every launch.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  href: string;
  date: string;
  publishedAt: string;
  category: string;
  image: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  readingTime: string;
  body: string[];
};

type BlogWritingAngle = {
  focus: string;
  reader: string;
  planning: string;
  execution: string;
  measurement: string;
  risk: string;
  cms: string;
};

const defaultBlogAngle: BlogWritingAngle = {
  focus:
    "clear digital planning turns a broad idea into a product decision that a team can actually execute",
  reader:
    "business owners, founders, marketing leads, and operations managers who need useful technology without unnecessary complexity",
  planning:
    "the first planning step is to define the audience, business goal, primary workflow, content needs, and launch constraint",
  execution:
    "delivery works best when design, frontend, backend planning, content, testing, and handover move in a visible sequence",
  measurement:
    "success should be measured through user actions, qualified inquiries, workflow speed, search visibility, and the quality of operational data",
  risk:
    "the biggest risk is building attractive screens before the team understands the real process, ownership, and long-term support needs",
  cms:
    "a CMS-ready content model keeps pages, services, media, SEO fields, and publishing responsibilities easier to manage later",
};

const blogAngles: Record<string, BlogWritingAngle> = {
  "Web Development": {
    focus:
      "a web application becomes valuable when it turns repeated business work into a reliable digital workflow",
    reader:
      "growing companies that need portals, dashboards, SaaS features, internal tools, or customer-facing applications",
    planning:
      "planning should begin with users, roles, permission levels, data entities, reports, and the actions that must be completed every day",
    execution:
      "the build should move through UX flows, reusable frontend components, API contracts, validation, testing, and staged release planning",
    measurement:
      "track active users, task completion, support reduction, data accuracy, and the time saved by replacing manual processes",
    risk:
      "teams often overbuild the first version, add too many nice-to-have modules, or ignore admin workflows until late in the project",
    cms:
      "content, help pages, onboarding text, service descriptions, and marketing pages can be prepared for a future CMS from the beginning",
  },
  SEO: {
    focus:
      "SEO works when technical structure, useful content, and page experience support the same search intent",
    reader:
      "business owners and marketing teams that want visibility without filling pages with thin keyword-heavy copy",
    planning:
      "planning should map core services, informational articles, case studies, internal links, metadata, and search-friendly page slugs",
    execution:
      "the frontend should support clean HTML, fast loading, canonical URLs, schema data, optimized images, and clear content hierarchy",
    measurement:
      "measure indexed pages, search impressions, organic clicks, qualified leads, reading depth, and internal link movement",
    risk:
      "the main risk is treating SEO as a final checklist instead of designing the content architecture before launch",
    cms:
      "SEO titles, meta descriptions, excerpts, images, categories, and article bodies should be editable in the later CMS",
  },
  "CMS Planning": {
    focus:
      "a CMS-ready frontend gives the content team a future editing path without forcing another redesign",
    reader:
      "teams that want to launch a polished static frontend now and connect Node.js and MySQL content management later",
    planning:
      "planning should define page types, service fields, blog fields, project fields, media handling, author roles, and publish states",
    execution:
      "components should read from structured data first so the backend can later replace static files with database responses",
    measurement:
      "measure how easily editors can update content, preserve SEO fields, reuse media, and publish changes without developer support",
    risk:
      "a common risk is hardcoding page text in many components, which makes backend integration slower and more error-prone",
    cms:
      "the future CMS should manage drafts, slugs, metadata, images, categories, related content, and safe publishing workflows",
  },
  "Business Software": {
    focus:
      "business software creates value when it makes operational work faster, clearer, and less dependent on scattered spreadsheets",
    reader:
      "companies that need dashboards, approval flows, reporting, customer records, inventory, accounts, or internal management tools",
    planning:
      "planning should document the real workflow, user roles, edge cases, data ownership, approval points, and reporting needs",
    execution:
      "delivery should prioritize the most repeated tasks first, then add automation, notifications, exports, and advanced modules carefully",
    measurement:
      "measure time saved, fewer duplicate entries, faster approvals, clearer reports, and lower dependency on manual coordination",
    risk:
      "the biggest risk is copying a broken offline process into software without simplifying the work first",
    cms:
      "an admin-ready model can later control users, permissions, settings, help text, notification templates, and public content",
  },
  "Mobile Apps": {
    focus:
      "mobile app development succeeds when the first release solves one clear user problem with a smooth experience",
    reader:
      "startups and organizations planning Android, iOS, or hybrid apps connected to business workflows",
    planning:
      "planning should define onboarding, core action, user accounts, API needs, notifications, admin controls, and store launch requirements",
    execution:
      "the team should move from wireframes to prototype, then production screens, API integration, testing, and release preparation",
    measurement:
      "measure activation, retention, task completion, support requests, crash reports, and the business outcome behind the app",
    risk:
      "a startup can lose time by trying to launch every future feature instead of validating the smallest useful product first",
    cms:
      "CMS-managed content can later support onboarding screens, FAQs, policy pages, banners, and feature announcements",
  },
  "UI/UX": {
    focus:
      "good UI design turns attention into action by making the next step obvious and trustworthy",
    reader:
      "service businesses, software companies, and product teams that need clearer pages, forms, dashboards, or conversion flows",
    planning:
      "planning should define the page goal, visitor doubts, content hierarchy, trust signals, visual rhythm, and conversion action",
    execution:
      "design should move from information architecture to wireframes, components, responsive layouts, accessibility checks, and content polish",
    measurement:
      "measure conversion rate, scroll depth, CTA clicks, form starts, bounce patterns, and the quality of inquiries generated",
    risk:
      "the biggest risk is adding decoration without improving clarity, readability, or the path to contact",
    cms:
      "a CMS-ready interface lets teams update headlines, sections, images, CTAs, FAQs, and proof points without breaking the layout",
  },
  Portfolio: {
    focus:
      "portfolio content builds trust when it explains the business challenge, product thinking, and real outcome",
    reader:
      "agencies, software companies, consultants, and service providers that need case studies to support sales conversations",
    planning:
      "planning should collect the problem, audience, constraints, solution approach, features, screenshots, and measurable results",
    execution:
      "case study pages should present context first, then process, solution, outcomes, related services, and a clear project CTA",
    measurement:
      "measure case study visits, inquiry quality, internal link clicks, sales usefulness, and the topics visitors explore next",
    risk:
      "a weak portfolio only shows images and misses the strategic thinking clients need before they trust a team",
    cms:
      "a CMS should manage project categories, summaries, images, challenges, solutions, results, and related services",
  },
  Backend: {
    focus:
      "backend planning protects the public website by giving content, users, files, and permissions a clear operating model",
    reader:
      "businesses preparing a custom CMS, admin panel, API layer, or operational database for a growing website",
    planning:
      "planning should define content models, database tables, authentication, roles, media handling, validation, and backup needs",
    execution:
      "development should begin with stable API contracts, then admin screens, file flows, audit needs, security checks, and deployment",
    measurement:
      "measure editor speed, API reliability, permission accuracy, content quality, backup confidence, and publishing stability",
    risk:
      "the main risk is building admin screens before agreeing on the data model and validation rules",
    cms:
      "Node.js and MySQL can manage pages, posts, services, projects, media, SEO fields, users, and draft states in one structured system",
  },
  "Website Redesign": {
    focus:
      "a redesign should improve trust and usability while protecting the search value the old website already earned",
    reader:
      "companies replacing an outdated site, migrating from WordPress, or preparing a faster frontend for cPanel hosting",
    planning:
      "planning should audit existing URLs, content quality, rankings, internal links, metadata, media, forms, and conversion paths",
    execution:
      "the redesign should preserve important slugs, improve copy, refresh components, optimize images, and test pages before launch",
    measurement:
      "measure organic stability, page speed, inquiry quality, indexed pages, broken links, and user engagement after launch",
    risk:
      "redesigns lose SEO when teams change routes, remove useful copy, or forget redirects and metadata",
    cms:
      "a CMS-ready redesign lets future content changes happen in one place while keeping the public frontend fast and polished",
  },
  Marketing: {
    focus:
      "digital marketing works best when content, landing pages, campaigns, and follow-up support one business goal",
    reader:
      "small businesses that want practical online growth without spreading effort across too many disconnected activities",
    planning:
      "planning should define the offer, audience, message, landing page, content calendar, lead capture, and tracking method",
    execution:
      "execution should connect SEO pages, blog topics, campaign creatives, CTAs, forms, and follow-up communication",
    measurement:
      "measure qualified leads, cost per inquiry, conversion rate, content performance, repeat visits, and sales follow-up speed",
    risk:
      "marketing becomes expensive when the website cannot explain the offer or convert interested visitors into conversations",
    cms:
      "a CMS can later manage landing pages, campaign copy, articles, banners, testimonials, FAQs, and conversion-focused updates",
  },
  eCommerce: {
    focus:
      "eCommerce success depends on fast product discovery, trustworthy product pages, smooth checkout, and reliable operations",
    reader:
      "retailers, marketplaces, and product businesses planning an online store or upgrading an existing shopping experience",
    planning:
      "planning should map products, categories, filters, inventory, customer accounts, payments, shipping, returns, and admin needs",
    execution:
      "the build should prioritize browsing, product detail quality, cart flow, checkout confidence, order management, and support content",
    measurement:
      "measure conversion rate, cart abandonment, product search usage, repeat orders, support requests, and stock accuracy",
    risk:
      "a store can look polished but still fail if product data, checkout flow, or order handling is weak",
    cms:
      "CMS and admin tools can manage products, categories, promotions, landing pages, shipping notes, and SEO fields",
  },
  Logistics: {
    focus:
      "logistics software improves service quality by showing orders, riders, merchants, returns, and proof of delivery in one workflow",
    reader:
      "delivery teams, courier companies, marketplaces, and operations managers coordinating many moving orders",
    planning:
      "planning should define order states, merchant roles, dispatch rules, rider assignment, tracking, payments, returns, and reports",
    execution:
      "delivery software should roll out around the core order lifecycle before adding advanced analytics or automation",
    measurement:
      "measure delivery time, failed delivery rate, rider performance, return handling, merchant satisfaction, and customer update clarity",
    risk:
      "the biggest risk is poor status visibility, because teams cannot fix delays they cannot see",
    cms:
      "admin-managed content can support merchant help pages, rider instructions, service zones, policy text, and notification templates",
  },
  Inventory: {
    focus:
      "inventory systems protect cash flow by making product quantities, movements, purchases, and sales easier to trust",
    reader:
      "retailers, SMEs, warehouses, and operators that need fewer stock mistakes and better product visibility",
    planning:
      "planning should map products, variants, stock locations, purchase orders, sales orders, returns, alerts, and reports",
    execution:
      "implementation should begin with accurate stock records, then add movement history, permissions, analytics, and integrations",
    measurement:
      "measure stock accuracy, stockout reduction, order speed, slow-moving items, purchasing decisions, and manual correction volume",
    risk:
      "inventory software fails when the team ignores data discipline, roles, and the real way stock moves through the business",
    cms:
      "admin tools can later manage product data, help content, settings, reporting labels, and operational notices",
  },
  Process: {
    focus:
      "a clear development process keeps clients, designers, developers, and testers aligned through every stage of delivery",
    reader:
      "business owners and project leads who want software progress without confusion, hidden delays, or surprise decisions",
    planning:
      "planning should define the backlog, priorities, sprint rhythm, demo schedule, review responsibility, and release criteria",
    execution:
      "teams should work in visible stages with design review, development, QA, feedback, and release preparation happening regularly",
    measurement:
      "measure sprint completion, feedback speed, defect trends, decision clarity, and how confidently the team can plan the next release",
    risk:
      "process becomes noisy when meetings replace decisions or when feedback arrives too late to guide the build",
    cms:
      "a CMS-ready approach benefits from process too, because editors and developers share a clear content contract before backend work starts",
  },
  "Technical SEO": {
    focus:
      "technical SEO makes a website easier for search engines to crawl, understand, render, and display accurately",
    reader:
      "teams launching static Next.js websites, redesigns, or content-heavy service sites that need a reliable SEO foundation",
    planning:
      "planning should cover metadata, canonical URLs, sitemap entries, robots rules, heading structure, image alt text, and performance",
    execution:
      "implementation should test page output, route structure, schema data, responsive behavior, asset loading, and crawl visibility",
    measurement:
      "measure indexing status, Core Web Vitals, crawl errors, missing metadata, image issues, and organic landing page performance",
    risk:
      "technical SEO suffers when teams only inspect visuals and forget what search engines read in the final HTML",
    cms:
      "the future CMS should protect required SEO fields and prevent publishing pages without clear titles, descriptions, slugs, and images",
  },
  Strategy: {
    focus:
      "a product roadmap keeps digital investment focused on business value instead of disconnected feature requests",
    reader:
      "founders, owners, and managers deciding what to build first, what to delay, and how to prepare for growth",
    planning:
      "planning should connect business goals, user needs, core features, content, backend phases, budget, and launch risk",
    execution:
      "the roadmap should guide design, development, copywriting, testing, analytics, CMS planning, and post-launch improvement",
    measurement:
      "measure launch readiness, feature adoption, customer feedback, operational improvement, and how well the roadmap supports sales goals",
    risk:
      "a roadmap becomes useless when it is too vague, too crowded, or disconnected from real users and business priorities",
    cms:
      "CMS planning belongs on the roadmap so content ownership, publishing, and future improvements are not treated as afterthoughts",
  },
  "Game Development": {
    focus:
      "game and AR/VR planning works when the experience has a clear audience, mechanic, platform, and business purpose",
    reader:
      "brands, educators, startups, and campaign teams considering interactive experiences beyond a standard website or app",
    planning:
      "planning should define the concept, user journey, core mechanic, visual style, devices, performance needs, and success metric",
    execution:
      "production should prototype the experience first, test interaction quality, then refine visuals, content, controls, and deployment",
    measurement:
      "measure engagement time, completion, repeat use, campaign response, educational value, and technical stability",
    risk:
      "immersive ideas fail when the technology becomes the point and the user experience is not enjoyable or useful",
    cms:
      "supporting content such as landing pages, instructions, campaign copy, FAQs, and result pages can still be CMS-managed",
  },
  "Hiring Guide": {
    focus:
      "choosing a software partner is about trust, communication, technical planning, and long-term product responsibility",
    reader:
      "business owners comparing vendors, agencies, freelancers, or internal team options for a serious digital project",
    planning:
      "planning should clarify scope, budget, timeline, communication style, expected deliverables, support needs, and ownership",
    execution:
      "a good partner explains tradeoffs, documents decisions, shares progress, tests carefully, and prepares the client for launch",
    measurement:
      "measure proposal clarity, communication quality, delivery reliability, technical fit, portfolio relevance, and post-launch support",
    risk:
      "the lowest quote can become expensive if the team skips discovery, architecture, testing, or handover",
    cms:
      "ask how the partner will handle CMS fields, SEO ownership, admin roles, and future content updates before the build starts",
  },
  Company: {
    focus:
      "a company blog can introduce the team, explain the website structure, and show how the digital foundation will grow",
    reader:
      "visitors, clients, and partners who want to understand what Redorch offers and how the redesigned website is organized",
    planning:
      "planning should preserve useful legacy routes while improving service pages, case studies, blog articles, and contact paths",
    execution:
      "the first frontend launch should make the site fast, clear, SEO-friendly, and ready for a future CMS backend",
    measurement:
      "measure page speed, route coverage, inquiry quality, content growth, search visibility, and how easily future updates can be made",
    risk:
      "a redesign can feel unfinished if it only changes visuals and does not improve content, structure, or future editing plans",
    cms:
      "the backend phase can later manage posts, pages, services, projects, media, SEO fields, and publishing workflow from one admin area",
  },
};

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function getGeneratedPostImage(post: BlogPost) {
  return `/images/blog/${post.slug}.webp`;
}

function buildLongFormBody(post: BlogPost) {
  const angle = blogAngles[post.category] ?? defaultBlogAngle;
  const keywordPhrase = post.keywords.join(", ");

  return [
    ...post.body,
    `For ${angle.reader}, ${post.title.toLowerCase()} is not a theoretical topic. It affects how people discover the business, how teams handle daily work, and how confidently a product can move from idea to launch. ${angle.focus}. That is why the strongest projects begin with context instead of decoration. A useful plan connects the website, application, content, operations, and future backend needs into one direction that the business can understand.`,
    `${angle.planning}. This planning stage does not need to be slow, but it should be honest. The team should list what is essential for the first release, what can wait, and what information will be needed after launch. When this is written down early, the design becomes clearer, developers make better architecture decisions, and stakeholders can approve work without guessing what the finished product is supposed to do.`,
    `The content also needs structure. A page or article should explain the problem, show why it matters, and guide the reader toward a useful next action. For this topic, keywords such as ${keywordPhrase} should support the article naturally rather than being repeated without purpose. Search engines can read technical signals, but real buyers read for confidence. They want to know whether the team understands their situation and can turn that understanding into a practical solution.`,
    `${angle.execution}. A calm delivery process usually moves from discovery to information architecture, then UI direction, frontend build, content polish, testing, and handover. If the project will later connect to a Node.js and MySQL backend, the frontend should already use consistent fields for title, slug, image, summary, body, metadata, and category. This makes the backend phase more predictable because the design is already speaking the same language as the future content model.`,
    `A business should also decide how the work will be measured. ${angle.measurement}. These signals are more useful than vague opinions because they show whether the digital product is helping the business. For a service website, that might mean better inquiries and clearer navigation. For software, it might mean fewer manual steps and cleaner reporting. For content, it might mean stronger organic visibility and visitors spending more time with helpful articles.`,
    `${angle.risk}. Another common mistake is separating design, content, and development into isolated tasks. A beautiful interface can still fail if the copy is unclear, the route structure is weak, or the admin workflow is ignored. Likewise, technically solid software can feel frustrating if the interface does not match how users think. The best results come from treating experience, content, and engineering as one product system.`,
    `${angle.cms}. This is especially useful for a business that wants to host the frontend first and add a custom backend later. The public website can stay fast and polished while the admin panel grows behind it. Editors can eventually update blog posts, service pages, portfolio items, images, SEO titles, and meta descriptions without changing the frontend code. That path keeps the first launch practical and the long-term platform more maintainable.`,
    `The practical next step is to turn the idea into a short roadmap. Define the audience, choose the most important page or workflow, decide what content is needed, and identify the data that should be editable later. Redorch approaches articles, websites, service pages, and software planning this way because it keeps the work useful. The goal is not only to publish more pages, but to build a digital foundation that can support leads, operations, and future growth.`,
  ];
}

function enrichBlogPost(post: BlogPost): BlogPost {
  const body = buildLongFormBody(post);
  const words = body.reduce((total, paragraph) => total + countWords(paragraph), 0);

  return {
    ...post,
    href: `/blog/${post.slug}/`,
    image: getGeneratedPostImage(post),
    body,
    readingTime: `${Math.max(5, Math.ceil(words / 180))} min read`,
  };
}

const baseBlogPosts: BlogPost[] = [
  {
    slug: "web-application-development-guide-for-growing-businesses",
    title: "Web Application Development Guide for Growing Businesses",
    href: "/web-application-development-guide-for-growing-businesses/",
    date: "May 12, 2026",
    publishedAt: "2026-05-12",
    category: "Web Development",
    image: "/images/web-app.png",
    excerpt:
      "A practical guide to planning a custom web application that supports operations, customers, and long-term business growth.",
    seoTitle: "Web Application Development Guide for Growing Businesses",
    seoDescription:
      "Learn how growing businesses can plan custom web application development with the right features, architecture, UX, and launch roadmap.",
    keywords: ["web application development", "custom web app", "business software"],
    readingTime: "5 min read",
    body: [
      "A good web application is not just a screen with buttons. It is a working system that helps a business serve customers, manage data, and reduce repeated manual work. Before writing code, the team should understand who will use the product, what they need to finish, and where mistakes usually happen in the current workflow.",
      "For most growing companies, the strongest starting point is a simple feature map. Separate must-have workflows from ideas that can wait. A customer portal, admin dashboard, reporting panel, payment flow, or inventory module should each have a clear purpose. This keeps the first release focused and makes the budget easier to control.",
      "The best web applications also leave room for change. Clean frontend structure, secure API planning, role-based access, and CMS-ready content models make future improvements easier. Redorch builds this foundation so a product can launch quickly and still grow with the business.",
    ],
  },
  {
    slug: "why-nextjs-is-a-strong-choice-for-seo-friendly-business-websites",
    title: "Why Next.js Is a Strong Choice for SEO-Friendly Business Websites",
    href: "/why-nextjs-is-a-strong-choice-for-seo-friendly-business-websites/",
    date: "May 5, 2026",
    publishedAt: "2026-05-05",
    category: "SEO",
    image: "/images/website.png",
    excerpt:
      "Next.js gives business websites fast pages, clean routing, metadata control, and a strong base for search visibility.",
    seoTitle: "Why Next.js Is Best for SEO-Friendly Business Websites",
    seoDescription:
      "Discover why Next.js works well for SEO-friendly business websites, static exports, metadata, performance, and scalable content.",
    keywords: ["Next.js SEO", "business website", "static website"],
    readingTime: "4 min read",
    body: [
      "Search engines and users both reward websites that load quickly, explain services clearly, and avoid confusing navigation. Next.js is useful because it supports structured routes, optimized rendering, reusable layouts, and clean metadata for every important page.",
      "A business website needs more than a beautiful hero section. Service pages, case studies, blog posts, contact pages, sitemap entries, and open graph images should all work together. With Next.js, these pieces can be organized as data and components instead of scattered one-off pages.",
      "For cPanel hosting, static export is also a practical advantage. The frontend can run as fast HTML, CSS, and JavaScript while the backend CMS is added later. That gives business owners a ready-to-host website now and a clear upgrade path for content management.",
    ],
  },
  {
    slug: "cms-ready-frontend-structure-before-building-the-backend",
    title: "CMS-Ready Frontend Structure Before Building the Backend",
    href: "/cms-ready-frontend-structure-before-building-the-backend/",
    date: "April 28, 2026",
    publishedAt: "2026-04-28",
    category: "CMS Planning",
    image: "/images/business-suite.png",
    excerpt:
      "Plan pages, services, projects, blogs, and SEO fields early so the future CMS connects without redesigning the website.",
    seoTitle: "CMS-Ready Frontend Structure Before Backend Development",
    seoDescription:
      "Learn how to design a CMS-ready frontend for services, blogs, portfolios, SEO metadata, and future Node.js MySQL integration.",
    keywords: ["CMS ready frontend", "Node.js CMS", "MySQL backend"],
    readingTime: "5 min read",
    body: [
      "Many websites become difficult to manage because the frontend is built before anyone thinks about content ownership. A CMS-ready frontend solves that by treating pages, services, projects, and blog posts as structured content from the beginning.",
      "The important fields should be planned early: title, slug, excerpt, image, body content, SEO title, meta description, publish date, and category. When these fields already exist in the frontend data model, the backend can later replace static data without changing the design.",
      "This approach is especially helpful for a Node.js and MySQL CMS. The frontend stays polished and fast, while the backend becomes responsible for editing content. Redorch uses this structure to keep the first launch simple and the second phase clean.",
    ],
  },
  {
    slug: "business-software-features-that-save-time-every-week",
    title: "Business Software Features That Save Time Every Week",
    href: "/business-software-features-that-save-time-every-week/",
    date: "April 20, 2026",
    publishedAt: "2026-04-20",
    category: "Business Software",
    image: "/images/business-suite.png",
    excerpt:
      "The right dashboard, workflow, reporting, and automation features can remove hours of repeated manual work.",
    seoTitle: "Business Software Features That Save Time Every Week",
    seoDescription:
      "Explore practical business software features including dashboards, workflow automation, reporting, roles, and notifications.",
    keywords: ["business software", "workflow automation", "custom dashboard"],
    readingTime: "5 min read",
    body: [
      "Business software should remove friction from daily work. If a team still copies data between sheets, sends the same status messages repeatedly, or searches through chat for approvals, there is a real opportunity to build a better workflow.",
      "The most useful features are usually simple: role-based dashboards, task status, customer records, order tracking, automated notifications, exportable reports, and permission control. These features save time because they reduce guessing and keep every user focused on the next action.",
      "The goal is not to replace people with software. The goal is to give people a reliable system so they can work with fewer interruptions. Redorch plans business software around that practical reality.",
    ],
  },
  {
    slug: "mobile-app-development-checklist-for-startups",
    title: "Mobile App Development Checklist for Startups",
    href: "/mobile-app-development-checklist-for-startups/",
    date: "April 14, 2026",
    publishedAt: "2026-04-14",
    category: "Mobile Apps",
    image: "/images/mobile-app.png",
    excerpt:
      "A startup-friendly checklist for planning mobile app features, user flows, backend needs, testing, and launch priorities.",
    seoTitle: "Mobile App Development Checklist for Startups",
    seoDescription:
      "Use this mobile app development checklist to plan startup app features, UX, backend APIs, testing, launch, and support.",
    keywords: ["mobile app development", "startup app", "app development checklist"],
    readingTime: "6 min read",
    body: [
      "A startup mobile app should begin with the smallest useful version of the product. That means defining the core user problem, the first action a user must complete, and the business result the app is supposed to create.",
      "Before development starts, prepare a checklist for login, onboarding, profile, core features, notifications, payments, admin needs, analytics, and support. Every item should be marked as required for launch, useful later, or not needed yet.",
      "Testing is just as important as design. A mobile app has to work across devices, screen sizes, network conditions, and real user habits. Redorch helps startups plan the product in a way that protects momentum without turning the first release into an oversized build.",
    ],
  },
  {
    slug: "how-a-good-ui-design-improves-conversion-on-service-websites",
    title: "How a Good UI Design Improves Conversion on Service Websites",
    href: "/how-a-good-ui-design-improves-conversion-on-service-websites/",
    date: "April 7, 2026",
    publishedAt: "2026-04-07",
    category: "UI/UX",
    image: "/images/web-strategy.png",
    excerpt:
      "Clear layout, readable copy, useful CTAs, and trust signals help service websites turn visitors into qualified leads.",
    seoTitle: "How UI Design Improves Conversion on Service Websites",
    seoDescription:
      "Learn how good UI design improves conversion for service websites with better hierarchy, CTA placement, trust, and readability.",
    keywords: ["UI design", "conversion optimization", "service website"],
    readingTime: "4 min read",
    body: [
      "Good UI design helps visitors understand a business quickly. A service website should answer four questions fast: what you do, who you help, why it matters, and what the visitor should do next.",
      "Conversion improves when the layout respects attention. Large headings should explain the offer, supporting copy should remove doubt, and buttons should lead to a clear next step. Visual hierarchy matters because most visitors scan before they read carefully.",
      "Trust signals also carry weight. Case studies, process steps, service details, contact options, and consistent design all make the business feel more credible. Redorch designs websites around this flow instead of relying only on decoration.",
    ],
  },
  {
    slug: "seo-content-structure-for-software-company-websites",
    title: "SEO Content Structure for Software Company Websites",
    href: "/seo-content-structure-for-software-company-websites/",
    date: "March 30, 2026",
    publishedAt: "2026-03-30",
    category: "SEO",
    image: "/images/seo.png",
    excerpt:
      "Software company SEO works better when services, industries, case studies, and blog posts support one another.",
    seoTitle: "SEO Content Structure for Software Company Websites",
    seoDescription:
      "Build a better SEO content structure for software company websites using service pages, case studies, blogs, and internal links.",
    keywords: ["software company SEO", "SEO content structure", "service page SEO"],
    readingTime: "5 min read",
    body: [
      "SEO for a software company should not depend on one generic homepage. Search visibility becomes stronger when each service has a dedicated page, each project has a clear case study, and each blog post supports a real customer question.",
      "A strong content structure usually includes service pages for web apps, mobile apps, business software, marketing strategy, and specialized development. These pages should connect to relevant case studies and blog articles through internal links.",
      "Human-written content matters because buyers can feel the difference between useful guidance and empty keyword stuffing. Redorch structures content around real decisions clients need to make before starting a project.",
    ],
  },
  {
    slug: "portfolio-case-studies-that-build-trust-with-clients",
    title: "Portfolio Case Studies That Build Trust With Clients",
    href: "/portfolio-case-studies-that-build-trust-with-clients/",
    date: "March 24, 2026",
    publishedAt: "2026-03-24",
    category: "Portfolio",
    image: "/images/project-one-company.png",
    excerpt:
      "A useful case study explains the problem, the solution, and the business outcome instead of only showing screenshots.",
    seoTitle: "Portfolio Case Studies That Build Client Trust",
    seoDescription:
      "Learn how software portfolio case studies can build trust by showing challenges, solutions, outcomes, and project context.",
    keywords: ["portfolio case study", "software portfolio", "client trust"],
    readingTime: "4 min read",
    body: [
      "A portfolio should do more than prove that a company can design attractive screens. Serious clients want to understand the problem, the thinking behind the solution, and the result the project created.",
      "A strong case study usually includes the business challenge, users involved, key features, delivery approach, and measurable or practical outcomes. This format helps visitors imagine how the same team might solve their own problem.",
      "Redorch uses case studies as trust-building pages. They support sales, SEO, and decision-making because they show real work in context instead of relying on broad claims.",
    ],
  },
  {
    slug: "nodejs-and-mysql-backend-planning-for-a-custom-cms",
    title: "Node.js and MySQL Backend Planning for a Custom CMS",
    href: "/nodejs-and-mysql-backend-planning-for-a-custom-cms/",
    date: "March 16, 2026",
    publishedAt: "2026-03-16",
    category: "Backend",
    image: "/images/business-suite.png",
    excerpt:
      "A clean CMS backend starts with content models, permissions, media handling, SEO fields, and safe publishing workflows.",
    seoTitle: "Node.js and MySQL Backend Planning for a Custom CMS",
    seoDescription:
      "Plan a custom CMS backend with Node.js and MySQL for pages, blogs, projects, services, media, users, and SEO fields.",
    keywords: ["Node.js CMS", "MySQL CMS", "custom backend"],
    readingTime: "6 min read",
    body: [
      "A custom CMS should be planned around the content team, not only the database. Editors need to update pages, blog posts, services, projects, images, SEO titles, and meta descriptions without touching the frontend code.",
      "Node.js and MySQL are a practical combination for this job. Node.js can handle API routes, authentication, file uploads, and admin workflows, while MySQL keeps structured content predictable and easy to query.",
      "The first backend phase should include content models, roles, media management, draft and publish states, validation, and backup planning. Redorch prepares the frontend first so the backend can connect to a clear content contract.",
    ],
  },
  {
    slug: "how-to-plan-a-website-redesign-without-losing-seo",
    title: "How to Plan a Website Redesign Without Losing SEO",
    href: "/how-to-plan-a-website-redesign-without-losing-seo/",
    date: "March 9, 2026",
    publishedAt: "2026-03-09",
    category: "Website Redesign",
    image: "/images/strategy.png",
    excerpt:
      "A redesign should preserve important slugs, improve metadata, keep internal links healthy, and upgrade the user experience.",
    seoTitle: "How to Plan a Website Redesign Without Losing SEO",
    seoDescription:
      "Plan an SEO-safe website redesign with preserved slugs, redirects, metadata, content mapping, internal links, and performance checks.",
    keywords: ["website redesign SEO", "SEO migration", "redesign checklist"],
    readingTime: "5 min read",
    body: [
      "A website redesign can improve trust and conversion, but it can also hurt search visibility if routes and content are handled carelessly. The safest approach begins with a content and URL audit before any new layout is built.",
      "Important slugs should be preserved whenever possible. If a page must move, redirects should be planned. Metadata, headings, image alt text, internal links, sitemap entries, and page speed all need attention before launch.",
      "Redorch redesigns with both users and search engines in mind. The goal is not only to make the site look modern, but also to keep the useful equity the old site already earned.",
    ],
  },
  {
    slug: "digital-marketing-plan-for-small-business-growth",
    title: "Digital Marketing Plan for Small Business Growth",
    href: "/digital-marketing-plan-for-small-business-growth/",
    date: "March 1, 2026",
    publishedAt: "2026-03-01",
    category: "Marketing",
    image: "/images/mobile-strategy.png",
    excerpt:
      "Small businesses grow online faster when the website, content, campaigns, and follow-up process work together.",
    seoTitle: "Digital Marketing Plan for Small Business Growth",
    seoDescription:
      "Create a digital marketing plan for small business growth with SEO, content, landing pages, campaigns, and conversion tracking.",
    keywords: ["digital marketing plan", "small business growth", "online marketing"],
    readingTime: "5 min read",
    body: [
      "A small business digital marketing plan should be simple enough to execute and strong enough to measure. The website, content, social posts, campaigns, and sales follow-up should all point toward the same business goal.",
      "Start by choosing the core offer, target audience, and conversion action. Then plan landing pages, service content, blog topics, lead capture, and tracking. Without this structure, marketing activity can become busy but not useful.",
      "Redorch helps businesses connect design, SEO, and campaign planning so traffic has a clear path. A beautiful website matters, but the full journey matters more.",
    ],
  },
  {
    slug: "ecommerce-website-features-customers-expect",
    title: "eCommerce Website Features Customers Expect",
    href: "/ecommerce-website-features-customers-expect/",
    date: "February 22, 2026",
    publishedAt: "2026-02-22",
    category: "eCommerce",
    image: "/images/project-artwork.png",
    excerpt:
      "Modern eCommerce websites need fast browsing, clear product pages, secure checkout, search, filters, and order updates.",
    seoTitle: "eCommerce Website Features Customers Expect",
    seoDescription:
      "Explore essential eCommerce website features including product pages, search, filters, checkout, payments, and order tracking.",
    keywords: ["eCommerce website", "online store features", "eCommerce development"],
    readingTime: "5 min read",
    body: [
      "Customers expect online stores to be fast, clear, and trustworthy. If browsing is slow, product details are thin, or checkout feels confusing, buyers often leave before completing an order.",
      "Important eCommerce features include product categories, filters, search, product media, stock status, secure checkout, payment options, order history, delivery updates, and support information. Admin features are just as important for managing products and orders.",
      "A good eCommerce build balances customer experience with operational control. Redorch plans both sides so the store can sell products and also support the team running it.",
    ],
  },
  {
    slug: "delivery-management-software-for-logistics-teams",
    title: "Delivery Management Software for Logistics Teams",
    href: "/delivery-management-software-for-logistics-teams/",
    date: "February 14, 2026",
    publishedAt: "2026-02-14",
    category: "Logistics",
    image: "/images/project-delivery.png",
    excerpt:
      "Delivery teams need order visibility, rider assignment, proof of delivery, customer updates, and reporting in one workflow.",
    seoTitle: "Delivery Management Software for Logistics Teams",
    seoDescription:
      "Learn how delivery management software helps logistics teams manage orders, dispatch, tracking, proof of delivery, and reports.",
    keywords: ["delivery management software", "logistics software", "dispatch system"],
    readingTime: "5 min read",
    body: [
      "Delivery work becomes difficult when orders, riders, merchants, customer calls, returns, and payments live in separate places. Delivery management software brings those moving parts into one operational workflow.",
      "Useful modules include merchant management, warehouse status, rider assignment, dispatch planning, real-time status, proof of delivery, return handling, wallet tracking, and reporting. Each module should reduce confusion for the people handling daily operations.",
      "Redorch plans logistics systems around visibility. When managers can see what is happening, teams can respond faster and customers receive clearer updates.",
    ],
  },
  {
    slug: "inventory-management-system-benefits-for-retail-and-smes",
    title: "Inventory Management System Benefits for Retail and SMEs",
    href: "/inventory-management-system-benefits-for-retail-and-smes/",
    date: "February 7, 2026",
    publishedAt: "2026-02-07",
    category: "Inventory",
    image: "/images/project-inventory.png",
    excerpt:
      "Inventory software helps businesses reduce stockouts, track products, manage orders, and make better purchasing decisions.",
    seoTitle: "Inventory Management System Benefits for Retail and SMEs",
    seoDescription:
      "Discover inventory management system benefits for retail and SMEs including stock control, purchase orders, sales, and reporting.",
    keywords: ["inventory management system", "retail software", "SME software"],
    readingTime: "4 min read",
    body: [
      "Inventory problems quietly cost businesses money. Overstocking ties up cash, stockouts damage customer trust, and manual tracking creates mistakes that are hard to find later.",
      "An inventory management system gives teams a clearer view of product quantities, locations, purchases, sales, returns, and stock movement. Reports help owners understand what to reorder and what is moving slowly.",
      "For SMEs, the best system is not always the most complex one. Redorch focuses on practical workflows that match the business stage and can grow as operations become more demanding.",
    ],
  },
  {
    slug: "how-agile-development-keeps-software-projects-clear",
    title: "How Agile Development Keeps Software Projects Clear",
    href: "/how-agile-development-keeps-software-projects-clear/",
    date: "January 29, 2026",
    publishedAt: "2026-01-29",
    category: "Process",
    image: "/images/strategy.png",
    excerpt:
      "Agile development helps teams review progress, adjust priorities, reduce surprises, and ship useful software in stages.",
    seoTitle: "How Agile Development Keeps Software Projects Clear",
    seoDescription:
      "Understand how agile development improves software project clarity through sprints, demos, backlog planning, and feedback loops.",
    keywords: ["agile development", "software process", "project delivery"],
    readingTime: "4 min read",
    body: [
      "Software projects fail most often when expectations stay hidden for too long. Agile development reduces that risk by making work visible in smaller stages.",
      "A healthy agile flow includes backlog planning, sprint priorities, regular demos, feedback, testing, and release preparation. This does not mean changing direction every day. It means learning early enough to make useful adjustments.",
      "Redorch uses agile practices to keep clients close to the product without overwhelming them with technical noise. The result is a clearer path from idea to launch.",
    ],
  },
  {
    slug: "technical-seo-basics-for-nextjs-static-websites",
    title: "Technical SEO Basics for Next.js Static Websites",
    href: "/technical-seo-basics-for-nextjs-static-websites/",
    date: "January 12, 2026",
    publishedAt: "2026-01-12",
    category: "Technical SEO",
    image: "/images/web-app.png",
    excerpt:
      "Static Next.js websites should include clean URLs, metadata, sitemap, robots.txt, image alt text, and fast page performance.",
    seoTitle: "Technical SEO Basics for Next.js Static Websites",
    seoDescription:
      "Improve technical SEO for Next.js static websites with metadata, sitemap, robots.txt, clean URLs, image alt text, and performance.",
    keywords: ["technical SEO", "Next.js static export", "SEO basics"],
    readingTime: "5 min read",
    body: [
      "Technical SEO gives search engines a clean way to discover, understand, and display a website. For a static Next.js site, the basics can be handled very well before any backend is added.",
      "Important items include page titles, meta descriptions, canonical URLs, open graph data, sitemap.xml, robots.txt, clean slugs, accessible headings, image alt text, and fast loading. These details help both search engines and real users.",
      "Redorch treats SEO as part of the build, not a final decoration. That makes each page easier to index and easier to share across social platforms.",
    ],
  },
  {
    slug: "why-businesses-need-a-clear-digital-product-roadmap",
    title: "Why Businesses Need a Clear Digital Product Roadmap",
    href: "/why-businesses-need-a-clear-digital-product-roadmap/",
    date: "December 28, 2025",
    publishedAt: "2025-12-28",
    category: "Strategy",
    image: "/images/mobile-strategy.png",
    excerpt:
      "A product roadmap keeps design, development, content, and business decisions aligned from first launch to future growth.",
    seoTitle: "Why Businesses Need a Clear Digital Product Roadmap",
    seoDescription:
      "Learn why a digital product roadmap helps businesses plan features, content, development phases, launch, and long-term growth.",
    keywords: ["digital product roadmap", "product strategy", "software planning"],
    readingTime: "5 min read",
    body: [
      "A digital product roadmap helps a business decide what to build now, what to improve next, and what to avoid until the product is ready. Without that clarity, projects can become expensive collections of unrelated features.",
      "The roadmap should include business goals, user needs, core features, content requirements, backend needs, launch priorities, and future phases. It should be clear enough for both technical and non-technical stakeholders.",
      "Redorch uses roadmap planning to keep projects calm and purposeful. A good roadmap protects the first launch while leaving space for meaningful growth.",
    ],
  },
  {
    slug: "game-and-ar-vr-experience-planning-for-brands",
    title: "Game and AR/VR Experience Planning for Brands",
    href: "/game-and-ar-vr-experience-planning-for-brands/",
    date: "December 18, 2025",
    publishedAt: "2025-12-18",
    category: "Game Development",
    image: "/images/game-design.png",
    excerpt:
      "Interactive games, AR, and VR experiences work best when the concept, audience, mechanics, and business goal are clear.",
    seoTitle: "Game and AR/VR Experience Planning for Brands",
    seoDescription:
      "Plan game, AR, and VR experiences for brands with clear concepts, mechanics, user journeys, platforms, and launch goals.",
    keywords: ["game development", "AR VR experience", "brand activation"],
    readingTime: "5 min read",
    body: [
      "Games and AR/VR experiences can help brands educate, entertain, and create memorable product moments. But the experience should begin with a clear reason, not only a technology trend.",
      "Planning should cover the target audience, platform, core mechanic, visual style, content needs, performance requirements, and success metric. A simple interactive concept can be more effective than an oversized experience with no clear journey.",
      "Redorch supports game and immersive experience planning with practical production thinking. The goal is to make the idea enjoyable, technically achievable, and useful for the brand.",
    ],
  },
  {
    slug: "how-to-choose-the-right-software-development-company",
    title: "How to Choose the Right Software Development Company",
    href: "/how-to-choose-the-right-software-development-company/",
    date: "December 8, 2025",
    publishedAt: "2025-12-08",
    category: "Hiring Guide",
    image: "/images/about-team.jpg",
    excerpt:
      "The right software partner understands business goals, communicates clearly, plans architecture, and supports the product after launch.",
    seoTitle: "How to Choose the Right Software Development Company",
    seoDescription:
      "Choose the right software development company by checking communication, process, portfolio, technical planning, and post-launch support.",
    keywords: ["software development company", "hire developers", "software partner"],
    readingTime: "5 min read",
    body: [
      "Choosing a software development company is not only a price decision. The right partner should understand the business goal, ask useful questions, explain tradeoffs, and show a realistic path from planning to launch.",
      "Look for a team that can discuss user experience, frontend quality, backend structure, SEO, security, testing, deployment, and support. A strong portfolio helps, but the conversation around your project is just as important.",
      "Redorch works as a product-minded technology partner. That means the team focuses on outcomes, not just tasks, and keeps the build aligned with real business needs.",
    ],
  },
];

export const blogPosts: BlogPost[] = baseBlogPosts.map(enrichBlogPost);

export const legalPages = {
  "/privacy-policy/": {
    title: "Privacy Policy",
    description:
      "How Redorch Technology handles contact information, project inquiries, analytics, and communication data.",
    sections: [
      {
        title: "Information we collect",
        text: "When you contact Redorch Technology, we may collect your name, email address, phone number, company name, service interest, and project details so we can respond to your inquiry.",
      },
      {
        title: "How we use information",
        text: "We use submitted information to reply to requests, prepare quotations, improve our services, protect the website, and communicate about relevant project needs.",
      },
      {
        title: "Data protection",
        text: "We treat business and project information carefully. Sensitive project discussions may be covered by a non-disclosure agreement when required.",
      },
      {
        title: "Contact",
        text: "For privacy-related questions, contact Redorch Technology at hello@redorch.com.",
      },
    ],
  },
  "/terms-of-service/": {
    title: "Terms of Service",
    description:
      "General website terms for using Redorch Technology's website and contacting the team for services.",
    sections: [
      {
        title: "Website use",
        text: "The information on this website is provided to explain Redorch Technology's services, projects, and business capabilities.",
      },
      {
        title: "Service engagement",
        text: "Project scope, pricing, timeline, deliverables, and support terms are confirmed separately through proposal, agreement, or statement of work.",
      },
      {
        title: "Content accuracy",
        text: "We aim to keep service and project information accurate, but details may be updated as the company grows and launches new work.",
      },
      {
        title: "Contact",
        text: "For service questions or quote requests, contact hello@redorch.com or call (880) 9696176747.",
      },
    ],
  },
};

export const staticRoutes = [
  "/",
  "/about/",
  "/services/",
  "/projects/",
  "/case-studies/",
  "/why-us/",
  "/contact/",
  "/blog/",
  "/marketing-consultant-home/",
  "/privacy-policy/",
  "/terms-of-service/",
];

export const allRoutes = [
  ...staticRoutes,
  ...blogPosts.map((post) => post.href),
  ...services.map((service) => service.href),
  ...projects.map((project) => project.href),
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
