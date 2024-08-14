import Image from 'next/image'
import React from 'react'

const CategoryCard = () => {
  return (
    <div className='flex flex-col gap-2 items-center bg-purple-50 px-11 py-5 rounded-xl'>
      <Image src='/cleaning.png' width={2000} height={200} className='w-[45px]'/>
      <h2 className='text-primary text-[15px]'>Cleaning</h2>
    </div>
  )
}

export default CategoryCard