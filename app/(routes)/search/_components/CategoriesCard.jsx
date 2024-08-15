import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const CategoriesCard = () => {
  return (
    <div className='flex flex-col gap-1 w-[250px] h-[380px] border shadow-md rounded-xl cursor-pointer hover:scale-105 mb-10 transition-all ease-in-out '>
      <Image src = '/cleaning-lady.jpg' alt='img1'width={2000} height={200} className='md:w-[350px] rounded-xl'/>
      <div className='flex flex-col gap-[6px] p-5'>
        <h2 className='bg-purple-200 w-fit p-1 px-2 rounded-full text-xs text-primary'>Cleaning</h2>
        <h2 className='text-lg font-bold'>House Cleaning</h2>
        <h2 className='text-primary text-sm'>Jenny Wilson</h2>
        <h2 className='text-sm text-gray-500'>255 Grand Park Ave, New York</h2>
        <Button className='w-fit mt-3 rounded-md'>Book Now</Button>
      </div>
    </div>
  )
}

export default CategoriesCard