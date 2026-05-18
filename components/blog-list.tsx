"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type BlogPost } from "@/lib/site-data";

const PAGE_SIZE = 6;
type BlogListPost = Omit<BlogPost, "body">;

export function BlogList({ posts }: { posts: BlogListPost[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((count) => Math.min(count + PAGE_SIZE, posts.length));
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore, posts.length, visibleCount]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div ref={sentinelRef} className="mt-12 flex min-h-16 items-center justify-center">
        {hasMore ? (
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-muted-foreground shadow-sm">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
            Loading more articles
          </div>
        ) : (
          <div className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-muted-foreground shadow-sm">
            All articles loaded
          </div>
        )}
      </div>
    </>
  );
}

function BlogCard({ post }: { post: BlogListPost }) {
  return (
    <Card className="premium-card group flex h-full flex-col overflow-hidden border-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
      <Link href={post.href} className="relative block aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
        <Badge className="absolute left-4 top-4 border-white/20 bg-white/92 text-slate-950 hover:bg-white">
          {post.category}
        </Badge>
      </Link>
      <CardHeader className="flex-1">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <time dateTime={post.publishedAt}>{post.date}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
        <CardTitle className="mt-4 leading-tight">
          <Link href={post.href} className="hover:text-primary">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="leading-6">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button asChild variant="outline" className="w-full">
          <Link href={post.href}>
            Read Article
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
