import React from 'react'
import Shop from './shop'
import FeaturedCategory from '../components/FeaturedCategory'

const Home = () => {
  return (
    <div className='flex flex-col  gap-4 text-2xl font-semibold'>
      <FeaturedCategory Features = 'Welcome To Home Page' Details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .'/>
      <Shop />
    </div>
  )
}

export default Home
