'use client'
import CardUser from '@/components/card-user/CardUser';
import { UserType } from '@/types/userType';
import React, { useEffect, useState } from 'react'

export default function User() {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}users`)
        .then(response => response.json())
        .then(data => setUsers(data.users))
        .catch(error => console.error('Error fetching users:', error));
    })

  return (
    <section className='w-[90%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
            users.map((user) => (
                <CardUser
                key={user.id}
                id={user.id}
                firstName={user.firstName}  
                lastName={user.lastName}
                email={user.email}
                image={user.image}
                />
            ))
        }
    </section>
  )
}
