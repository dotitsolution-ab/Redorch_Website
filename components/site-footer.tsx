import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { navItems, services, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(248,96,17,0.13),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(45,212,191,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-55" />

      <div className="container relative z-10 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.72fr_1.35fr_0.9fr]">
          <div>
            <Link href="/" aria-label="Redorch Technology home" className="inline-flex">
              <Image
                src="/images/logo.png"
                alt="Redorch Technology"
                width={214}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["CMS ready", "SEO mapped", "Next.js frontend"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-sky-200/80">
              Company
            </h2>
            <nav className="mt-5 grid gap-3 text-sm font-medium text-slate-300">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-sky-200/80">
              Services
            </h2>
            <nav className="mt-5 grid gap-3 text-sm font-medium text-slate-300 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="leading-5 transition hover:translate-x-1 hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-sky-200/80">
              Contact
            </h2>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <a
                href={`mailto:${site.email}`}
                className="group rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-primary/50 hover:bg-white/[0.07]"
              >
                <span className="flex items-center gap-3 font-semibold text-white">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  Email
                </span>
                <span className="mt-2 block break-all text-slate-300 group-hover:text-white">
                  {site.email}
                </span>
              </a>
              <span className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <span className="flex items-center gap-3 font-semibold text-white">
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  Location
                </span>
                <span className="mt-2 block text-slate-300">{site.address}</span>
              </span>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Redorch Technology. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy/" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
