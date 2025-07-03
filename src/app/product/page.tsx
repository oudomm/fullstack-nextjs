import ProductCard from "@/components/product/ProductCard";
import React from "react";
import { ProductType } from "@/types/productType";
import Link from "next/link";

export default async function ProductsPage() {
  const res = await fetch(`${process.env.BASE_URL_API}products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  const products: ProductType[] = data.products;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/30 py-16 lg:py-24 dark:from-slate-950 dark:via-slate-900 dark:to-green-950/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] [background-size:24px_24px] opacity-20 dark:bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.700)_1px,transparent_0)]"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 dark:border-green-800 dark:bg-green-950/50">
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                🛍️ Our Products
              </span>
            </div>

            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-slate-300">
                Discover Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-purple-600 bg-clip-text text-transparent">
                Premium Collection
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl dark:text-slate-300">
              Explore our carefully curated selection of high-quality products
              designed to meet your needs and exceed your expectations.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8 dark:border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 lg:text-3xl dark:text-slate-100">
                  {products.length}+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Products
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 lg:text-3xl dark:text-slate-100">
                  24/7
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Support
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900 lg:text-3xl dark:text-slate-100">
                  Fast
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-16 lg:py-24 dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filter/Sort Bar */}
          <div className="mb-12 flex flex-col items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 md:flex-row dark:border-slate-700 dark:bg-slate-800/50">
            <div className="mb-4 flex items-center space-x-4 md:mb-0">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Showing {products.length} products
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <select className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 focus:ring-2 focus:ring-green-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>

              <div className="flex items-center space-x-2 rounded-xl border border-slate-300 bg-white p-1 dark:border-slate-600 dark:bg-slate-800">
                <button className="rounded-lg bg-green-100 p-2 text-green-600 dark:bg-green-900 dark:text-green-400">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button className="rounded-lg p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group block transform transition-all duration-300 hover:-translate-y-2"
              >
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  thumbnail={product.thumbnail}
                  category={product.category}
                />
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 text-center">
            <button className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-green-700 hover:to-green-800 hover:shadow-xl hover:shadow-green-500/25">
              <span>Load More Products</span>
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
