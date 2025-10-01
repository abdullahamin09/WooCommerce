import { Rate } from "antd";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Card = ({ Ptitle, Pprice, Prating, Pdetails }) => {
    // const [value, setValue] = useState(3);
    return (
        <div className="main-card  xl:max-w-[285px] max-sm:max-w-[350px]">
            <div className="img-wrap w-full h-[285px] bg-black flex justify-center items-center">
                <img src="/images/card_logo.png" alt="" />

            </div>
            <div className="card-details">
                <div className="det-wrap p-[20px] bg-[#EEEEEE]">
                    <p className='font-bold text-[20px]/[30px] cursor-pointer'><Link to="/singleproduct">{Ptitle}</Link></p>
                    <div className="rate-stars">
                        <Rate
                            // onChange={setValue} 
                            value={Prating} disabled />
                        {/* <p>Selected: {value} stars</p> */}
                    </div>
                    <p className='font-bold text-[20px]/[30px]'>{Pprice} <span className='font-medium'>incl VAT</span></p>
                    <p className='font-normal text-[16px]/[24px]'>{Pdetails}</p>
                </div>
                <Link to="/singleproduct">
                    <button className='bg-[#2F8EFF] h-[60px] w-full font-bold text-[24px]/[34px] text-white px-auto cursor-pointer'>Add to basket</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
