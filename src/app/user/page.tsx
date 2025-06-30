'use client';
import CardUser from '@/components/card-user/CardUser';
import { UserType } from '@/types/userType';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function User() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [users, setUsers] = useState<UserType[]>([]);
  // Get search term from URL query param, fallback to empty string
  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}users`)
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update the URL query param when input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-[90%] mx-auto mt-10">
      <input
        type="text"
        placeholder="Search users..."
        className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  );
}
