import FeaturedCategory from './FeaturedCategory'

const Services = () => {
    return (
        <div>
            <FeaturedCategory Features='Welcome To Home Page' Details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .' />
            <div className="flex justify-center gap-[20px] my-[40px]">
            <FeaturedCategory Features='Features' Details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .' />
            <FeaturedCategory Features='Category' Details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .' />
            </div>
        </div>
    )
}

export default Services
