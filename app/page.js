import React from 'react'
import Hero from './_components/Hero'
import CategoryCard from './_components/CategoryCard'
import CategoryList from './_components/CategoryList'
import BusinessList from './_components/BusinessList'

const page = () => {
  return (
    <div>
      <Hero/>
      <CategoryList/>
      <BusinessList/>
    </div>
  )
}

export default page