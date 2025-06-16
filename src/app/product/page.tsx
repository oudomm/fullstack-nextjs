import ProductCard from '@/components/product/ProductCard';
import React from 'react'
import { products } from '../data/product';
import Link from 'next/link';

export default async function page() {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
  return (
    <section className='w-[90%] mx-auto my-10'>
      <h2 className='font-bold text-[24px] text-blue-500 uppercase'>Product Page</h2>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
        {
          products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                category={product.category}
              />
            </Link>
          ))
        }
      </div>
    </section>
  )
}
