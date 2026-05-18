"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ServicesMenu } from "@/components/services-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] px-3 py-3">
      <div
        className={cn(
          "mx-auto flex w-full items-center justify-between gap-4 rounded-full border border-border bg-background/96 px-3 backdrop-blur-xl transition-all duration-300",
          scrolled
            ? "h-12 max-w-4xl shadow-[0_18px_65px_rgba(15,23,42,0.18)]"
            : "h-14 max-w-6xl shadow-[0_14px_45px_rgba(15,23,42,0.10)]",
        )}
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Redorch Technology home">
          <Image
            src="/images/logo.png"
            alt="Redorch Technology"
            width={214}
            height={40}
            priority
            className={cn(
              "w-auto transition-all duration-300 dark:brightness-0 dark:invert",
              scrolled ? "h-7" : "h-8",
            )}
          />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            item.href === "/services/" ? (
              <ServicesMenu key={item.href} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-foreground hover:text-background"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full">
            <Link href="/contact/">
              Get a Free Quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[1001] lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMobileMenu}
          className={cn(
            "absolute inset-0 bg-slate-950/48 backdrop-blur-[2px] transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-dvh w-[min(88vw,390px)] flex-col border-l border-border bg-background shadow-[0_28px_90px_rgba(15,23,42,0.32)] transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
            <Link href="/" onClick={closeMobileMenu} aria-label="Redorch Technology home">
              <Image
                src="/images/logo.png"
                alt="Redorch Technology"
                width={190}
                height={36}
                className="h-8 w-auto dark:brightness-0 dark:invert"
              />
            </Link>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm"
            >
              <X className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile navigation">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-border bg-card p-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Redorch
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  Digital product menu
                </p>
              </div>
              <ThemeToggle />
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                item.href === "/services/" ? (
                  <div key={item.href} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((value) => !value)}
                    aria-expanded={mobileServicesOpen}
                    className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-foreground"
                  >
                    Services
                    <ChevronDown
                      className={cn("h-4 w-4 transition duration-300", mobileServicesOpen ? "rotate-180" : "")}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                      mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-1 border-t border-border p-2">
                        <Link
                          href="/services/"
                          onClick={closeMobileMenu}
                          className="rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-foreground hover:text-background"
                        >
                          All Services
                        </Link>
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeMobileMenu}
                            className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-foreground hover:text-background"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-2xl border border-transparent px-4 py-4 text-sm font-semibold text-foreground transition hover:border-border hover:bg-card"
                >
                  {item.label}
                </Link>
              )
            ))}
            </div>
          </nav>

          <div className="border-t border-border p-4">
            <Button asChild className="w-full rounded-full">
              <Link href="/contact/" onClick={closeMobileMenu}>
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </header>
  );
}
