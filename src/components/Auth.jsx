
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import Button from './Shared/Button'
import Input from './Shared/Input'
import Checkbox from './Shared/Checkbox'

const Auth = () => {
    return (
        <div className="login-register mx-auto mt-10">
            <div className='flex'>
                <div className="login w-[540px] mx-auto my-20 flex flex-col gap-8 px-[30px] py-[20px] border-[2px] borer-black">
                    <p className='text-[48px]/[66px] font-bold'>Login</p>
                    <form action="" className="login-form gap-[20px] flex flex-col">
                        <Input
                            Label="Email address"
                            HtmlFor="loginEmail"
                            important
                            textsize="[16px]/[24px]"
                            type="email"
                        />
                        <Input
                            Label="Password"
                            HtmlFor="loginPassword"
                            important
                            textsize="[16px]/[24px]"
                            type="password"
                        />
                        <div className="button-wrap grid grid-cols-2 max-md:grid-cols-1 gap-2 items-center">
                            <Link to='/myaccount'>
                                <Button
                                    content='Login '
                                    btnClass='!w-[298px]'
                                    btnType="submit"
                                />
                            </Link>
                            {/* <div className="flex items-centermd:justify-end">
                                <input className='cursor-pointer' id="remember-me" type="checkbox" />
                                <label className='cursor-pointer' htmlFor="remember-me">Remember me</label>
                            </div> */}
                            <Checkbox
                                id="rememberMe"
                                name="rememberMe"
                                label="Remember me"
                                checkboxClass = 'md:!justify-end !gap-1 !items-center !font-normal'
                            />
                            <div className='font-bold text-sky-500'>
                                <Link to="/forgetpassword">Lost your password?</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="register w-[540px] mx-auto my-20 flex flex-col gap-8 px-[30px] py-[20px] border-[2px] borer-black">
                    <p className='text-[48px]/[66px] font-bold'>Register</p>
                    <form action="" className="register-form gap-[20px] flex flex-col">
                        <Input
                            Label="Email address"
                            HtmlFor="registerEmail"
                            important
                            textsize="[16px]/[24px]"
                            type="email"
                        />
                        <Input
                            Label="Password"
                            HtmlFor="registerPassword"
                            important
                            textsize="[16px]/[24px]"
                            type="password"
                        />
                        <div className="button-wrap  ">
                            <Button
                                content='Register'
                                btnType="submit"
                            />

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

export default Auth

