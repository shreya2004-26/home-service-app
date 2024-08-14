import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const BusinessCard = () => {
  return (
    <div className='flex flex-col gap-1 w-[330px] h-[390p] border shadow-md rounded-xl cursor-pointer hover:scale-105 mb-10'>
      <Image src = '/cleaning-lady.jpg' width={2000} height={200} className='md:w-[350px] rounded-xl'/>
      <div className='flex flex-col gap-[6px] p-5'>
        <h2 className='bg-purple-200 w-fit p-1 px-2 rounded-full text-xs text-primary'>Cleaning</h2>
        <h2 className='text-lg font-bold'>House Cleaning</h2>
        <h2 className='text-primary text-sm'>Jenny Wilson</h2>
        <h2 className='text-sm text-gray-500'>255 Grand Park Ave, New York</h2>
        <Button className='w-fit mt-3'>Book Now</Button>
      </div>
    </div>
  )
}

export default BusinessCard