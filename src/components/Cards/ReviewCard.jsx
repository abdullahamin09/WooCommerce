import { Rate } from "antd";
import userImg from '../../assets/images/userImg.png'

const ReviewCard = ({
    Img,
    title,
    name,
    spacing,
    date,
    Rating,
    details
}) => {
    return (
        <div className="flex flex-col gap-[20px] md:w-[640px] w-[350px]">
            <div className="flex  w-full ">
                <div className="userImg h-[50px] shrink-0 w-[50px] bg-black mr-[16px]">
                    <img className='w-full h-full' src={Img ? Img : userImg} alt="" />
                </div>
                <div className="w-full">
                    <div className='flex justify-between text-[20px]/[30px] font-bold gap-[20px]'>
                        <p className="mr-auto">{title}</p>
                        <Rate value={Rating} disabled />
                    </div>
                    <p className='text-[16px]/[24px] font-medium'>{name} <span >|</span> <br className='md:hidden' />{date}</p>
                </div>
            </div>
            <div>
                <p className='text-[20px]/[30px] font-medium'>{details}</p>
            </div>
        </div>
    )
}

export default ReviewCard
