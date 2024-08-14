import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-5 border-b-[0px] px-4 shadow-sm'>
      <div className='flex gap-8 items-center'>
        <Image src='/logo.svg' alt='logo' width={2000} height={200} className='w-[180px]'/>
        <h2 className='mt-1 hover:text-primary hover:scale-105 text-gray-600'>Bookings</h2>
      </div>
      <Button>Login/Sign-in</Button>
      
    </div>
  )
}

export default Header