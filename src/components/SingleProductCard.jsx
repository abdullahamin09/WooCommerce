import { useState } from 'react'
import { Rate } from "antd";
import { Icon } from '@iconify/react'
import userImg from '../assets/images/userImg.png'
import { Link } from 'react-router-dom';

const SingleProductCard = () => {
    const [activeSection, setActiveSection] = useState('description')
        const [ratingValue, setRatingValue] = useState(3);
    return (
        <div className="singleProduct bg-[#eeeeee] px-[90px] ">
            <div className='w-full flex justify-center max-sm:items-center max-lg:flex-col gap-[50px] pt-[86px]'>
                <div className="singleProductLeft flex-1">
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
                        <button className="bg-[#2F8EFF] text-[20px]/[30px] text-white h-[50px] w-[250px] cursor-pointer">Add to basket</button>
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
            <div className="product-details my-[94px]">
                <div className="buttonList text-[16px]/[24px] font-bold border-b-[1px] border-[#B4B7C1] flex justify-center items-center">
                    <button
                        className={` bg-[#FFFFFF] cursor-pointer w-[131px] h-[50px] border-b-[4px] ${activeSection === 'description' ? 'border-[#2F8EFF]' : 'border-transparent'} `}
                        onClick={() => setActiveSection('description')}
                    >
                        Description
                    </button>
                    <button
                        className={` bg-[#FFFFFF] w-[178px] cursor-pointer h-[50px] border-b-[4px] ${activeSection === 'additionalDetails' ? 'border-[#2F8EFF]' : 'border-transparent'} `}
                    // onClick={() => setActiveSection('additionalDetails')}
                    >
                        Additional Details
                    </button>
                    <button
                        className={` bg-[#FFFFFF] w-[130px] cursor-pointer h-[50px] border-b-[4px] ${activeSection === 'reviews' ? 'border-[#2F8EFF]' : 'border-transparent'} `}
                        onClick={() => setActiveSection('reviews')}
                    >
                        Reviews (1)
                    </button>
                </div>
                <div className="detailsArea mt-[42px] xl:pl-[200px] lg:pl-[100px]">
                    {activeSection === 'description' && (
                        <div className="description text-[20px]/[30px] font-medium max-w-[800px] pb-[94px]">
                            <p>The Search extension for the Tour Operators plugin adds robust search functionality to your WordPress Tour Operator site. It requires that you also have the FacetWP plugin installed, as that allows for much of the filtering functionality that the plugin.</p>
                        </div>
                    )}
                    {/* {activeSection === 'additionalDetails' && ()} */}
                    {activeSection === 'reviews' && (
                        <div className="review flex flex-col items-center" >
                            <div className="border-b-[1px] border-[#B4B7C1] mb-[30px] w-[640px]">
                                <p className='text-[24px]/[34px] font-bold mb-[20px]'>1 review for Subscription Product Title</p>
                            </div>
                            <div className="userReview flex justify-center gap-[20px] mb-[40px] border-b-[1px] border-[#B4B7C1] pb-[30px]">
                                <div className="userImg h-[50px] w-[50px] bg-black flex justify-center items-center">
                                    <img src={userImg} alt="" />
                                </div>
                                <div className="reviewText">
                                    <div className='text-[16px]/[24px] text-[#9B9B9B] font-medium flex justify-between items-center gap-[10px] mb-[10px]'>
                                        <p>lightspeed <span className='text-[#000000]'>(verified owner) </span>– 9 May 2023</p>
                                        <Rate value={3} disabled />
                                    </div>
                                    <p className='w-[562px] text-[20px]/[30px] font-medium'>The LSX Tour Operator plugin is a comprehensive WordPress plugin designed specifically for tour operators and travel agencies. As a language model, I cannot provide personal opinion or experience with the product, but I can give you an overview of the plugin based on its features and user feedback.</p>
                                </div>

                            </div>
                            <div className='flex flex-col justify-center w-[640px] '>
                                <div className='font-medium mb-[30px]'>
                                    <p className='text-[24px]/[34px]'>Add a review</p>
                                    <p className='text-[16px]/[24px]'>Your email address will not be published. Required fields are marked <span className='text-[#FF0000]'>*</span></p>
                                </div>
                                <div className="text-[20px]/[30px] font-medium mb-[20px] mb-[24px]">
                                    <p className=' mb-[8px]'>Your rating <span className='text-[#FF0000]'>*</span></p>
                                    <Rate
                                        onChange={setRatingValue}
                                        value={ratingValue} />
                                </div>
                                <form className="text-[20px]/[30px] font-medium flex flex-col">
                                    <div className='mb-[30px]'>
                                        <label>Your Review <span className='text-[#FF0000]'>*</span></label><br />
                                        <textarea className='w-[640px] h-[155px] bg-[#FFFFFF] border-[2px] px-[1px] border-[#2B2D2F] outline-none' id="comments" name="comments" />
                                    </div>
                                    <div className="name flex gap-[26px] mb-[40px]">
                                        <div>
                                            <label htmlFor="">First Name <span className='text-[#FF0000]'>*</span></label><br />
                                            <input className='w-[307px] h-[55px] bg-[#FFFFFF] border-[2px] border-[#2B2D2F] px-[1px] outline-none' type="text" name="firstName" id="" />
                                        </div>
                                        <div>
                                            <label htmlFor="">Last Name <span className='text-[#FF0000]'>*</span></label><br />
                                            <input className='w-[307px] h-[55px] bg-[#FFFFFF] border-[2px] border-[#2B2D2F] px-[1px] outline-none' type="text" name="lastName" id="" />
                                        </div>
                                    </div>
                                    <div className='mb-[40px] flex items-start'>
                                        <input className='mt-[6px] w-[16px] h-[18px] ' type="checkbox" name="savInfo" id="" />
                                        <label className='w-[612px] pl-[12px]' htmlFor="savInfo">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                    <button className='text-white w-[111px] h-[57px] bg-[#2F8EFF] hover:bg-[#2F8EFF]-800 font-medium focus:outline-none dark:focus:ring-blue-800 mb-[50px] cursor-pointer' type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SingleProductCard
