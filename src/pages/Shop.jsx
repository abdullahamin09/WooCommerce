import { useState } from 'react'
import Card from '../components/Cards/Card'
import { Icon } from '@iconify/react'
import { Pagination, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ActiveFilter from '../components/ActiveFilter';
import SearchButton from '../components/SearchButton';
import { Drawer } from 'antd';

const Shop = () => {
  const [selected, setSelected] = useState("By Relevance");
  const [open, setOpen] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  const products = [
    { id: 1, title: "Product Title", rating: 5, price: 19.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 2, title: "Product Title", rating: 4, price: 25.50, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 3, title: "Product Title", rating: 3, price: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 4, title: "Product Title", rating: 2, price: 49.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 5, title: "Product Title", rating: 1, price: 9.99, discountPrice: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 6, title: "Product Title", rating: 4, price: 35.75, discountPrice: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 7, title: "Product Title", rating: 5, price: 89.00, discountPrice: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 8, title: "Product Title", rating: 3, price: 22.10, discountPrice: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 9, title: "Product Title", rating: 2, price: 12.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 10, title: "Product Title", rating: 4, price: 65.40, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 11, title: "Product Title", rating: 5, price: 120.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 12, title: "Product Title", rating: 1, price: 8.50, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 13, title: "Product Title", rating: 3, price: 18.25, discountPrice: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 14, title: "Product Title", rating: 2, price: 42.00, discountPrice: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 15, title: "Product Title", rating: 4, price: 55.75, discountPrice: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 16, title: "Product Title", rating: 5, price: 99.99, discountPrice: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 17, title: "Product Title", rating: 5, price: 99.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 18, title: "Product Title", rating: 5, price: 99.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 19, title: "Product Title", rating: 5, price: 99.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 20, title: "Product Title", rating: 5, price: 99.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 21, title: "Product Title", rating: 5, price: 99.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const onChange = (page, pageSize) => {
    console.log("Current Page:", page);
    console.log("Page size:", pageSize);
    setCurrentPage(page);
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
    <div className="relative">
      <div className='shop mx-[30px] xl:mx-[80px] lg:mx-[100px] md:mx-[80px] 2xl:mx-[120px] mt-10'>
        <div className="activeFilter">
          <Drawer
            title="Apply Filter"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            width={400}
            open={open}
          // styles={{
          //   header: {
          //     font-size: 30px; 
          //   }
          // }}
          >
            <ActiveFilter />
          </Drawer>
        </div>
        <div className="max-md:hidden">
          {activeSearch ? (true &&
            <SearchButton />
          ) : ''}
        </div>

        <div className="flex justify-between items-center">
          <p className='text-[48px]/[66px] font-bold mb-5'>Shop</p>
          <div className='flex gap-[20px]'>
            <button className='max-md:hidden'>
              <Icon onClick={() => setActiveSearch(!activeSearch)} className='cursor-pointer' icon="material-symbols:search-rounded" width="30" height="30" />
            </button>
            <Icon onClick={showDrawer} className='cursor-pointer' icon="mage:filter-fill" width="30" height="30" style={{ color: '#000' }} />
          </div>
        </div>

        <div className="productShop">
          <div className=" ">
            <div className='flex justify-between max-sm:flex-col items-center'>
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
          <div className='Card-wrap place-items-center  grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-5 my-10 '>

            {currentProducts.map((product) => (
              <Card className='w-[224px]'
                key={product.id}
                Title={product.title}
                Price={product.price}
                Ratings={product.rating}
                Description={product.details}
                discountPrice={product.discountPrice}
              />
            ))}
          </div>
          <div className="flex relative flex-col justify-center items-center gap-5 mb-10">

            <div className="shop-card-pagination z-10">
              <Pagination
                defaultCurrent={1}
                total={products.length}
                pageSize={pageSize}
                onChange={onChange}
                showSizeChanger={false}
              />

            </div>
            <div className="buttons flex w-full md:absolute justify-between">
              <button className='flex gap-1 text-[20px]/[20px] font-bold text-[#2F8EFF] cursor-pointer'>
                <Icon icon="si:arrow-left-duotone" width="20" height="20" />
                Previous
              </button>
              <button className='flex gap-1 text-[20px]/[20px] font-bold text-[#2F8EFF] cursor-pointer'>
                Next
                <Icon icon="si:arrow-right-duotone" width="20" height="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Shop
