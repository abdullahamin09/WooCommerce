import DownloadSMyAccount from "../components/DownloadSMyAccount";
import AddressMyAcc from "../components/AddressMyAcc";
import EditAddress from "./EditAddress";
import AccountDetails from "./AccountDetails";
import OrderDetails from "../components/OrderDetails";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MyAccDashboard from "../components/MyAccDashboard";
import MyAccOrder from "../components/MyAccOrder";
import axios from "axios";
import { useState, useEffect } from "react";
import { message } from "antd";

const MyAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const [messageApi, contextHolder] = message.useMessage();


  // Call Secure Api
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/profile", {
          withCredentials: true, // send cookies for auth
        });
        console.log("User Profile:", response.data);
        setUser(response.data.user);
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    };

    fetchProfile();
  }, []);
  if (!user) return <p>Loading...</p>;

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      messageApi.open({
        type: 'success',
        content: 'Logging Out',
      });
      console.log("Response:", res.data);
      navigate('/login');
    } catch (error) {
      console.log("Logout Error:", error);
      alert("Logout Failed");
    }
  };


  const getPageTitle = () => {
    if (currentPath === '/myaccount/' || currentPath === '/myaccount') return 'My Account';
    if (currentPath.startsWith('/myaccount/order')) return 'My Account - Orders';
    if (currentPath.startsWith('/myaccount/orderlorderlist')) return 'My Account - Order #972';
    if (currentPath.startsWith('/myaccount/downloads')) return 'My Account - Downloads';
    if (currentPath.startsWith('/myaccount/editaddress')) return 'My Account - Addresses';
    if (currentPath.startsWith('/myaccount/billing')) return 'My Account - Billing Address';
    if (currentPath.startsWith('/myaccount/shipping')) return 'My Account - Shipping Address';
    if (currentPath.startsWith('/myaccount/accountdetails')) return 'My Account - Account Details';
    return 'My Account';
  };

  const getPageLinks = () => {
    if (currentPath === '/myaccount/' || currentPath === '/myaccount') {
      return (
        <>
          <p className='underline'>Home</p>
          <span className='text-[#9B9B9B] pl-[2px] pr-[4px]'>/</span>
          <p className='text-[#9B9B9B]'>My Account</p>
        </>
      );
    }

    let subPage = '';
    if (currentPath.startsWith('/myaccount/order')) subPage = 'Orders';
    else if (currentPath.startsWith('/myaccount/order/orderlist')) subPage = 'Orders';
    else if (currentPath.startsWith('/myaccount/downloads')) subPage = 'Downloads';
    else if (currentPath.startsWith('/myaccount/editaddress')) subPage = 'edit-address';
    else if (currentPath.startsWith('/myaccount/shipping')) subPage = 'edit-address';
    else if (currentPath.startsWith('/myaccount/billing')) subPage = 'edit-address';
    else if (currentPath.startsWith('/myaccount/accountdetails')) subPage = 'Account Details';

    return (
      <>
        <Link to='/' className='underline'>Home</Link>
        <span className='text-[#9B9B9B] px-[4px]'>/</span>
        <Link to='/myaccount' className='underline'>My Account</Link>
        <span className='text-[#9B9B9B] px-[4px]'>/</span>
        <p className='text-[#9B9B9B]'>{subPage}</p>
      </>
    );
  };

  return (
    <div className=' mx-[120px] mt-10'>
      {contextHolder}
      {/* <div className='text-[12px]/[18px] font-medium flex mb-[10px]'>
        <p className='underline'>Home</p><span className='text-[#9B9B9B] pl-[2px] pr-[4px]'>/</span><p className='text-[#9B9B9B]'>My Account</p>
      </div> */}
      <div className='text-[12px]/[18px] font-medium flex mb-[10px]'>
        {getPageLinks()}
      </div>
      <h1 className='text-[48px]/[66px] font-bold mb-[30px]'>{getPageTitle()}</h1>
      <div className="flex gap-[20px] mb-[60px]">
        <div className="sidebar">
          <ul className='text-[20px]/[30px] font-bold'>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-[#000000] pl-[30px] ${(currentPath === '/myaccount/') || (currentPath === '/myaccount') ? 'bg-[#000000] text-[white]' : ''}`}
            >
              <Link to='/myaccount/' className="w-full h-full flex items-center">Dashboard</Link>
            </li>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${currentPath.startsWith('/myaccount/order') ? 'bg-[#000000] text-[white]' : ''}`}
            >
              <Link to='/myaccount/order' className="w-full h-full flex items-center">Order</Link>
            </li>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${currentPath.startsWith('/myaccount/downloads') ? 'bg-[#000000] text-[white]' : ''}`}
            >
              <Link to='/myaccount/downloads' className="w-full h-full flex items-center">Downloads</Link>
            </li>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${(currentPath.startsWith('/myaccount/editaddress')) || (currentPath.startsWith('/myaccount/shipping')) || (currentPath.startsWith('/myaccount/billing')) ? 'bg-[#000000] text-[white]' : ''}`}
            >
              <Link to='/myaccount/editaddress' className="w-full h-full flex items-center">Edit address</Link>
            </li>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${currentPath.startsWith('/myaccount/accountdetails') ? 'bg-[#000000] text-[white]' : ''}`}
            >
              <Link to='/myaccount/accountdetails' className="w-full h-full flex items-center">Account details</Link>
            </li>
            <li onClick={handleLogout}
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${currentPath.startsWith('/logout') ? 'bg-[#000000] text-[white]' : ''}`}
            >
              <Link className="w-full h-full flex items-center bg-">Logout</Link>

            </li>
          </ul>
        </div>
        <div className="details w-full">
          <div className="myAccDets">
            <Routes>
              <Route exact path='/' element={<MyAccDashboard />} />
              <Route path='/order' element={<MyAccOrder />} />
              <Route path='/order/orderlist' element={<OrderDetails />} />
              <Route path='/downloads' element={<DownloadSMyAccount />} />
              <Route path='/editaddress/' element={<AddressMyAcc />} />
              <Route path='/billing' element={<EditAddress EditAddressProp='Billing' />} />
              <Route path='/shipping' element={<EditAddress EditAddressProp='Shipping' />} />
              <Route path='/accountdetails' element={<AccountDetails />} />
            </Routes>

          </div>
        </div>
      </div>

    </div>
  )
}

export default MyAccount
