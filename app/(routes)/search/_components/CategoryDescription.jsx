import Image from 'next/image'
import React from 'react'

const CategoryDescription = () => {
  return (
    <div className='flex gap-2 border p-3 items-center rounded-xl hover:border-primary hover:bg-purple-50'>
        <Image src='/cleaning.png' width={2000} height={200} className='w-[35px]'/>
        <h2>Cleaning</h2>
    </div>
  )
}

export default CategoryDescription