import { useState, useEffect } from "react";
import img1 from "../assets/images/account.png";
import img2 from "../assets/images/cart.png";
import { Link } from "react-router-dom";

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
    <nav className="lg:mx-[120px] mx-[30px] md:mx-[80px] max-md:grid max-md:grid-cols-12 py-2">
      <div className=" relative navbarWrap flex justify-between h-[100px] bg-white dark:bg-black text-black dark:text-white col-span-11">
        <div className="logo-wrap w-[166px] flex items-center">
          <img src={"/images/Logo.png"} alt="Logo" />
        </div>
        <ul
          className={`${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-6 absolute 
          md:static top-full left-[-30px] w-[100vw] md:w-auto bg-white dark:bg-black md:bg-transparent text-center 
          md:text-left z-10 list-none lg:mt-4 max-md:pb-5`}
        >

          <li className="mr-3">
            <a href="">Shop</a>
          </li>
          <li className="mr-3">
            <a href="">Services</a>
          </li>
          <li className="mr-3">
            <a href="">FAQ</a>
          </li>
          <li className="mr-3">
            <a href="">About</a>
          </li>
          <li className="mr-3">
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="my-auto flex items-center  max-md:ml-[20px]">
          <p className="mr-3">R100,00</p>
          <Link to="/cart" className="cart-wrap mr-3">
            <img className="w-[42px]" src={img2} alt="account" />
          </Link>
          <div className="accWrap">
            <img className="w-[29px]" src={img1} alt="cart" />
          </div>
        </div>
      </div>
      <div className="button flex items-center justify-end w-10px">
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl focus:outline-none"
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

    </nav>
  );
};

export default Header;