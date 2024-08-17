'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoryCard = ({id,image,slug,title}) => {
  return (
    <Link href={`/search/${slug}`} className='flex flex-col gap-2 items-center bg-purple-50 px-11 py-5 rounded-xl cursor-pointer hover:scale-110 transition-all ease-in-out'>
      <Image src={image} width={2000} height={200} className='w-[45px]' alt={title}/>
      <h2 className='text-primary text-[15px]'>{title}</h2>
    </Link>
  )
}

export default CategoryCard