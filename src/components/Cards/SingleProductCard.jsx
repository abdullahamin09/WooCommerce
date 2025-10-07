import { Rate } from "antd";
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';
import Button from "../Shared/Button"

const SingleProductCard = () => {
    return (
        <div className="singleProduct md:px-[90px]">
            <div className='w-full flex justify-center max-sm:items-center max-lg:flex-col gap-[50px] pt-[86px]'>
                <div className="singleProductLeft flex-1 w-full">
                    <div className="img-wrap max-w-[580px] h-[580px] bg-black flex justify-center items-center">
                        <img src="/images/card_logo.png" alt="" />
                    </div>
                    <div className="small-img-wrap grid grid-cols-4 gap-[1px] mt-[1px] max-w-[580px]">
                        <div className="active h-[142px] bg-black flex justify-center items-center">
                            <img src="/images/card_logo.png" alt="" />
                        </div>
                        <div className="h-[142px] bg-black flex justify-center items-center">
                            <img src="/images/card_logo.png" alt="" />
                        </div>
                        <div className="h-[142px] bg-black flex justify-center items-center">
                            <img src="/images/card_logo.png" alt="" />
                        </div>
                        <div className="h-[142px] bg-black flex justify-center items-center">
                            <img src="/images/card_logo.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="singleProductRight max-w-[580px] flex-1">
                    <p className='text-[30px]/[42px] font-bold mb-[20px]'>Subscription Product Title</p>
                    <div className="mb-[20px]">
                        <Rate value={4} disabled />
                        <p>(4 customer reviews)</p>
                    </div>
                    <p className='text-[20px]/[30px] font-bold mb-[20px]'>
                        <span className="price text-[#9B9B9B] mr-[20px]">R250.59</span>
                        <span className="sale-price">R175.59</span>
                    </p>
                    <p className="pruductDetails text-[16px]/[24px] font-medium mb-[25px]">
                        Lorem ipsum dolor sit amet, sed ut graece tibique definitionem. Nec ex legere quodsi interesset, alii dictas referrentur duo cu. Ex quas docendi vis. At sit iudico tation primis, eos an modus maluisset persecuti, ut eos hinc aperiri referrentur. Mel ei brute nullam, ut porro invidunt sit.
                    </p>
                    <div className="addBasket flex gap-[10px] mb-[40px]">
                        <input defaultValue={1} className="w-[79px] h-[50px] border-[2px] border-[#000000] font-bold text-center focus:outline-none" type="number" name="quantity" id="" />
                        <Link to='/basket'>
                            <Button
                                content='Add to basket'
                                btnClass='!h-[50px] !w-[250px] !text-[20px]/[30px]'
                            />
                        </Link>
                    </div>
                    <div className="firstPayment bg-[#FFFFFF] border-[2px] border-[#20D902] h-[64px] max-w-[580px] text-[16px]/[24px] font-medium mb-[40px] flex items-center gap-[10px]">
                        <p className='pl-[20px]'>First Payment: <span className='font-bold'>November 1, 2018</span></p>
                    </div>
                    <div className="category border-t-[1px] border-b-[1px] border-[#B4B7C1] h-[48px] max-w-[580px] text-[16px]/[24px] font-medium mb-[40px] flex items-center">
                        <p>Categories: <span>Product Category</span></p>
                    </div>
                    <div className="share flex justify-start items-center gap-[8px]">
                        <div className="wrapeShare flex justify-center items-center gap-[4px] mr-[4px]">
                            <Icon icon="ic:round-share" width="17" height="17" />
                            <p>Share:</p>
                        </div>
                        <div className='border-[1px] border-black rounded-[50%] bg-black h-[20px] w-[20px] flex justify-center items-center'><Icon icon="ic:outline-facebook" width="12" height="12" style={{ color: ' #fff' }} /></div>
                        <div className='border-[1px] border-black rounded-[50%] bg-black h-[20px] w-[20px] flex justify-center items-center'><Icon icon="ic:outline-whatsapp" width="12" height="12" style={{ color: '#fff' }} /></div>
                        <div className='border-[1px] border-black rounded-[50%] bg-black h-[20px] w-[20px] flex justify-center items-center'><Icon icon="jam:pinterest" width="12" height="12" style={{ color: '#fff' }} /></div>
                        <div className='border-[1px] border-black rounded-[50%] bg-black h-[20px] w-[20px] flex justify-center items-center'><Icon icon="mdi:twitter" width="12" height="12" style={{ color: '#fff' }} /></div>
                        <div className='border-[1px] border-black rounded-[50%] bg-black h-[20px] w-[20px] flex justify-center items-center'><Icon icon="ant-design:mail-filled" width="12" height="12" style={{ color: '#fff' }} /></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductCard
