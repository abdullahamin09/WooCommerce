import { Rate } from "antd";
import { useState } from "react";

const Card = () => {
    const [value, setValue] = useState(3);
    return (
        <div className="main-card w-[285px]">
            <div className="img-wrap w-[285px] h-[285px] bg-black flex justify-center items-center">
                <img src="/images/card_logo.png" alt="" />

            </div>
            <div className="card-details">
                <div className="det-wrap p-[20px] bg-[#EEEEEE]">
                    <p className='font-bold text-[20px]/[30px]'>Product Title</p>
                    <div className="rate-stars">
                        <Rate onChange={setValue} value={value} />
                        {/* <p>Selected: {value} stars</p> */}
                    </div>
                    <p className='font-bold text-[20px]/[30px]'>R100,00 <span className='font-medium'>incl VAT</span></p>
                    <p className='font-normal text-[16px]/[24px]'>Lorem ipsum dolor sit amet consectetur sociis maecenas.</p>
                </div>
                <button className='bg-[#2F8EFF] h-[60px] w-full font-bold text-[24px]/[34px] text-white px-auto cursor-pointer'>Add to basket</button>
            </div>
        </div>
    )
}

export default Card
