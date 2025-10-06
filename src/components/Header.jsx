import { useState, useEffect } from "react";
import img1 from "../assets/images/account.png";
import img2 from "../assets/images/cart.png";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const Header = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "dark") {
  //     setDarkMode(true);
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     setDarkMode(false);
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => {
  //     const newMode = !prevMode;
  //     if (newMode) {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //     }
  //     return newMode;
  //   });
  // };

  return (
    <nav className="shadow-lg/20 w-full">
      <div className=" relative container-fluid md:container mx-auto flex items-center justify-between h-[80px] lg:h-[100px] px-6 text-[20px]/[30px] font-medium navbarWrap bg-white dark:bg-black text-black dark:text-white md:space-x-6">
        <div className="logo-wrap w-[166px] h-[71px] flex items-center">
          <Link to='/home'>
            <img className='w-full h-full'src={"/images/Logo.png"} alt="Logo" />
          </Link>
        </div>
        <ul
          className={`${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-6 absolute
          md:static top-full left-0 w-[100vw] md:w-auto bg-white dark:bg-black md:bg-transparent text-start max-md:shadow-lg/20
          md:text-left z-10 list-none max-md:pb-5`}
        >


          <li className="md:hidden">
            <Button className="w-full h-[80px] !bg-[#D8D8D8] !rounded-none !justify-start !h-[80px] !text-[20px]/[30px] !font-medium !pl-[30px]" icon={<SearchOutlined />}>
              Search
            </Button>
          </li>
          <li className="pl-[30px] md:pl-0 max-md:h-[50px] py-auto">
            <Link to="/shop" className="hover:text-[blue] hover:underline transition-colors duration-300">Shop</Link>
          </li>
          <li className="pl-[30px] md:pl-0 max-md:h-[50px]">
            <Link to="/services" className="hover:text-[blue] hover:underline transition-colors duration-300">Services</Link>
          </li>
          <li className="pl-[30px] md:pl-0 max-md:h-[50px]">
            <a href="#" className="hover:text-[blue] hover:underline transition-colors duration-300">FAQ</a>
          </li>
          <li className="pl-[30px] md:pl-0 max-md:h-[50px]">
            <a href="#" className="hover:text-[blue] hover:underline transition-colors duration-300">About</a>
          </li>
          <li className="pl-[30px] md:pl-0 max-md:h-[50px]">
            <a href="" className="hover:text-[blue] hover:underline transition-colors duration-300">Contact</a>
          </li>
        </ul>
        <div className="flex justify-between items-center space-x-4">
          <p className="font-bold">R100,00</p>
          <Link to="/cart" className="cart-wrap w-[42px]">
            <img className="w-full hover:scale-110 transition-transform duration-300" src={img2} alt="account" />
          </Link>
          <Link to="/login" className="accWrap [29px]">
            <img className="w-full hover:scale-110 transition-transform duration-300" src={img1} alt="cart" />
          </Link>
          <div className="button md:hidden flex items-center justify-center w-[36px] h-[32px] border-[2px] border-black">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-[22px]"
            >
              {isMenuOpen ? "X" : "☰"}
            </button>
            {/* <button
              onClick={toggleDarkMode}
              className="ml-4 px-3 py-1 border rounded dark:border-white border-black"
              >
              {darkMode ? "Light Mode" : "Dark Mode"}
              </button> */}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;