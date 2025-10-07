import { Rate } from "antd";
import { Link } from "react-router-dom";
import Button from "../Shared/Button"
// import { useState } from "react";

const Card = ({ Ptitle, Pprice, discountPrice, Prating, Pdetails }) => {
    // const [value, setValue] = useState(3);
    return (
        <div className="main-card  xl:max-w-[285px] max-sm:max-w-[350px]">
            <div className="relative img-wrap w-full h-[285px] bg-black flex justify-center items-center">
                <img src="/images/card_logo.png" alt="" />
                {discountPrice &&
                    <div className="absolute right-[10px] top-[10px] w-[56px] h-[25.6px] text-[16px]/[17.8px] text-center bg-white py-[4px] border-1px border-black rounded-[3px]">SALE</div>
                }
            </div>
            <div className="card-details">
                <div className="det-wrap p-[20px] bg-[#EEEEEE]">
                    <p className='font-bold text-[20px]/[30px] cursor-pointer'><Link to="/singleproduct">{Ptitle}</Link></p>
                    {Prating &&
                        <div className="rate-stars">
                            <Rate
                                // onChange={setValue} 
                                value={Prating} disabled />
                            {/* <p>Selected: {value} stars</p> */}
                        </div>
                    }
                    <div className="flex flex-row gap-2 text-[20px]/[30px]">
                        <span className={` ${discountPrice ? "line-through font-normal" : "font-bold"} `} >{Pprice}</span>
                        {discountPrice && (
                            <span className="font-bold">R{discountPrice}</span>
                        )}
                        <span className='font-medium'>incl VAT</span>
                    </div>
                    <p className='font-normal text-[16px]/[24px]'>{Pdetails}</p>
                </div>
                <Link to="/singleproduct">
                    <Button content='Add to basket' />
                </Link>
            </div>
        </div>
    )
}

export default Card
