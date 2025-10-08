import { Icon } from "@iconify/react"
import { Slider, Rate } from "antd"
import { useState } from "react"
import Checkbox from "./Shared/Checkbox"

const ActiveFilter = () => {
  const [priceRange, setPriceRange] = useState([3, 100])
  const [checkboxes, setCheckboxes] = useState({
    inStock: false,
    onBackOrder: false,
    outOfStock: false,
    Site1: false,
    Site10: false,
    sites5: false,
    R1: false,
    R2: false,
    R3: false,
    R4: false,
    R5: false,
  });

  const handleChange = (value) => {
    setPriceRange(value);
  };
  const handleClick = () => {
    setPriceRange([3, 100]);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const resetStockStatus = () => {
    setCheckboxes({
      inStock: false,
      onBackOrder: false,
      outOfStock: false,
    });
  }
  const resetAttributes = () => {
    setCheckboxes({
      Site1: false,
      Site10: false,
      sites5: false,
    });
  }
  const resetRating = () => {
    setCheckboxes({
      R1: false,
      R2: false,
      R3: false,
      R4: false,
      R5: false,
    });
  }
  const clearAllFilter = () => {
    setCheckboxes({
      inStock: false,
      onBackOrder: false,
      outOfStock: false,
      Site1: false,
      Site10: false,
      sites5: false,
      R1: false,
      R2: false,
      R3: false,
      R4: false,
      R5: false,
    })
  }
  return (
    <div className="activeFilter w-full px-[20.5px] my-[20px] border-[2px] border-'#000000' flex flex-col justify-center items-center gap-[25px]">
      <div className="flex w-full flex-col">
        <p className="text-[30px]/[42px] font-bold mb-[10px]">Active filters</p>
        <div className="flex gap-[20px] mb-[20px]">
          <div className="flex items-center gap-[5px] border border-[#000000] rounded-[40px] h-[30px] border-[1px] px-[8px] py[7px] ">
            <p className="text-[12px]/[18px] font-medium">In stock</p>
            <div className="bg-[#e0e0e0] w-[16px] h-[16px] rounded-full flex items-center justify-center ml-2 cursor-pointer">
              <Icon icon="oui:cross" width="8" height="8" style={{ color: '#000000' }} />
            </div>
          </div>
          <div className="flex items-center gap-[5px] border border-[#000000] rounded-[40px] h-[30px] border-[1px] px-[8px] py[7px] ">
            <p className="text-[12px]/[18px] font-medium">1 site</p>
            <div className="bg-[#e0e0e0] w-[16px] h-[16px] rounded-full flex items-center justify-center ml-2 cursor-pointer">
              <Icon icon="oui:cross" width="8" height="8" style={{ color: '#000000' }} />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={clearAllFilter} className="text-[#FF0000] text-[16px]/[24px] font-medium cursor-pointer">Clear All</button>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-[30px]/[42px] mb-[20px] font-bold">Filter by price</p>

        {/* <div className="relative mb-[20px] border-b border-[#000000] border-2px mx-[10px]">
          <div className="absolute left-[-10px] top-[-5px] border border-[#000000] border-2px rounded-[100%] w-[10.5px] h-[10px]"></div>
          <div className="absolute right-[-10px] top-[-5px] border border-[#000000] border-2px rounded-[100%] w-[10.5px] h-[10px]"></div>
        </div> */}
        <div className="activeFilterSlider">
          <Slider range
            min={3}
            max={100}
            value={priceRange}
            onChange={handleChange}
            tooltip={{
              formatter: (value) => `R${value * 50}`
            }}
          />
        </div>
        <div className="flex justify-between mb-[10px]">
          <p className="text-[16px]/[24px] font-bold w-[63.5px] h-[38px] border border-1px border-[#000000] flex items-center justify-center">R{priceRange[0] * 50}</p>
          <p className="text-[16px]/[24px] font-bold w-[63.5px] h-[38px] border border-1px border-[#000000] flex items-center justify-center">R{priceRange[1] * 50}</p>
        </div>
        <div className="flex justify-end">
          <button type='button' onClick={handleClick} className="text-[#FF0000] text-[16px]/[24px] font-medium cursor-pointer">Reset</button>
        </div>
      </div>
      <div className="flex flex-col w-full text-[16px]/[24px] font-medium">
        <p className="text-[30px]/[42px] font-bold mb-[20px]">Filter by stock status</p>
        <Checkbox
          id="inStock"
          name="inStock"
          label="In stock"
          numbers='1'
          checked={checkboxes.inStock}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="onBackOrder"
          name="onBackOrder"
          label="On back order"
          numbers='1'
          checked={checkboxes.onBackOrder}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="outOfStock"
          name="outOfStock"
          label="Out of stock"
          numbers='1'
          checked={checkboxes.outOfStock}
          onChange={handleCheckboxChange}
        />
        <div className="flex justify-end">
          <button type='button' onClick={resetStockStatus} className="text-[#FF0000] cursor-pointer">Reset</button>
        </div>
      </div>
      <div className="flex flex-col w-full text-[16px]/[24px] font-medium">
        <p className="text-[30px]/[42px] font-bold mb-[20px]">Filter by attribute</p>
        <Checkbox
          id="Site1"
          name="Site1"
          label="1 site"
          numbers='1'
          checked={checkboxes.Site1}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="Site10"
          name="Site10"
          label="10 sites"
          numbers='1'
          checked={checkboxes.Site10}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="sites5"
          name="sites5"
          label="5 sites"
          numbers='1'
          checked={checkboxes.sites5}
          onChange={handleCheckboxChange}
        />
        <div className="flex justify-end">
          <button type='button' onClick={resetAttributes} className="text-[#FF0000] cursor-pointer">Reset</button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-[20px] mb-[20px]">
        <p className="text-[30px]/[42px] mb-[20px] font-bold">Filter by rating</p>
        <Checkbox
          id="R5"
          name="R5"
          label={<Rate value={5} disabled />}
          numbers='1'
          checked={checkboxes.R5}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="R4"
          name="R4"
          label={<Rate value={4} disabled />}
          numbers='1'
          checked={checkboxes.R4}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="R3"
          name="R3"
          label={<Rate value={3} disabled />}
          numbers='1'
          checked={checkboxes.R3}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="R2"
          name="R2"
          label={<Rate value={2} disabled />}
          numbers='1'
          checked={checkboxes.R2}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="R1"
          name="R1"
          label={<Rate value={1} disabled />}
          numbers='1'
          checked={checkboxes.R1}
          onChange={handleCheckboxChange}
        />
        <div className="flex justify-end">
          <button type='button' onClick={resetRating} className="text-[#FF0000] text-[16px]/[24px] font-medium cursor-pointer">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default ActiveFilter
