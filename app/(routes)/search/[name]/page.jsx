import React from 'react'
import CategoriesContainer from '../_components/CategoriesContainer'
import CategoriesList from '../_components/CategoriesList'

const page = () => {
  return (
    <div className='grid md:grid-cols-4 mt-10 gap-5'>
       <CategoriesContainer />
       <CategoriesList/>
    </div>
  )
}

export default page