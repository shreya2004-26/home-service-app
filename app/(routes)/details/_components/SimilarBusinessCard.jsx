import Image from 'next/image'
import React from 'react'

const SimilarBusinessCard = () => {
  return (
    <div className='flex gap-3 hover:border hover:border-primary p-3 rounded-lg '>
        <Image src='/cleaning-lady.jpg' width={2000} height={200} className='w-[90px] h-[90px] rounded-md'/>
        <div className='flex flex-col'>
            <h2 className='text-[16px] font-extrabold'>House Cleaning</h2>
            <h2 className='text-[14px] text-primary'>Jenny Wilson</h2>
            <h2 className='text-[16px] text-gray-500'>255 Grand Park Ave, New York</h2>
        </div>
    </div>
  )
}

export default SimilarBusinessCard