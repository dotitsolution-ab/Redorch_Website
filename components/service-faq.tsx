"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { type ServiceFaq } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ServiceFaqSection({
  title = "Frequently Asked Questions",
  faqs,
}: {
  title?: string;
  faqs: ServiceFaq[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-soft py-24 text-foreground dark:text-white">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-normal sm:text-4xl">
            {title}
          </h2>

          <div className="mt-10 divide-y divide-border dark:divide-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `service-faq-${index}`;

              return (
                <div key={faq.question} className="group">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-bold text-foreground transition hover:text-primary dark:text-white sm:text-lg"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition duration-300",
                        isOpen ? "rotate-180 text-primary" : "text-muted-foreground dark:text-white/78",
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={answerId}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={cn(
                          "max-w-3xl pb-7 text-sm leading-7 text-muted-foreground transition duration-500 dark:text-white/62 sm:text-base",
                          isOpen ? "translate-y-0 blur-0" : "-translate-y-2 blur-[2px]",
                        )}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
