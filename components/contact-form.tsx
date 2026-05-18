"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ServiceOption = {
  slug: string;
  title: string;
};

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: "Sending your message..." }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm({ services }: { services: ServiceOption[] }) {
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  const isLoading = submitState.status === "loading";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState({ status: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName: String(formData.get("firstName") || ""),
          lastName: String(formData.get("lastName") || ""),
          email: String(formData.get("email") || ""),
          phone: String(formData.get("phone") || ""),
          company: String(formData.get("company") || ""),
          service: String(formData.get("service") || ""),
          message: String(formData.get("message") || ""),
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "Message could not be sent.");
      }

      form.reset();
      setSubmitState({
        status: "success",
        message: result?.message || "Thank you. Your message has been sent.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="premium-card rounded-lg border border-white/80 p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          First Name
          <Input name="firstName" placeholder="First name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Last Name
          <Input name="lastName" placeholder="Last name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Email
          <Input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Phone Number
          <Input name="phone" placeholder="+880..." />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground sm:col-span-2">
          Company / Website
          <Input name="company" placeholder="Company name or website URL" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground sm:col-span-2">
          Service Needed
          <select
            name="service"
            className="h-11 rounded-lg border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-foreground sm:col-span-2">
          Your Challenge
          <Textarea
            name="message"
            placeholder="Tell us about the product, website, or workflow you want to build."
            required
          />
        </label>
      </div>

      {submitState.message ? (
        <p
          className={`mt-5 rounded-lg border px-4 py-3 text-sm font-medium ${
            submitState.status === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
              : submitState.status === "error"
                ? "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
                : "border-border bg-background text-muted-foreground"
          }`}
          aria-live="polite"
        >
          {submitState.message}
        </p>
      ) : null}

      <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
