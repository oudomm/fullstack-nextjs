'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { UserDetailType } from '@/types/userDetailType';

export default function UserDetail() {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState<UserDetailType | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, [id]);

  if (!user) {
    return (
      <div className="text-center mt-10 text-gray-500">
        User not found or loading...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-30 bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
      <div className="flex items-center gap-6">
        <Image
          src={`https://i.pravatar.cc/300?img=${id}`}
          alt={`${user.firstName} ${user.lastName}`}
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover border-4 border-purple-200"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
          <p className="text-gray-500 dark:text-gray-400">{user.phone}</p>
          <p className="text-gray-500 dark:text-gray-400 capitalize">
            {user.gender}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2 text-purple-700">Company</h3>
        <p className="text-gray-700 dark:text-gray-200">{user.company?.name}</p>
        <p className="text-gray-500 dark:text-gray-400">
          {user.company?.title}
        </p>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2 text-purple-700">Address</h3>
        <p className="text-gray-700 dark:text-gray-200">
          {user.address?.address}, {user.address?.city}, {user.address?.state}
        </p>
      </div>
    </div>
  );
}
