import BlogCard from '@/components/blog/BlogCard';
import React from 'react';

async function getBlog() {
  const blogs = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}posts`);
  const data = await blogs.json();
  return data.posts;
}

export default async function Blog() {
  const blogs = await getBlog();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <BlogCard blogs={blogs} />
      </div>
    </div>
  );
}
