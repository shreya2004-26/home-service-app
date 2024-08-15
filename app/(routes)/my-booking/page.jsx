import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingCard from './BookingCard'

const page = () => {
  return (
    <>
    <Tabs defaultValue="account" className="w-full">
  <TabsList className='w-[100%]'>
    <TabsTrigger value="booked">Booked</TabsTrigger>
    <TabsTrigger value="completed">Completed</TabsTrigger>
  </TabsList>
  <TabsContent value="booked"><BookingCard/></TabsContent>
  <TabsContent value="completed"><BookingCard/></TabsContent>
    </Tabs>
    </>
  )
}

export default page