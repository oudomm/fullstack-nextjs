'use client';

import { BlogType } from '@/types/blogtType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BlogCard({ blogs }: { blogs: BlogType[] }) {
  return (
    <>
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <div
            key={blog.id}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                className="object-cover"
                fill
                unoptimized
                src="https://images.unsplash.com/photo-1624188327913-e0c59aaaa3ae?auto=format&fit=crop&w=800&q=80"
                alt={blog.title}
              />
            </div>

            <div className="flex-1 flex flex-col p-5">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold rounded-full px-3 py-1 mb-2 w-fit">
                Article
              </span>

              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-purple-700 transition-colors">
                {blog.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {blog.body}
              </p>
              <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <Image
                  className="w-10 h-10 object-cover rounded-full"
                  width={40}
                  height={40}
                  unoptimized
                  src="https://images.unsplash.com/photo-1624188327913-e0c59aaaa3ae?auto=format&fit=facearea&w=128&q=80"
                  alt="Author"
                />
                <div className="ml-3">
                  <div className="text-sm font-semibold text-gray-800 dark:text-white">
                    Robert Chunga
                  </div>
                  <div className="text-xs text-gray-400">
                    Aug 15, 2021 · 16 min read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
