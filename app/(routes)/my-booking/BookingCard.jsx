import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BookingCard = () => {
  return (
    <div className=' flex gap-5 p-4 mt-8 border rounded-lg shadow-sm'>
        <Image src='/cleaning-lady.jpg' width={2000} height={200} className='w-[130px] rounded-md'/>
        <div className='flex flex-col gap-2'>
        <h2 className='font-bold'>Washing Cloths</h2>
        <h2 className='flex gap-2 text-primary text-[16px]'><User className='text-primary'/> Emma Potter</h2>
        <h2 className='flex gap-2 text-gray-500 text-[16px]'><MapPin className='text-primary'/>525 N Tyron Street, New York</h2>
        <h2 className='text-gray-500 flex gap-2 text-[16px]'><Calendar className='text-primary'/>Service on :  <span className='text-black'>13-Aug-2024</span></h2>
        <h2 className='text-gray-500 flex gap-2 text-[16px]'><Clock className='text-primary'/>Service on :  <span className='text-black text-[16px]'>10:30 AM</span></h2>
        </div>
    </div>
  )
}

export default BookingCard