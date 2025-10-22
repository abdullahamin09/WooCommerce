import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Shared/Button'
import Input from './Shared/Input'
import Checkbox from './Shared/Checkbox'
import { useLocation } from 'react-router-dom'
import { message } from 'antd'
import axios from "axios";

const Auth = () => {
    const location = useLocation();
    const login = location.pathname === "/login";
    const signup = location.pathname === "/signup";
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting:", formData);
            const response = await axios.post("http://localhost:8000/api/auth/register", formData);
            console.log("Response:", response.data);

            messageApi.open({
                type: 'success',
                content: 'Registered Successfully',
            });
            setFormData({
                name: "",
                email: "",
                password: "",
            });

        } catch {
            console.error("Failed to register");
            messageApi.open({
                type: 'error',
                content: 'Failed to register',
            });
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            console.log("logging in", formData);
            const response = await axios.post("http://localhost:8000/api/auth/login",
                {
                    email: formData.email,
                    password: formData.password,
                },
                { withCredentials: true }
            );
            console.log("Login successful", response.data);
            navigate('/myaccount');
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            messageApi.error(error.response?.data?.error || "Failed to login");
        }
    }


    return (
        <div className="login-register mx-auto mt-10">
            {contextHolder}
            <div className='flex'>
                {login && (
                    <div className="login w-[540px] mx-auto my-20 flex flex-col gap-8 px-[30px] py-[20px] border-[2px] borer-black">
                        <p className='text-[48px]/[66px] font-bold'>Login</p>
                        <form onSubmit={handleLogin} action="" className="login-form gap-[20px] flex flex-col">
                            <Input
                                Label="Email address"
                                id="loginEmail"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                important
                                textsize="[16px]/[24px]"
                                type="email"
                            />
                            <Input
                                Label="Password"
                                id="loginPassword"
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                important
                                textsize="[16px]/[24px]"
                                type="password"
                            />
                            <div className="button-wrap grid grid-cols-2 max-md:grid-cols-1 gap-2 items-center">
                                <Button
                                    content='Login '
                                    btnClass='!w-[298px]'
                                    btnType="submit"
                                />
                                {/* <div className="flex items-centermd:justify-end">
                                <input className='cursor-pointer' id="remember-me" type="checkbox" />
                                <label className='cursor-pointer' htmlFor="remember-me">Remember me</label>
                            </div> */}
                                <Checkbox
                                    id="rememberMe"
                                    name="rememberMe"
                                    label="Remember me"
                                    checkboxClass='md:!justify-end !gap-1 !items-center !font-normal'
                                />
                                <div className='font-bold text-sky-500'>
                                    <Link to="/forgetpassword">Lost your password?</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {signup && (
                    <div className="register w-[540px] mx-auto my-20 flex flex-col gap-8 px-[30px] py-[20px] border-[2px] borer-black">
                        <p className='text-[48px]/[66px] font-bold'>Register</p>
                        <form onSubmit={handleSubmit} action="" className="register-form gap-[20px] flex flex-col">
                            <Input
                                Label="Full Name"
                                id="registerName"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                textsize="[16px]/[24px]"
                                important
                            />
                            <Input
                                Label="Email address"
                                id="registerEmail"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                textsize="[16px]/[24px]"
                                important
                            />
                            <Input
                                Label="Password"
                                id="registerPassword"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                textsize="[16px]/[24px]"
                                important
                            />
                            <div className="button-wrap  ">
                                <Button
                                    content='Register'
                                    btnType="submit"
                                />

                            </div>
                        </form>
                        <p>Have an account <Link className='text-[#50d71e] font-bold' to='/login'>Login</Link></p>
                    </div>
                )}
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

