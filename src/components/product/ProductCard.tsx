"use client";
import { ProductType } from "@/types/productType";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductCard({
  title,
  description,
  price,
  thumbnail,
  category,
}: ProductType) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate original price and savings
  const originalPrice = price * 1.2;
  const savings = originalPrice - price;

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Handle add to cart logic here
      console.log("Added to cart:", { title, price });
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleQuickView = () => {
    // Handle quick view logic here
    console.log("Quick view:", title);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-700">
        {!imageError ? (
          <Image
            width={400}
            height={300}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={thumbnail}
            alt={title}
            onError={() => setImageError(true)}
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sb2r+VdLKSfUucxsQCJAoJg=="
          />
        ) : (
          <div className="flex h-64 w-full items-center justify-center bg-slate-200 dark:bg-slate-600">
            <svg
              className="h-12 w-12 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>

        {/* Sale Badge */}
        {savings > 0 && (
          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
            SALE
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-300">
          {category}
        </div>

        {/* Quick Actions */}
        <div className="absolute right-4 bottom-4 flex translate-y-2 transform space-x-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleToggleLike}
            className={`rounded-full p-2 shadow-lg backdrop-blur-sm transition-colors ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/90 text-slate-700 hover:bg-white dark:bg-slate-800/90 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <svg
              className="h-4 w-4"
              fill={isLiked ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            onClick={handleQuickView}
            className="rounded-full bg-white/90 p-2 text-slate-700 shadow-lg backdrop-blur-sm transition-colors hover:bg-white dark:bg-slate-800/90 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Quick view"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="line-clamp-1 text-lg font-bold text-slate-900 transition-colors group-hover:text-green-600 dark:text-slate-100 dark:group-hover:text-green-400">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div
            className="flex items-center space-x-1"
            role="img"
            aria-label="4.5 out of 5 stars"
          >
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < 4 ? "text-yellow-400" : "text-yellow-300"
                } fill-current`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            (4.5)
          </span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                ${typeof price === "number" ? price.toFixed(2) : price}
              </span>
              {savings > 0 && (
                <span className="text-sm text-slate-500 line-through dark:text-slate-400">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {savings > 0 && (
              <div className="text-xs font-medium text-green-600 dark:text-green-400">
                Save ${savings.toFixed(2)}
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="group/btn flex items-center rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-4 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-green-700 hover:to-green-800 hover:shadow-xl hover:shadow-green-500/25 disabled:cursor-not-allowed disabled:from-green-400 disabled:to-green-400 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
          >
            {isLoading ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="text-sm">Adding...</span>
              </>
            ) : (
              <>
                <svg
                  className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                  />
                </svg>
                <span className="text-sm">Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
