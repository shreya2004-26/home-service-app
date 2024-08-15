import React from 'react'
import CategoryDescription from './CategoryDescription'

const CategoriesContainer = () => {
  return (
    <>
    <div className='flex flex-col gap-3'>
      <h2 className='font-bold text-lg text-primary'>Categories</h2>
    <div className='flex flex-col gap-5 w-[90%]'>
        <CategoryDescription/>
        <CategoryDescription/>
        <CategoryDescription/>
        <CategoryDescription/>
        <CategoryDescription/>
        <CategoryDescription/>
        <CategoryDescription/>
        <CategoryDescription/>
        <CategoryDescription/>
    </div>
    </div>
    </>
  )
}

export default CategoriesContainer