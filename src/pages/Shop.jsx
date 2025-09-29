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

        {products.map((product) => (
          <Card
            key={product.id}
            Ptitle={product.title}
            Pprice={product.price}
            Prating={product.rating}
            Pdetails={product.details}
          />
        ))}

        {/* <Card />
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
        <Card /> */}
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
