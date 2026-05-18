"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  DatabaseZap,
  Layers3,
  MonitorCog,
  Rocket,
  ShieldCheck,
  Target,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type ServiceFeatureItem = {
  title: string;
  text: string;
  index: number;
};

type ServiceFeatureGridProps = {
  serviceTitle: string;
  items: ServiceFeatureItem[];
};

const featureIcons: LucideIcon[] = [
  CheckCircle2,
  Layers3,
  DatabaseZap,
  ShieldCheck,
  Target,
  Rocket,
];

const detailMap: Record<string, string[]> = {
  "AI use-case map": [
    "Identify which tasks should use AI and which should stay manual or human-approved.",
    "Map users, data sources, expected outputs, business rules, and risk points.",
    "Prioritize the first AI feature so the project starts with a useful, testable workflow.",
  ],
  "Automation workflow": [
    "Define triggers, actions, approval steps, notifications, and fallback behavior.",
    "Connect the automation plan with sales, support, reporting, content, or internal operations.",
    "Prepare a workflow that can later be managed from an admin panel.",
  ],
  "Model integration plan": [
    "Choose the right model/API direction based on speed, cost, privacy, and accuracy needs.",
    "Plan prompts, input data, output format, logging, and review controls.",
    "Define testing criteria so AI outputs can be checked before production use.",
  ],
  "Human review controls": [
    "Add approval queues for sensitive AI outputs before they affect customers or operations.",
    "Plan role-based access, logs, editing controls, and escalation paths.",
    "Keep the system useful without removing human judgment from important decisions.",
  ],
  "Requirement document": [
    "Document business goals, user roles, modules, reports, forms, and workflow rules.",
    "Separate first-release requirements from future improvement ideas.",
    "Create a clear build reference for design, development, testing, and client review.",
  ],
  "Information architecture": [
    "Organize pages, dashboards, menus, modules, data entities, and user journeys.",
    "Define how users move from one action to the next without confusion.",
    "Prepare clean content and data structures for future backend development.",
  ],
  "Admin-ready modules": [
    "Plan create, edit, view, delete, approval, status, and reporting screens.",
    "Define roles and permissions for owner, manager, staff, vendor, or customer users.",
    "Keep modules ready for a Node.js and MySQL admin panel later.",
  ],
  "Release roadmap": [
    "Break the project into MVP, launch, improvement, and maintenance phases.",
    "Set priorities around business value, risk, integrations, and user feedback.",
    "Make the next development steps clear before the first version goes live.",
  ],
  "UX flow": [
    "Map visitor and user journeys from entry point to final action.",
    "Plan screens, forms, dashboard states, empty states, errors, and confirmation flows.",
    "Reduce confusion before development starts by reviewing the product flow early.",
  ],
  "Frontend application": [
    "Build responsive pages, app screens, reusable components, and interactive states.",
    "Keep the UI structure ready for API data, CMS content, and future backend integration.",
    "Optimize the frontend for speed, accessibility, and clean handover.",
  ],
  "API integration plan": [
    "Define which data comes from APIs and how forms, users, content, and reports connect.",
    "Plan authentication, permissions, endpoint needs, validation, and error handling.",
    "Prepare frontend data contracts for a Node.js and MySQL backend.",
  ],
  "Technical handover": [
    "Share route structure, component notes, content fields, image usage, and SEO fields.",
    "Document deployment needs and future backend/CMS connection points.",
    "Make it easier for the next developer or backend phase to continue the work.",
  ],
  "Mobile UI/UX": [
    "Design mobile screens around thumb-friendly navigation and real device behavior.",
    "Plan onboarding, login, profile, core actions, notifications, and empty states.",
    "Make the app flow clear before production development starts.",
  ],
  "Clickable prototype": [
    "Create a tappable app flow for review before full development.",
    "Test screen order, button placement, forms, navigation, and user decisions.",
    "Reduce rework by catching UX issues before code-heavy production.",
  ],
  "Production app": [
    "Build the app experience around Android, iOS, or hybrid launch needs.",
    "Connect app screens with API-driven data such as users, orders, content, reports, or settings.",
    "Prepare the product for real users with QA, performance, and maintainability in mind.",
  ],
  "Launch checklist": [
    "Review app screens, device sizes, navigation, forms, permissions, and loading states.",
    "Prepare store-launch notes, QA priorities, release steps, and post-launch support needs.",
    "Plan bug fixes, updates, and next features after the first release.",
  ],
  "SEO content map": [
    "Plan service pages, blog topics, keyword groups, internal links, and metadata.",
    "Connect SEO content with the buyer journey instead of publishing isolated pages.",
    "Create a structure that can later be managed from a CMS.",
  ],
  "Landing page copy": [
    "Write offer-focused sections that explain the problem, value, proof, and next action.",
    "Plan CTA placement, form fields, trust signals, and objection-handling copy.",
    "Make the page easier to scan for visitors coming from search, ads, or social campaigns.",
  ],
  "Conversion plan": [
    "Define the path from visitor attention to inquiry, signup, booking, or purchase.",
    "Improve CTA flow, lead capture, page hierarchy, and follow-up expectations.",
    "Prepare measurable actions for analytics and campaign review.",
  ],
  "Growth recommendations": [
    "Suggest content, SEO, landing page, tracking, and campaign improvements.",
    "Prioritize actions based on impact, effort, business stage, and traffic source.",
    "Create a practical next-step plan instead of a vague marketing list.",
  ],
  "Game concept": [
    "Define the audience, core mechanic, player goal, platform, and success metric.",
    "Shape the experience before investing in art, levels, or complex production.",
    "Keep the idea playable, practical, and connected to the business goal.",
  ],
  "Experience map": [
    "Map the player's first impression, learning curve, actions, rewards, and completion path.",
    "Plan screens, controls, feedback, AR/VR moments, and content needs.",
    "Make the interactive journey clear before prototyping.",
  ],
  "Prototype plan": [
    "Define the smallest playable or interactive version to test first.",
    "Identify technical risks, device needs, art direction, and performance limits.",
    "Use the prototype to validate fun, usability, and feasibility before full production.",
  ],
  "Release support": [
    "Plan QA, iteration, launch steps, content updates, and post-release improvements.",
    "Prepare support needs for web, mobile, event, AR, or VR deployment.",
    "Keep the experience maintainable after the first launch.",
  ],
};

