

const FeaturedCategory = ({Features}) => {
    return (
        <div className='bg-[#323649] flex justify-center items-center text-white '>
            <div className="max-w-[640px] flex justify-center items-center flex-col my-[170px] md:mt-[80px] md:mb-[92px]">
                <p className="text-[30px]/[42px] font-bold mb-[20px]">Featured {Features} Title</p>
                <p className="text-[24px]/[34px] font-medium mb-[30px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .</p>
                <button className="text-[24px]/[34px] font-bold w-[250px] h-[60px] lg:w-[285px] bg-[#2F8EFF] cursor-pointer">Read more</button>
            </div>
        </div>
    )
}

export default FeaturedCategory
