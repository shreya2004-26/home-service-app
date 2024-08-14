import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col items-center mt-16 gap-3'>
      <h1 className='text-center text-[46px] font-bold'>Find Home <span className='text-primary'>Service/Repair </span>
      <p>Near You</p></h1>
      
      <h2 className='text-xl text-gray-400 '>Explore Best Home Service & Repair near you </h2>
      <div className='flex gap-4 items-center'>
      <Input className='rounded-full w-[350px] mt-3'/>
      <SearchIcon className='bg-primary text-white px-2 py-4 w-14 h-12 rounded-[50%] mt-4' />
      </div>
    </div>
    </>
  )
}

export default Hero