import React from 'react'

export default async function page() {
await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a delay
  return (
    <div>
      Product Page
    </div>
  )
}
