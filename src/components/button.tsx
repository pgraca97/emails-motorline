import React from 'react'
import Link from 'next/link'

export const Button = () => {
  return (
    <Link href="/">
      <button className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white rounded-sm">
        Back
      </button>
    </Link>
  )
}
