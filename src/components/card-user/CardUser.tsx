import { UserType } from "@/types/userType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardUser({
  id,
  firstName,
  lastName,
  email,
  company: { title },
}: UserType) {
  return (
    <Link
      href={`/user/${id}`}
      key={id}
      className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-2xl transition-all duration-300 hover:shadow-green-500/50 dark:bg-gray-800 dark:hover:shadow-green-900/50"
    >
      <div className="relative h-32 bg-gradient-to-r from-green-600 to-green-700">
        <Image
          src={`https://i.pravatar.cc/300?img=${id}`}
          alt={`${firstName} ${lastName}`}
          width={300}
          height={300}
          unoptimized
          className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 transform rounded-full border-4 border-white transition-transform duration-300 hover:scale-105 dark:border-gray-800"
        />
      </div>
      <div className="px-6 pt-16 pb-6 text-center">
        <h1 className="mb-1 text-2xl font-bold text-gray-800 dark:text-white">
          {firstName} {lastName}
        </h1>
        <p className="mb-4 font-semibold text-green-600 dark:text-green-400">
          {title}
        </p>
        <p className="mb-4 text-sm font-semibold text-green-600 dark:text-green-400">
          {email}
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Passionate about creating user-friendly web applications and solving
          complex problems.
        </p>

        <div className="flex justify-center space-x-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 transition-colors duration-300 hover:bg-green-800 hover:text-white dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-700">
            JavaScript
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 transition-colors duration-300 hover:bg-green-800 hover:text-white dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-700">
            React
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 transition-colors duration-300 hover:bg-green-800 hover:text-white dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-700">
            Node.js
          </span>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4 dark:bg-gray-700">
        <button className="w-full rounded-lg bg-green-800 py-2 font-semibold text-white transition-colors duration-300 hover:bg-green-900 focus:ring-2 focus:ring-green-800 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800">
          Connect
        </button>
      </div>
    </Link>
  );
}
