import React from 'react'
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className='footer-wrap flex-col justtify-center bg-black'>
      <div className='footer-top text-white flex bg-green-500 px-[122px] py-[77px]'>
        <div className="footer-left flex-1">
          <p className='text-[52px]'>Get Started with LSX</p>
          <p className='text-[22px]'>With its clean, minimal design and powerful feature set, LSX theme enables agencies to build stylish and sophisticated WordPress websites.</p>
          <button className='text-[20px] px-[20px] py-[10px] bg-blue-500 text-red'>View Demo</button>
        </div>
        <div className="footer-right flex-1 flex justify-around">
          <div className="theme">
            <p className='mb-3 text-[34px]'>Theme</p>
            <ul className='decoration-none'>
              <li className='text-[20px]'>Styles</li>
              <li className='text-[20px]'>Patterns</li>
              <li className='text-[20px]'>Layouts</li>
              <li className='text-[20px]'>Templates</li>
              <li className='text-[20px]'>Docs</li>
              <li className='text-[20px]'>Download</li>
            </ul>
          </div>
          <div className="products">
            <p className='mb-3 text-[34px]'>LightSpeed</p>
            <ul className='decoration-none'>
              <li className='text-[20px] m-0'>Solutions</li>
              <li className='text-[20px]'>Services</li>
              <li className='text-[20px]'>About</li>
              <li className='text-[20px]'>Contact</li>
              <li className='text-[20px]'>Portfolio</li>
            </ul>
          </div>
          <div className="products">
            <p className='mb-3 text-[34px]'>Products</p>
            <ul className='decoration-none'>
              <li className='text-[20px] m-0'>Solutions</li>
              <li className='text-[20px]'>Services</li>
              <li className='text-[20px]'>About</li>
              <li className='text-[20px]'>Contact</li>
              <li className='text-[20px]'>Portfolio</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line mx-[120px] mb-[2x] h-[2px]">
        <hr className='text-white'/>
      </div>
      <div className="footer-bottom-wrap border-t-1 border-white">
      <div className="bottom-footer mx-[120px] min-h-[70px] text-white flex justify-between items-center">
        <p>© LSX Theme</p>
        <div className="middle flex">
          <p className='mr-[6px]'>Privacy Policy </p>.
          <p className='ml-[6px]'> Terms & Conditions</p>
        </div>
        <ul className="social-media decoration-none text-black flex">
          <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center mr-[10px]">
            <Icon icon="ic:round-facebook" width="24" height="24"  />
          </li>
          <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center mr-[10px]">
          <Icon icon="mdi:instagram" width="24" height="24" />
          </li>
          <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center mr-[10px]">
          <Icon icon="mdi:twitter" width="24" height="24"   />
          </li>
          <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center mr-[10px]">
          <Icon icon="mdi:linkedin" width="24" height="24" />
          </li>
          <li className="bg-white w-[36px] h-[36px] rounded-3xl flex justify-center items-center">
          <Icon icon="mdi:rss" width="24" height="24" />
          </li>
        </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer
