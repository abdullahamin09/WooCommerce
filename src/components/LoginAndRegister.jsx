import { Icon } from '@iconify/react'
import React from 'react'

const LoginAndRegister = () => {
    return (
        <div className="login-register lg:mx-[120px] mx-[30px] md:mx-[80px]">
            <div className='flex'>
                <div className="login w-[540px] mx-auto my-20 flex flex-col gap-8 px-[30px] py-[20px] border-[2px] borer-black">
                    <p className='text-[48px]/[66px] font-bold'>Login</p>
                    <form action="" className="login-form gap-[20px] flex flex-col">
                        <div className="flex flex-col">
                            <label className='text-[16px]/[24px] font-medium' htmlFor="email">Email address<span>*</span></label>
                            <input className='w-full border-[2px] h-[55.5px]' type="email" name="email" id="" />
                        </div>
                        <div className="flex flex-col">
                            <label className='text-[16px]/[24px] font-medium' htmlFor="password">Password<span>*</span></label>
                            <input className='w-full border-[2px] h-[55.5px]' type="password" name="password" id="" />
                        </div>
                        <div className="button-wrap grid grid-cols-2 max-md:grid-cols-1 gap-2 items-center">
                            <button className='bg-sky-500 hover:not-focus:bg-sky-600 w-[299.5px] h-[60px] text-white' type="">Log in</button>
                            <div className="flex items-center gap-1 md:justify-end">
                                <input id="remember-me" type="checkbox" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <div className='font-bold text-sky-500'>
                                <a href="#">Lost your password?</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="register w-[540px] mx-auto my-20 flex flex-col gap-8 px-[30px] py-[20px] border-[2px] borer-black">
                    <p className='text-[48px]/[66px] font-bold'>Register</p>
                    <form action="" className="register-form gap-[20px] flex flex-col">
                        <div className="flex flex-col">
                            <label className='text-[16px]/[24px] font-medium' htmlFor="email">Email address<span>*</span></label>
                            <input className='w-full border-[2px] h-[55.5px]' type="email" name="email" id="" />
                        </div>
                        <div className="flex flex-col">
                            <label className='text-[16px]/[24px] font-medium' htmlFor="password">Password<span>*</span></label>
                            <input className='w-full border-[2px] h-[55.5px]' type="password" name="password" id="" />
                        </div>
                        <div className="button-wrap  ">
                            <button className='bg-sky-500 hover:not-focus:bg-sky-600 w-full h-[60px] text-white' type="">Register</button>

                        </div>
                    </form>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 mb-20'>
                <div>
                    <p className='text-[30px]/[42px] font-bold'>Social Login and Registration</p>
                    <p className='text-[20px]/[30px] font-medium'>Use a social account for faster login or easy registration</p>
                </div>
                <div className="login-with grid md:grid-cols-3 gap-4">
                    <div className="facebook flex items-center bg-[#3B5998] w-[205px] cursor-pointer">
                        <div className="img bg-white w-[42px] h-[48px] border-[1px] border-[#3B5998] flex items-center justify-center">
                            <Icon icon="mage:facebook-square" width="28" height="30" style={{ color: "#3B5998" }} />
                        </div>
                        <div className='text-white'>
                            <p className='px-[5.5px]'>Login with Facebook</p>
                        </div>
                    </div>
                    <div className="google cursor-pointer flex items-center bg-[#418AD0] w-[205px]">
                        <div className="img bg-white w-[42px] h-[48px] border-[1px] border-[#418AD0] flex items-center justify-center">
                            <Icon icon="devicon:google" width="30" height="30" />
                        </div>
                        <div className='text-white'>
                            <p className='px-[5.5px]'>Login with Google</p>
                        </div>
                    </div>
                    <div className="twitter cursor-pointer flex items-center bg-[#55ACEE] w-[205px]">
                        <div className="img bg-white w-[42px] h-[48px] border-[1px] border-[#55ACEE] flex items-center justify-center">
                            <Icon icon="mdi:twitter" width="28" height="30" style={{ color: "#55ACEE" }} />
                        </div>
                        <div className='text-white'>
                            <p className='px-[5.5px]'>Login with Twitter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginAndRegister
