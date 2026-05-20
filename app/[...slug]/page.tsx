import { generateRouteMetadata, RoutePage } from "@/app/route-page";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return generateRouteMetadata(slug);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <RoutePage slug={slug} />;
}
