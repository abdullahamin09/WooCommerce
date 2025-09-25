import { useState } from 'react'
import Card from '../components/Card'
import { Icon } from '@iconify/react'
import { Pagination, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const Shop = () => {
  const [selected, setSelected] = useState("By Relevance");
  const onChange = (page) => {
    console.log("Current Page:", page);
  };


  const items = [
    {
      label: 'By Relevance',
      key: '1',
      onClick: () => {
        console.log("By Relevance clicked");
        setSelected("By Relevance");
      },
    },
    {
      label: 'Default sorting',
      key: '2',
      onClick: () => {
        console.log("Default sorting clicked");
        setSelected("Default sorting");
      },

    },
    {
      label: '3rd menu item',
      key: '3',
      onClick: () => {
        console.log("Option 3 clicked");
        setSelected("Option 3");
      },
    }
  ];

  return (
    <div className='shop xl:mx-[80px] lg:mx-[100px] md:mx-[80px] 2xl:mx-[120px]'>
      <div className=" ">
        <p className='text-[48px]/[66px] font-bold '>Shop</p>
        <div className='flex justify-between items-center mt-5'>
          <p className='text-[20px]/[30px] font-medium '>Showing 1-16 of 44 results</p>
          <div className='dropdown-button'>
            <Dropdown menu={{ items }} trigger={['click']} placement="bottom">
              <Button>
                {selected}
                <DownOutlined />
              </Button>

            </Dropdown>
          </div>
        </div>
      </div>
      <div className="Card-wrap place-items-center  grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-between items-center gap-5 mb-10">
        <button className='flex gap-1 text-[20px]/[20px] font-bold text-[#2F8EFF] cursor-pointer'>
          <Icon icon="si:arrow-left-duotone" width="20" height="20" />
          Previous
        </button>
        <div className="shop-card-pagination">
          <Pagination
            defaultCurrent={2}
            total={90}
            pageSize={16}
            onChange={onChange}
            showSizeChanger={false}
          />

        </div>
        <button className='flex gap-1 text-[20px]/[20px] font-bold text-[#2F8EFF] cursor-pointer'>
          Next
          <Icon icon="si:arrow-right-duotone" width="20" height="20" />
        </button>
      </div>
    </div>
  )
}
export default Shop
