import { ProductType } from '@/types/productType';
import Image from 'next/image';
import React from 'react';

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-600 dark:text-gray-400">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={600}
                height={600}
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Category Badge */}
            <div className="inline-flex">
              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            {/* Title and Price */}
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white leading-tight">
                {product.title}
              </h1>
              <div className="text-2xl font-medium text-gray-900 dark:text-white">
                ${product.price}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wide">
                Size
              </h3>
              <div className="flex gap-3">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <label key={size} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={size.toLowerCase()}
                      className="sr-only peer"
                    />
                    <div className="w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 peer-checked:border-black dark:peer-checked:border-white peer-checked:text-black dark:peer-checked:text-white transition-colors hover:border-gray-400 dark:hover:border-gray-500">
                      {size}
                    </div>
                  </label>
                ))}
              </div>
              <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-4 transition-colors">
                Size Guide
              </button>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                In Stock
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              <button
                type="button"
                className="w-full bg-black dark:bg-white text-white dark:text-black py-4 px-8 rounded-lg font-medium transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-100 active:scale-[0.98]"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="w-full border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white py-4 px-8 rounded-lg font-medium transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-[0.98]"
              >
                Buy Now
              </button>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
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
                    className="w-5 h-5"
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
