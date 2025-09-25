import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 text-2xl font-semibold'>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/login">SignIn</Link>
    </div>
  )
}

export default Home
