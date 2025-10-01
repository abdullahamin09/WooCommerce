import React from 'react'

const EditAddress = ({EditAddressProp}) => {
    return (
        <form className='editAddress flex flex-col gap-[29px] mb-[88px]'>
            <p className='text-[30px]/[42px] font-bold'>{EditAddressProp} Address</p>
            <div className="flex gap-[24px]">
                <div className="flex flex-col flex-1">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">First Name <span className="text-[#FF0000]">*</span></label>
                    <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="firstName" id="" />
                </div>
                <div className="flex flex-col flex-1">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Last Name <span className="text-[#FF0000]">*</span></label>
                    <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="lastName" id="" />
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Company Name (optional)</label>
                <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="companyName" id="" />
            </div>
            <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Country / Region <span className="text-[#FF0000]">*</span></label>
                    <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="companyName" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Street Address <span className="text-[#FF0000]">*</span></label>
                    <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none mb-[22px]" type="text" name="streetAddress1" id="" />
                    <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="streetAddress2" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Town / City <span className="text-[#FF0000]">*</span></label>
                    <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="cityAddress" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Province <span className="text-[#FF0000]">*</span></label>
                    <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="province" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Postcode / ZIP <span className="text-[#FF0000]">*</span></label>
                    <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="number" name="postcode" id="" />
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Phone <span className="text-[#FF0000]">*</span></label>
                <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="number" name="phone" id="" />
            </div>
            <div className="flex flex-col">
                <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Email <span className="text-[#FF0000]">*</span></label>
                <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="email" name="email" id="" />
            </div>
            <button className='bg-[#2F8EFF] text-white w-[192px] h-[44px] text-[20px]/[30px]' type="submit">Save address</button>
        </form>
    )
}

export default EditAddress
