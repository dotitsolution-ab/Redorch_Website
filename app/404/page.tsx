import type { Metadata } from "next";

import { NotFoundContent } from "@/components/not-found-content";

export const metadata: Metadata = {
  title: "404 Page Not Found",
  description: "The requested Redorch Technology page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page404() {
  return <NotFoundContent />;
}
