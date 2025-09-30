import FeaturedCategory from '../components/FeaturedCategory'
import Shop from './Shop'

const Home = () => {
  return (
    <div className='flex flex-col  gap-4 text-2xl font-semibold'>
      <FeaturedCategory Features = 'Welcome To Home Page' Details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .'/>
      <Shop/>
    </div>
  )
}

export default Home
