import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryList = () => {
  return (
    <div className='flex justify-center gap-4 text-center mt-8'>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
    </div>
  )
}

export default CategoryList