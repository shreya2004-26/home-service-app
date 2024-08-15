import React from 'react'
import DetailsPart1 from '../_components/DetailsPart1'
import DetailsPart2 from '../_components/DetailsPart2'


const page = () => {
  return (
    <div className='flex flex-col md:px-32 md:py-20'>
       <DetailsPart1/>
       <DetailsPart2/>
    </div>
  )
}

export default page