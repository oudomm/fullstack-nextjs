import { ProductType } from "@/types/productType";
import Image from "next/image";
import React from "react";

async function getProduct(id: string) {
  const res = await fetch(`${process.env.BASE_URL_API}products/${id}`);
  const product: ProductType = await res.json();
  return product;
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-6xl">🔍</div>
          <p className="text-gray-600 dark:text-gray-400">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-gray-800">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={600}
                height={600}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Category Badge */}
            <div className="inline-flex">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium tracking-wider text-gray-700 uppercase dark:bg-gray-800 dark:text-gray-300">
                {product.category}
              </span>
            </div>

            {/* Title and Price */}
            <div className="space-y-2">
              <h1 className="text-3xl leading-tight font-light text-gray-900 lg:text-4xl dark:text-white">
                {product.title}
              </h1>
              <div className="text-2xl font-medium text-gray-900 dark:text-white">
                ${product.price}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium tracking-wide text-gray-900 uppercase dark:text-white">
                Size
              </h3>
              <div className="flex gap-3">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <label key={size} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={size.toLowerCase()}
                      className="peer sr-only"
                    />
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 text-sm font-medium text-gray-700 transition-colors peer-checked:border-black peer-checked:text-black hover:border-gray-400 dark:border-gray-700 dark:text-gray-300 dark:peer-checked:border-white dark:peer-checked:text-white dark:hover:border-gray-500">
                      {size}
                    </div>
                  </label>
                ))}
              </div>
              <button className="text-sm text-gray-500 underline underline-offset-4 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                Size Guide
              </button>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                In Stock
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              <button
                type="button"
                className="w-full rounded-lg bg-black px-8 py-4 font-medium text-white transition-all duration-200 hover:bg-gray-800 active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-gray-100"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="w-full rounded-lg border border-gray-200 px-8 py-4 font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 active:scale-[0.98] dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              >
                Buy Now
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
              <div className="grid grid-cols-1 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
