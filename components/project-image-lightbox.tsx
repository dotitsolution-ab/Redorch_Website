"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

type ProjectImageLightboxProps = {
  image: string;
  title: string;
};

export function ProjectImageLightbox({ image, title }: ProjectImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={`Open ${title} project screenshot`}
        className="group mt-5 block w-full overflow-hidden rounded-lg border border-border bg-slate-100 p-2 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-slate-950"
        onClick={() => setOpen(true)}
      >
        <span className="relative block aspect-[16/10] overflow-hidden rounded-md bg-white dark:bg-slate-900">
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-contain transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/78 text-white shadow-lg backdrop-blur">
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
          </span>
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/88 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} project screenshot preview`}
          onClick={() => setOpen(false)}
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col gap-4">
            <div className="flex items-center justify-between gap-4 text-white">
              <h2 className="text-base font-semibold sm:text-lg">{title}</h2>
              <button
                type="button"
                aria-label="Close project screenshot preview"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpen(false);
                }}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div
              className="relative min-h-0 flex-1 overflow-hidden rounded-lg border border-white/12 bg-white shadow-2xl dark:bg-slate-950"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={image}
                alt={`${title} project screenshot enlarged`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
