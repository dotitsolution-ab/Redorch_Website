import Link from "next/link";
import { ArrowUpRight, FileQuestion, Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NotFoundContent() {
  return (
    <section className="spectrum-grid relative min-h-[calc(100vh-80px)] overflow-hidden bg-background px-4 py-28 text-foreground sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            <FileQuestion className="h-4 w-4" aria-hidden="true" />
            Error 404
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-normal sm:text-7xl">
            This page went off the roadmap.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
            The route you requested is not available, but Redorch is still ready
            with services, projects, and a quote path for your next launch.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/">
                <Home className="h-4 w-4" aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/services/">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                View Services
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-border bg-card/90 p-6 shadow-soft backdrop-blur-xl">
          <div className="absolute inset-x-6 top-0 h-px bg-primary/70" />

          <div className="flex items-center justify-between gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background">
              <Search className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
              Page not found
            </span>
          </div>

          <div className="mt-8 text-[clamp(5rem,16vw,10rem)] font-black leading-none tracking-normal text-foreground">
            404
          </div>

          <div className="mt-8 grid gap-3">
            {[
              ["01", "Check the URL", "Make sure the page slug is correct."],
              ["02", "Explore services", "Find the right Redorch delivery track."],
              ["03", "Start a quote", "Send your project brief from the contact page."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-border bg-background/70 p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-xs font-bold text-background">
                  {number}
                </span>
                <div>
                  <h2 className="text-sm font-bold">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Home", "/"],
              ["Projects", "/projects/"],
              ["Contact", "/contact/"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg border border-border bg-muted px-4 py-3 text-center text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-background"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
