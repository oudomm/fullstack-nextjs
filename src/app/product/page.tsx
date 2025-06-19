import ProductCard from '@/components/product/ProductCard';
import React from 'react'
// import Link from 'next/link';
import { ProductType } from '@/types/productType';

export default async function page() {
  const BASE_URL = "https://dummyjson.com/products"
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  const products: ProductType[] = data.products;
  console.log(products);

  return (
    <section className='w-[90%] mx-auto my-10'>
      <h2 className='font-bold text-[24px] text-blue-500 uppercase'>Product Page</h2>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              thumbnail={product.thumbnail}
              category={product.category}
            />
          ))
        }
      </div>
    </section>
  )
}
