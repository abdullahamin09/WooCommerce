import { useState } from 'react'
import { Rate } from "antd";
import userImg from '../assets/images/userImg.png'
import Button from "./Shared/Button"
import Input from './Shared/Input'
import Checkbox from './Shared/Checkbox';
import TextArea from './Shared/TextArea';

const ProductReview = () => {
    const [activeSection, setActiveSection] = useState('description')
    const [ratingValue, setRatingValue] = useState(5);
    return (
        <div>
            <div className="product-details my-[94px] mx-[20px]">
                <div className="buttonList text-[16px]/[24px] font-bold border-b-[1px] border-[#B4B7C1] flex justify-center items-center">
                    <button
                        className={` bg-[#FFFFFF] cursor-pointer w-[131px] h-[50px] border-b-[4px] ${activeSection === 'description' ? 'border-[#2F8EFF]' : 'border-transparent'} `}
                        onClick={() => setActiveSection('description')}
                    >
                        Description
                    </button>
                    <button
                        className={` bg-[#FFFFFF] w-[178px] cursor-pointer h-[50px] border-b-[4px] ${activeSection === 'additionalDetails' ? 'border-[#2F8EFF]' : 'border-transparent'} `}
                        onClick={() => setActiveSection('additionalDetails')}
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
                    {activeSection === 'additionalDetails' && (
                        <div className="h-[20px]"></div>
                    )}
                    {activeSection === 'reviews' && (
                        <div className="review flex flex-col items-center" >
                            <div className="border-b-[1px] border-[#B4B7C1] mb-[30px] w-[350px] md:w-[640px]">
                                <p className='text-[24px]/[34px] font-bold mb-[20px]'>1 review for Subscription Product Title</p>
                            </div>
                            <div className="userReview md:w-[640px] w-[350px]  flex justify-center gap-[20px] mb-[40px] border-b-[1px] border-[#B4B7C1] pb-[30px]">
                                <div className="userImg h-[50px] shrink-0 w-[50px] bg-black">
                                    <img className='w-full h-full' src={userImg} alt="" />
                                </div>
                                <div className="reviewText">
                                    <div className='text-[16px]/[24px] text-[#9B9B9B] font-medium flex justify-between items-start max-md:flex-col gap-[20px] mb-[20px] md:gap-[10px] md:mb-[10px]'>
                                        <p>lightspeed <span className='text-[#000000]'>(verified owner)</span> <br className='md:hidden' /><span className='max-md:hidden'> – </span>9 May 2023</p>
                                        <Rate value={3} disabled />
                                    </div>
                                    <p className='lg:w-[562px] text-[20px]/[30px] font-medium'>The LSX Tour Operator plugin is a comprehensive WordPress plugin designed specifically for tour operators and travel agencies. As a language model, I cannot provide personal opinion or experience with the product, but I can give you an overview of the plugin based on its features and user feedback.</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center md:w-[640px] w-[350px]'>
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
                                <form className="text-[20px]/[30px] font-medium flex flex-col mb-[40px]">
                                    <div className='mb-[30px]'>
                                        <TextArea
                                            Label="Your Review"
                                            id='yourReview'
                                            Name='yourReview'
                                            important
                                        />
                                    </div>
                                    <div className="name flex max-md:flex-col gap-[26px] mb-[40px]">
                                        <Input
                                            Label="First Name"
                                            HtmlFor="firstName"
                                            important
                                            textsize="[16px]/[24px]"
                                            type="text"
                                            inputClass='flex-1'
                                        />
                                        <Input
                                            Label="Last Name"
                                            HtmlFor="lastName"
                                            important
                                            textsize="[16px]/[24px]"
                                            type="text"
                                            inputClass='flex-1'
                                        />
                                    </div>
                                    <Checkbox
                                        id="savInfo"
                                        name="savInfo"
                                        label="Save my name, email, and website in this browser for the next time I comment."
                                    />
                                    <Button
                                        content='Submit'
                                        btnClass='!h-[57px] !w-[111px] !text-[20px]/[30px]'
                                    />
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductReview
