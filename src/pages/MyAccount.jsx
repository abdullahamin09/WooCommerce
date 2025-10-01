import { Table } from "antd"
import DownloadSMyAccount from "../components/DownloadSMyAccount";
import AddressMyAcc from "../components/AddressMyAcc";
import { useState } from "react";
import EditAddress from "./EditAddress";
import AccountDetails from "./AccountDetails";
import OrderDetails from "../components/OrderDetails";

const MyAccount = () => {
  const [activePage, setActivePage] = useState("dashboard")

  const columns = [
    { title: 'order', dataIndex: 'order', key: 'order' },
    { title: 'date', dataIndex: 'date', key: 'date' },
    { title: 'status', dataIndex: 'status', key: 'status' },
    { title: 'total', dataIndex: 'total', key: 'total' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <button
      onClick={() => setActivePage('orderDetails')}
        className="w-[117px] h-[44px] bg-[#2F8EFF] text-white"
      >View</button>,
    },
  ];
  const data = [
    {
      key: 1,
      order: '#972',
      date: '9 May 2023',
      status: 'Cancelled',
      total: 'R2030,00 for 20 items',
    },
    {
      key: 2,
      order: '#973',
      date: '9 May 2023',
      status: 'Cancelled',
      total: 'R2030,00 for 20 items',
    },
    {
      key: 3,
      order: '#675',
      date: '9 May 2023',
      status: 'Cancelled',
      total: 'R2030,00 for 20 items',
    },
    {
      key: 4,
      order: '#678',
      date: '9 May 2023',
      status: 'Cancelled',
      total: 'R2030,00 for 20 items',
    },

  ];


  return (
    <div className=' mx-[120px]'>
      <div className='text-[12px]/[18px] font-medium flex mb-[10px]'>
        <p className='underline'>Home</p><span className='text-[#9B9B9B] pl-[2px] pr-[4px]'>/</span><p className='text-[#9B9B9B]'>My Account</p>
      </div>
      <h1 className='text-[48px]/[66px] font-bold mb-[30px]'>My Account</h1>
      <div className="flex gap-[20px] mb-[60px]">
        <div className="sidebar">
          <ul className='text-[20px]/[30px] font-bold'>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-[#000000] flex items-center pl-[30px] ${activePage === 'dashboard' ? 'bg-[#000000] text-[white]' : ''}`}
              onClick={() => setActivePage('dashboard')} >
              Dashboard</li>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${activePage === 'order' ? 'bg-[#000000] text-[white]' : ''}`}
              onClick={() => setActivePage('order')} >
              Order</li>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${activePage === 'downloads' ? 'bg-[#000000] text-[white]' : ''}`}
              onClick={() => setActivePage('downloads')} >
              Downloads</li>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${activePage === 'editAddress' ? 'bg-[#000000] text-[white]' : ''}`}
              onClick={() => setActivePage('editAddress')} >
              Edit address</li>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${activePage === 'accountDetails' ? 'bg-[#000000] text-[white]' : ''}`}
              onClick={() => setActivePage('accountDetails')} >
              Account details</li>
            <li
              className={`h-[78px] w-[285px] border-[1px] border-t-0 border-[#000000] flex items-center pl-[30px] ${activePage === 'logout' ? 'bg-[#000000] text-[white]' : ''}`}
              onClick={() => setActivePage('logout')} >
              Logout</li>
          </ul>
        </div>
        <div className="details w-full">
          <div className="myAccDets">
            {activePage === 'dashboard' && (
              <div>
                <div className="text-[20px]/[30px] font-bold bg-[#F7F6F7] p-[30px] border-[2px] border-[#2F8EFF]">
                  <p>Hello lightspeed (not lightspeed? <span className='text-[#2F8EFF] underline'>Log Out</span>)</p>
                  <p>From your account dashboard you can view your <span className='text-[#2F8EFF] underline'>recent orders</span>, manage your <span className='text-[#2F8EFF] underline'>shipping and billing addresses</span>, and <span className='text-[#2F8EFF] underline'>edit your password and account details</span>.</p>
                </div>
                <div className="flex justify-between text-[20px]/[30px] font-bold bg-[#F7F6F7] p-[30px] border-[2px] border-[#2F8EFF]">
                  <div className='flex gap-[10px] items-center'>
                    <div className='w-[20px] h-[20px] bg-[#D9D9D9] border border-[#D9D9D9] rounded-[100%] '></div>
                    <p className='font-medium'>No order has been made yet.</p>
                  </div>
                  <button className='underline text-[#2F8EFF]'>Browse products</button>
                </div>
              </div>
            )}
            {activePage === 'order' && (
              <div className="order my-[30px]">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                />
              </div>
            )}
            {activePage === 'downloads' && (
              <DownloadSMyAccount />

            )}
            {activePage === 'editAddress' && (
              <AddressMyAcc onAction={setActivePage} />
            )}
            {activePage === 'editBillingingAddress' && (
              <EditAddress EditAddressProp='Billing' />
            )}
            {activePage === 'editShippingAddress' && (
              <EditAddress EditAddressProp='Shipping' />
            )}
            {activePage === 'accountDetails' && (
              <AccountDetails />
            )}
            {activePage === 'orderDetails' && (
              <OrderDetails />
            )}

          </div>
        </div>
      </div>

    </div>
  )
}

export default MyAccount
