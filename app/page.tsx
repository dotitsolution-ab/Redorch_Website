import { generateRouteMetadata, RoutePage } from "@/app/route-page";

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return generateRouteMetadata();
}

export default function Page() {
  return <RoutePage />;
}
