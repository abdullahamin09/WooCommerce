import ReviewCard from '../components/Cards/ReviewCard'

const Review = () => {
    return (
        <div className='review flex flex-col items-center py-20 bg-[#f2f2f2]'>
            <div className="flex flex-col gap-[30px]">
                <p className='mb-[20px] text-[30px]/[42px] font-bold'>All Review Block</p>
                <div className="flex justify-end items-center gap-[12px]">
                    <p>Order by </p>
                    <select className='px-[13px] h-[35px] focus:outline-none border-[2px] border-black bg-white' name="orderBy" id="orderBy">
                        <option value="mostRecent">Most recent</option>
                    </select>
                </div>
                <ReviewCard
                    title='LSX Theme'
                    name='Warwick Booth'
                    spacing='|'
                    date='22 April, 2023'
                    Rating='4'
                    details='The LSX Tour Operator plugin is a comprehensive WordPress plugin designed specifically for tour operators and travel agencies. As a language model, I cannot provide personal opinion or experience with the product, but I can give you an overview of the plugin based on its features and user feedback.'
                />
                <ReviewCard
                    title='LSX Theme'
                    name='Warwick Booth'
                    spacing='|'
                    date='22 April, 2023'
                    Rating='5'
                    details='
                    The LSX Tour Operator plugin is a comprehensive WordPress plugin designed specifically for tour operators and travel agencies. As a language model, I cannot provide personal opinion or experience with the product, but I can give you an overview of the plugin based on its features and user feedback.
                    The LSX Tour Operator plugin is a comprehensive WordPress plugin designed specifically for tour operators and travel agencies. As a language model, I cannot provide personal opinion or experience with the product, but I can give you an overview of the plugin based on its features and user feedback.'
                />
            </div>
        </div>
    )
}

export default Review
