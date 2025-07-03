"use client";
import CardUser from "@/components/card-user/CardUser";
import { UserType } from "@/types/userType";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function User() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [users, setUsers] = useState<UserType[]>([]);
  // Get search term from URL query param, fallback to empty string
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}users`)
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Update the URL query param when input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-green-950/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.300)_1px,transparent_0)] [background-size:24px_24px] opacity-20 dark:bg-[radial-gradient(circle_at_1px_1px,theme(colors.slate.700)_1px,transparent_0)]"></div>
      <div className="mx-auto mt-28 w-[90%]">
        <input
          type="text"
          placeholder="Search users..."
          className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredUsers.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No users found.
            </div>
          ) : (
            filteredUsers.map((user) => (
              <CardUser
                key={user.id}
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
                image={user.image}
                company={user.company}
              />
            ))
          )}
        </section>
      </div>
    </section>
  );
}
