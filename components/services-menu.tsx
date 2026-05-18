"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Layers3 } from "lucide-react";

import { services } from "@/lib/site-data";

export function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-foreground hover:text-background data-[open=true]:bg-foreground data-[open=true]:text-background"
        data-open={open}
      >
        Services
        <ChevronDown
          className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          role="menu"
          className="fixed left-1/2 top-[68px] z-[9999] w-[min(960px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-background p-3 opacity-100 shadow-[0_28px_90px_rgba(15,23,42,0.22)]"
        >
          <div className="grid items-stretch gap-3 lg:grid-cols-[0.72fr_1.7fr]">
            <div className="h-full rounded-xl border border-border bg-muted/40 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Layers3 className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Services
              </p>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                Build, launch, and scale with Redorch
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Choose a focused delivery track or combine web, mobile, software, and marketing into one product roadmap.
              </p>
              <Link
                role="menuitem"
                href="/services/"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-foreground/90"
              >
                View all services
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-border bg-card px-3 py-3 transition hover:border-primary/45 hover:bg-muted"
                >
                  <span className="text-sm font-semibold text-foreground">{service.title}</span>
                  <span className="mt-1 line-clamp-2 block text-xs leading-5 text-muted-foreground">
                    {service.summary}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
