import { Icon } from "@iconify/react"

const ResetPassword = () => {
    return (
        <div>
            <div className="w-[580px] mx-auto my-[80px] flex flex-col gap-[20px] px-[30px] p-[20px] border-[2px] borer-black">
                <p className="text-[48px]/[66px] font-bold ">Lost Password</p>
                <p className="text-[16px]/[24px] font-medium text-[#9E9E9E]">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                <div className="flex flex-col">
                    <label className="text-[16px]/[24px] font-medium mb-[20px]" htmlFor="email">Username or email address <span className="text-[#FF0000]">*</span></label>
                    <input className="h-[56px] text-[16px]/[24px] px-[2px] border-[2px] border-black" type="email" name="email" id="" />
                </div>
                <div className="button-wrap  ">
                    <button className='bg-sky-500 hover:not-focus:bg-sky-600 w-full h-[60px] text-white' type="">Reset password</button>
                </div>
            </div>
            <div className="w-[580px] mx-auto my-[80px] flex flex-col gap-[20px] px-[30px] p-[20px] border-[2px] borer-black">
                <p className="text-[48px]/[66px] font-bold ">Lost Password</p>
                <div className="h-[72px] bg-#[F7F6F7] border border-[1px] border-[#2F8EFF] flex items-center px-[20px]">
                    <div className="flex items-center justify-center w-[20px] h-[20px] border-1px rounded-[100%] bg-[#2dfb64]">
                        <Icon icon="typcn:tick" width="16" height="16" style={{ color: '#fff' }} />
                    </div>
                    <p className="text-[20px]/[30px] font-medium pl-[11px]">Password reset has been sent.</p>
                </div>
                <p className="text-[16px]/[24px] font-medium text-[#9E9E9E]">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
            </div>
            <div className="w-[580px] mx-auto my-[80px] flex flex-col gap-[20px] px-[30px] p-[20px] border-[2px] borer-black">
                <p className="text-[48px]/[66px] font-bold ">Lost Password</p>
                <p className="text-[16px]/[24px] font-medium text-[#9E9E9E]">Enter a new password below</p>
                <div className="flex flex-col">
                    <label className="text-[16px]/[24px] font-medium mb-[20px]" htmlFor="email">Enter new password <span className="text-[#FF0000]">*</span></label>
                    <input className="h-[56px] text-[16px]/[24px] px-[2px] border-[2px] border-black" type="email" name="email" id="" />
                </div>
                <div className="flex flex-col">
                    <label className="text-[16px]/[24px] font-medium mb-[20px]" htmlFor="email">Confirm password <span className="text-[#FF0000]">*</span></label>
                    <input className="h-[56px] text-[16px]/[24px] px-[2px] border-[2px] border-black" type="email" name="email" id="" />
                </div>
                <div className="button-wrap  ">
                    <button className='bg-sky-500 hover:not-focus:bg-sky-600 w-full h-[60px] text-white' type="">Reset password</button>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
