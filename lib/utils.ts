import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pathFromSlug(slug?: string[]) {
  if (!slug || slug.length === 0) return "/";
  return `/${slug.join("/")}/`;
}
