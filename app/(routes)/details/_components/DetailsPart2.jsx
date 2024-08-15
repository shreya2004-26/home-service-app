import { Button } from '@/components/ui/button'
import { NotebookIcon, NotebookPen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import SimilarBusinessCard from './SimilarBusinessCard'
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Calender from './Calender'
import TimeSlot from './TimeSlot'

const DetailsPart2 = () => {
  return (
    <div className='grid grid-cols-3 gap-10 mt-14'>
        <div className='col-span-3 md:col-span-2'>
            <div className='flex flex-col gap-5'>
            <h2 className='text-[24px] font-extrabold'>Description</h2>                
            <h2 className='text-[16px] leading-7 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h2>                
            </div>
            <div className='flex flex-col gap-5 mt-8'>
                <h2 className='text-[24px] font-extrabold'> Gallery</h2>
                <div className='flex gap-4 rounded-md'>
                <Image src='/cleaning-lady.jpg' width={2000} height={200} className='w-[160px] rounded-lg'/>
                <Image src='/cleaning-lady.jpg' width={2000} height={200} className='w-[160px] rounded-lg'/>
                <Image src='/cleaning-lady.jpg' width={2000} height={200} className='w-[160px] rounded-lg'/>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <Button className='flex gap-2 w-full'>
            <NotebookPen/>
           
            <Sheet>
            
  <SheetTrigger>Book Appointment</SheetTrigger>
  
  <SheetContent>
  <ScrollArea className=" w-full border-none rounded-md border p-4 h-full">
    <SheetHeader>
      <SheetTitle className='font-bold text-xl'>Book a Service</SheetTitle>
      <SheetDescription>
      
      <h2>Select Date and Time slot to book an service</h2>
         <Calender/>
         <TimeSlot/>
      </SheetDescription>
      <div className='flex ml-36 gap-2 pt-2'>
      <Button className='bg-red-500'>Cancel</Button>
      <Button>Book</Button>
      </div>
      
    </SheetHeader>

    </ScrollArea>
  </SheetContent>
  
            </Sheet>
           

            </Button>
            <h2 className='text-[18px] font-extrabold mt-4'>Similar Business</h2>
            <SimilarBusinessCard/>
            <SimilarBusinessCard/>
            <SimilarBusinessCard/>
            <SimilarBusinessCard/>
            <SimilarBusinessCard/>
            <SimilarBusinessCard/>
            <SimilarBusinessCard/>
        </div>
    </div>
  )
}

export default DetailsPart2