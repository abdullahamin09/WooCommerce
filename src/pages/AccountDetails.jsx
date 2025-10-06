import React from 'react'

const AccountDetails = () => {
  return (
    <div className=' mt-10'>
      <form className='editAddress flex flex-col gap-[29px] mb-[88px]'>
            <div className="flex gap-[24px]">
                <div className="flex flex-col flex-1">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">First Name <span className="text-[#FF0000]">*</span></label>
                    <input className="h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="firstName" id="" />
                </div>
                <div className="flex flex-col flex-1">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Last Name <span className="text-[#FF0000]">*</span></label>
                    <input className="h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="email" name="lastName" id="" />
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Display name <span className="text-[#FF0000]">*</span></label>
                <input className="h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="displayName" id="" />
                <p className='text-[12px]/[18px] font-medium mt-[10px]'>This will be how your name will be displayed in the account section and in reviews</p>
            </div>
                <div className="flex flex-col">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Email address <span className="text-[#FF0000]">*</span></label>
                    <input className="h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="email" name="email" id="" />
                </div>
                <div className="flex flex-col gap-[24px] border-[2px] border-[#B4B7C1] p-[20px] pt-[10px]">
                <p className='text-[20px]/[30px] font-bold'>Password change</p>
                <div className="flex flex-col">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Current password (leave blank to leave unchanged)</label>
                    <input className="h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none mb-[22px]" type="text" name="streetAddress1" id="" />
                    <input className="h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="streetAddress2" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">New password (leave blank to leave unchanged)</label>
                    <input className="h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="cityAddress" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="text-[20px]/[30px] font-medium mb-[20px]" htmlFor="email">Confirm new password</label>
                    <input className="h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" type="text" name="province" id="" />
                </div>
            </div>
            <button className='bg-[#2F8EFF] text-white w-[192px] h-[44px] text-[20px]/[30px] cursor-pointer' type="submit">Save address</button>
        </form>
    </div>
  )
}

export default AccountDetails
