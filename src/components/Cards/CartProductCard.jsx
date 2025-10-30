import { Rate } from "antd";
import { useState } from "react";

const CartProductCard = ({ Title, Rating, Price, DiscountPrice, Lisence, itemNumber = false }) => {
    const [q, setQ] = useState(1);
    return (
        <div>
            <div className="flex flex-row justify-between gap-4 w-full">
                <div className="flex flex-row gap-[20px] w-[590px]">
                    <div className="img relative">
                        <div className={`bg-[#000000] p-[4px] shrink-0 ${itemNumber ? 'w-[53px] h-[50px]' : 'w-[72px] h-[72px]'}`}>
                            <img className="w-full h-full object-contain" src="/images/card_logo.png" alt="" />
                        </div>
                        {itemNumber && <div className="absolute flex justify-center items-center w-[31px] h-[29px] rounded-full bg-white  right-[-15px] top-[-14px]">
                            <div className="border-[2px] bg-white rounded-full flex justify-center items-center border-[#000000] w-[27px] h-[25px]">
                                {itemNumber}
                            </div>
                        </div>
                        }
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h5 className={`${itemNumber ? 'font-medium text-[16px]/[24px]' : 'font-bold text-[20px]/[30px]'} `}>{Title}</h5>
                        <div>
                            {Rating && (
                                <Rate value={Rating} disabled />
                            )}
                        </div>
                        <div className="flex flex-row gap-2 text-[16px]/[24px]">
                            <span className={` ${DiscountPrice ? "line-through font-medium" : "font-bold"} `} >R{Price}</span>
                            {DiscountPrice && (
                                <span className="font-bold">R{DiscountPrice}</span>
                            )}
                        </div>
                        {DiscountPrice && (
                            <p className="font-bold text-[12px]/[18px] border-1 border-[#43454B] text-center px-[8px] py-[3px] w-25 items-center rounded-sm">
                                Save {Price-DiscountPrice}
                            </p>
                        )}
                        <p className={`${itemNumber ? 'font-medium' : 'font-normal'}`}>
                            Create custom, full-width dropdown menus that contain images,
                            widgets and more that seamlessly tie into…
                        </p>
                        {Lisence && (
                            <p className="font-bold text-[12px]/[18px]">
                                Lisence :
                                <span className="font-medium">{Lisence}</span>
                            </p>
                        )}
                        <div className={`flex-row justify-start items-center gap-4 ${itemNumber ? 'hidden' : 'flex'}`}>
                            <div className="flex items-center py-1 border-1 border-black rounded-lg w-30">
                                <button
                                    onClick={() => setQ(q > 1 ? q - 1 : 1)}
                                    className="flex-1 bg-gray-100 text-xl font-bold cursor-pointer"
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={q}
                                    readOnly
                                    className="w-12 text-center  outline-none"
                                />

                                <button
                                    onClick={() => setQ(q + 1)}
                                    className="flex-1 bg-gray-100 text-xl font-bold cursor-pointer"

                                >
                                    +
                                </button>
                            </div>
                            <button className=" text-red-600 text-[16px] cursor-pointer">Remove items</button>
                        </div>
                    </div>
                </div>
                <div className="w-[100px]">
                    <p className={`font-bold ${itemNumber ? 'text-[16px]/[24px] text-end' : ' text-[20px]/[30px]'} `}>R{DiscountPrice ? DiscountPrice * q : Price * q}</p>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard
