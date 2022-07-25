import React from 'react'
import Image from 'next/image';
function HeroSection() {
  return (
    <div className='flex justify-center items-center flex-col pt-60 text-center font-bold lg:text-9xl min-h-screen text-6xl space-y-2 bg-hero-pattern bg-cover bg-center'>
        <h1 className='mb-10 text-white font-bold drop-shadow-lg shadow-green'>
            COVID-19 DATA
        </h1>
        <button className='max-w-lg min-h-100 px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50'>
            Show more
        </button>
    </div>
  )
}

export default HeroSection