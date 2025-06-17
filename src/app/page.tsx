'use client';

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1) }
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
        Increasement
      </button>
      <p className="text-lg mt-4">Count: {count}</p>
    </>
  );
}
