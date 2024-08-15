'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CategoryCard = () => {

  return (
    <Link href={`/search/1`} className='flex flex-col gap-2 items-center bg-purple-50 px-11 py-5 rounded-xl cursor-pointer hover:scale-110 transition-all ease-in-out'>
      <Image src='/cleaning.png' width={2000} height={200} className='w-[45px]'/>
      <h2 className='text-primary text-[15px]'>Cleaning</h2>
    </Link>
  )
}

export default CategoryCard