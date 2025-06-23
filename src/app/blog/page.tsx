import BlogCard from '@/components/blog/BlogCard';
import React from 'react'

async function getBlog(){
    const blogs = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}posts`)
    const data = await blogs.json();
    return data.posts

}

export default  function Blog() {

    const blogs = getBlog();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      <BlogCard blogs={blogs} />
    </div>
  )
}
