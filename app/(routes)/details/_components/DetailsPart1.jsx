import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, Upload, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DetailsPart1 = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-6 items-center'>
            <Image src='/cleaning-lady.jpg' width='150' height='200' className='h-[150px] rounded-full object-cover'/>
            <div className='flex flex-col gap-4'>
                <h2 className='text-primary bg-purple-100 p-2 w-fit rounded-full text-[16px]'>Cleaning</h2>
                <h2 className='text-4xl font-extrabold '>House Cleaning</h2>
                <h2 className=' flex gap-2 text-gray-500 text-lg'><MapPin/> 255 Grand Park Ave, New York</h2>
                <h2 className='flex gap-2 text-gray-500 text-lg'><Mail/> accounts@tubeguruji.com</h2>
            </div>
        </div>
        <div className='flex flex-col gap-4 items-end'>
            <Button><Upload/></Button>
            <h2 className='flex gap-2 text-primary text-lg'><User/> Jenny Wilson</h2>
            <h2 className=' flex gap-2 text-xl text-gray-500'><Clock/> Available 8:00 AM to 10:00 PM </h2>
        </div>
    </div>
  )
}

export default DetailsPart1