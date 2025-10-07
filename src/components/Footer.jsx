import React from 'react'
import { Icon } from "@iconify/react";
import Button from './Shared/Button';

const Footer = () => {
  return (
    <footer className='footer-wrap flex-col justtify-center bg-black'>
      <div className='footer-top text-white flex flex-col lg:flex-row px-[30px] xl:px-[122px] py-[77px]'>
        <div className="footer-left flex-1 space-y-[34px]">
          <p className='text-[48px]/[66px]'>Get Started with LSX</p>
          <p className='max-w-[616px] text-[20px]/[30px]'>With its clean, minimal design and powerful feature set, LSX theme enables agencies to build stylish and sophisticated WordPress websites.</p>
          <Button
            content='View Demo'
            btnClass='!text-[16px]/[28px] !w-[125px] !h-[48px]'
          />
        </div>
        <div className="footer-right flex-1 max-lg:mt-[40px] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] items-start justify-around">
          <div className="theme max-md:w-[170px]">
            <p className='mb-3 text-[34px]'>Theme</p>
            <ul className='decoration-none flex flex-col gap-[4px]'>
              <li className='text-[20px] cursor-pointer'>Styles</li>
              <li className='text-[20px] cursor-pointer'>Patterns</li>
              <li className='text-[20px] cursor-pointer'>Layouts</li>
              <li className='text-[20px] cursor-pointer'>Templates</li>
              <li className='text-[20px] cursor-pointer'>Docs</li>
              <li className='text-[20px] cursor-pointer'>Download</li>
            </ul>
          </div>
          <div className="LightSpeed max-md:w-[170px]">
            <p className='mb-3 text-[34px]'>LightSpeed</p>
            <ul className='decoration-none flex flex-col gap-[4px]'>
              <li className='text-[20px] cursor-pointer'>Solutions</li>
              <li className='text-[20px] cursor-pointer'>Services</li>
              <li className='text-[20px] cursor-pointer'>About</li>
              <li className='text-[20px] cursor-pointer'>Contact</li>
              <li className='text-[20px] cursor-pointer'>Portfolio</li>
            </ul>
          </div>
          <div className="products max-md:w-[170px]">
            <p className='mb-3 text-[34px]'>Products</p>
            <ul className='decoration-none flex flex-col gap-[4px]'>
              <li className='text-[20px] m-0 cursor-pointer'>Solutions</li>
              <li className='text-[20px] cursor-pointer'>Services</li>
              <li className='text-[20px] cursor-pointer'>About</li>
              <li className='text-[20px] cursor-pointer'>Contact</li>
              <li className='text-[20px] cursor-pointer'>Portfolio</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line mx-[60px] md:mx-[120px] mb-[2x] h-[2px]">
        <hr className='text-white' />
      </div>
      <div className="footer-bottom-wrap border-t-1 border-white">
        <div className="bottom-footer mx-[60px] md:mx-[120px] min-h-[70px] text-white flex flex-col lg:flex-row justify-between items-center">
          <p className='max-lg:mt-3'>© LSX Theme</p>
          <div className="middle flex max-lg:mt-3">
            <a className='mr-[6px] cursor-pointer'>Privacy Policy </a>.
            <a className='ml-[6px] cursor-pointer'> Terms & Conditions</a>
          </div>
          <ul className="social-media decoration-none text-black flex max-lg:mt-3 max-lg:mb-3">
            <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center mr-[10px] cursor-pointer">
              <Icon icon="ic:round-facebook" width="24" height="24" />
            </li>
            <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center mr-[10px] cursor-pointer">
              <Icon icon="mdi:instagram" width="24" height="24" />
            </li>
            <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center mr-[10px] cursor-pointer">
              <Icon icon="mdi:twitter" width="24" height="24" />
            </li>
            <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center mr-[10px] cursor-pointer">
              <Icon icon="mdi:linkedin" width="24" height="24" />
            </li>
            <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center cursor-pointer">
              <Icon icon="mdi:rss" width="24" height="24" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
