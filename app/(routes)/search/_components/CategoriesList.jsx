
import React from 'react'
import CategoriesCard from './CategoriesCard'

const CategoriesList = () => {
  return (
    <>
    <div className='col-span-3 '>
        <h2 className='font-bold text-xl'>Cleaning</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 mt-4 gap-x-10'>
        <CategoriesCard/>
        <CategoriesCard/>
        <CategoriesCard/>
        <CategoriesCard/>
        <CategoriesCard/>
        <CategoriesCard/>
        <CategoriesCard/>
        <CategoriesCard/>
        </div>
    </div>
    </>
  )
}

export default CategoriesList