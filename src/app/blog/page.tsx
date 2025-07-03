import BlogCard from "@/components/blog/BlogCard";
import React from "react";

async function getBlog() {
  const blogs = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}posts`);
  const data = await blogs.json();
  return data.posts;
}

export default async function Blog() {
  const blogs = await getBlog();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-green-950/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] [background-size:24px_24px] opacity-20 dark:bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.700)_1px,transparent_0)]"></div>
      <div className="container mx-auto mt-20 px-4 py-8">
        <h1 className="mb-6 bg-gradient-to-r from-green-600 via-green-500 to-blue-600 bg-clip-text text-center text-4xl leading-tight font-bold text-transparent md:text-5xl lg:text-6xl">
          Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <BlogCard blogs={blogs} />
        </div>
      </div>
    </section>
  );
}
