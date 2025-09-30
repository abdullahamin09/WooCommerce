import { useState } from 'react'
import Card from '../components/Card'
import { Icon } from '@iconify/react'
import { Pagination, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ActiveFilter from '../components/ActiveFilter';

const Shop = () => {
  const [selected, setSelected] = useState("By Relevance");
  const [activeFilter, setActiveFilter] = useState(false);
  const onChange = (page) => {
    console.log("Current Page:", page);
  };

  const products = [
    { id: 1, title: "Product Title", rating: 5, price: 19.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 2, title: "Product Title", rating: 4, price: 25.50, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 3, title: "Product Title", rating: 3, price: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 4, title: "Product Title", rating: 2, price: 49.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 5, title: "Product Title", rating: 1, price: 9.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 6, title: "Product Title", rating: 4, price: 35.75, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 7, title: "Product Title", rating: 5, price: 89.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 8, title: "Product Title", rating: 3, price: 22.10, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 9, title: "Product Title", rating: 2, price: 12.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 10, title: "Product Title", rating: 4, price: 65.40, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 11, title: "Product Title", rating: 5, price: 120.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 12, title: "Product Title", rating: 1, price: 8.50, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 13, title: "Product Title", rating: 3, price: 18.25, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 14, title: "Product Title", rating: 2, price: 42.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 15, title: "Product Title", rating: 4, price: 55.75, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 16, title: "Product Title", rating: 5, price: 99.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
  ];


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
      <div className="flex justify-between items-center">
      <p className='text-[48px]/[66px] font-bold mb-5'>Shop</p>
      <Icon onClick={() => setActiveFilter(!activeFilter)} className='cursor-pointer' icon="mage:filter-fill" width="30" height="30" style={{ color: '#000'}} />
      </div>
      <div className={` ${activeFilter ? 'flex' : 'flex-none'} `}>
        <div className="activeFilter">
          {activeFilter ? (true &&
            <div className={`mr-[60px] 2xl:mr-[120px] top-0 left-0 h-full bg-white transform transition-transform duration-500 ease-in-out
        ${activeFilter ? "translate-x-0" : "-translate-x-full"}`}>
              <ActiveFilter />
            </div>
          ) : ('')}
        </div>
        <div className="productShop">
          <div className=" ">
            <div className='flex justify-between items-center'>
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
          {/* {` ${activeFilter ? 'flex' : 'flex-none'} `} */}
          <div className={`Card-wrap place-items-center  grid sm:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-5 my-10 ${activeFilter ? 'xl:grid-cols-2 lg:grid-cols-2 gap-20' : 'xl:grid-cols-4 lg:grid-cols-3'}`}>

            {products.map((product) => (
              <Card className={`w-[224px] ${activeFilter ? 'xl:w-[224px]' : 'xl:w-[285px]'}`}
                key={product.id}
                Ptitle={product.title}
                Pprice={product.price}
                Prating={product.rating}
                Pdetails={product.details}
              />
            ))}
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
      </div>
    </div>
  )
}
export default Shop
