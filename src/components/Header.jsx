import { useState, useEffect } from "react"
import img1 from "../assets/images/account.png"
import img2 from "../assets/images/cart.png"
const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

 
    return (
        <nav className="navbarWrap mx-[120px] flex justify-between h-[100px] bg-white dark:bg-black text-black dark:text-white">
                <div className="logo-wrap w-[166px] flex items-center">
                <img src={"/images/Logo.png"} alt="Logo" />
            </div>
            <div className="navbar1 my-auto flex list-none">
                <li className="mr-3"><a href="">Shop</a></li>
                <li className="mr-3"><a href="">Services</a></li>
                <li className="mr-3"><a href="">FAQ</a></li>
                <li className="mr-3"><a href="">About</a></li>
                <li className="mr-3"><a href="">Contact</a></li>
            </div>
            <div className=" my-auto flex items-center">
                <p className="mr-3">R100,00</p>
                <div className="accWrap mr-3">
                    <img className="w-[42px]" src={img2} alt="your image" />
                </div>
                <div className="cart-wrap ">
                    <img className="w-[29px]" src={img1} alt="cart" />
                </div>

            </div>
        </nav>

    )
}

export default Header