function getDetailPoints(item: ServiceFeatureItem) {
  return (
    detailMap[item.title] ?? [
      item.text,
      "Clarify scope, user needs, content requirements, and technical dependencies.",
      "Prepare the work for launch, review, and future backend or CMS integration.",
    ]
  );
}

export function ServiceFeatureGrid({ serviceTitle, items }: ServiceFeatureGridProps) {
  const [activeItem, setActiveItem] = useState<ServiceFeatureItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveItem(null);
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem]);

  return (
    <>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const FeatureIcon = featureIcons[item.index % featureIcons.length];

          return (
            <div key={item.title} className="service-feature-card group flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary shadow-sm transition duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                  <FeatureIcon className="h-5 w-5 stroke-[1.9]" aria-hidden="true" />
                </div>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-bold text-muted-foreground">
                  0{item.index + 1}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold tracking-normal text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-left text-sm font-semibold text-muted-foreground transition hover:text-primary group-hover:text-primary"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-[1200] flex items-end justify-center p-4 sm:items-center">
          <button
            type="button"
            aria-label="Close detail"
            onClick={() => setActiveItem(null)}
            className="absolute inset-0 bg-slate-950/58 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-background shadow-[0_32px_120px_rgba(15,23,42,0.35)]">
            <div className="flex items-start justify-between gap-4 border-b border-border p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {serviceTitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-normal text-foreground">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground"
              >
                <X className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Close detail</span>
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-5">
              <p className="text-base leading-7 text-muted-foreground">
                {activeItem.text}
              </p>
              <div className="mt-6 grid gap-3">
                {getDetailPoints(activeItem).map((point) => (
                  <div key={point} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-semibold text-foreground">
                  Useful next step
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Share your current idea, workflow, or existing system. Redorch can turn this part into a clear scope for design, development, launch, and future CMS/backend connection.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3 border-t border-border p-5">
              <Button type="button" variant="outline" onClick={() => setActiveItem(null)}>
                Close
              </Button>
              <Button asChild>
                <a href="/contact/">Discuss this</a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
