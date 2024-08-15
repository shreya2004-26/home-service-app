import React from 'react'
import BusinessCard from './BusinessCard'

const BusinessList = () => {
  return (
    <>
    <div className='flex flex-col gap-5 mt-5'>
    <h2 className='text-xl font-bold '>Bopular Business</h2>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-x-12'>
      <BusinessCard/>
      <BusinessCard/>
      <BusinessCard/>
      <BusinessCard/>
      <BusinessCard/>
      <BusinessCard/>
      <BusinessCard/>
      <BusinessCard/>
      <BusinessCard/>
      <BusinessCard/>
    </div>
    </div>
    </>
  )
}

export default BusinessList