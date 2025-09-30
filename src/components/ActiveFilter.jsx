import { Icon } from "@iconify/react"
import { Slider, Rate } from "antd"
import { useState } from "react"

const ActiveFilter = () => {
  const [priceRange, setPriceRange] = useState([3, 50])
  const handleChange = (value) => {
    setPriceRange(value);
  };
  return (
    <div className="activeFilter w-[361px] px-[20.5px] my-[20px] border-[2px] border-'#000000' flex flex-col justify-center items-center gap-[25px]">
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
          <button className="text-[#FF0000]">Clear All</button>
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
          <button className="text-[#FF0000]">Reset</button>
        </div>
      </div>
      <div className="flex flex-col w-full text-[16px]/[24px] font-medium">
        <p className="text-[30px]/[42px] font-bold mb-[20px]">Filter by stock status</p>
        <div className="flex items-start gap-[12px] mb-[10px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="inStock" id="" />
          <label className="w-fit" htmlFor="inStock">In stock</label>
        </div>
        <div className="flex items-start gap-[12px] mb-[10px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="onBackOrder" id="" />
          <label className="w-fit" htmlFor="onBackOrder">On back order</label>
        </div>
        <div className="flex items-start gap-[12px] mb-[10px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="outOfStock" id="" />
          <label className="w-fit" htmlFor="outOfStock">Out of stock</label>
        </div>
        <div className="flex justify-end">
          <button className="text-[#FF0000]">Reset</button>
        </div>
      </div>
      <div className="flex flex-col w-full text-[16px]/[24px] font-medium">
        <p className="text-[30px]/[42px] font-bold mb-[20px]">Filter by attribute</p>
        <div className="flex items-start gap-[12px] mb-[10px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="1Site" id="" />
          <label className="w-fit" htmlFor="1Site">1 site</label>
        </div>
        <div className="flex items-start gap-[12px] mb-[10px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="10Sites" id="" />
          <label className="w-fit" htmlFor="10Sites">10 sites</label>
        </div>
        <div className="flex items-start gap-[12px] mb-[10px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="outOfStock" id="" />
          <label className="w-fit" htmlFor="5Sites">5 sites</label>
        </div>
        <div className="flex justify-end">
          <button className="text-[#FF0000]">Reset</button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-[20px] mb-[20px]">
        <p>Filter by rating</p>
        <div className="flex gap-[12px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="R5" id="" />
          <label className="w-fit" htmlFor="R5"><Rate value={5} /></label>
        </div>
        <div className="flex gap-[12px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="R4" id="" />
          <label className="w-fit" htmlFor="R4"><Rate value={4} /></label>
        </div>
        <div className="flex gap-[12px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="R3" id="" />
          <label className="w-fit" htmlFor="R3"><Rate value={3} /></label>
        </div>
        <div className="flex gap-[12px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="R2" id="" />
          <label className="w-fit" htmlFor="R2"><Rate value={2} /></label>
        </div>
        <div className="flex gap-[12px]">
          <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="R1" id="" />
          <label className="w-fit" htmlFor="R1"><Rate value={1} /></label>
        </div>
        <div className="flex justify-end">
          <button className="text-[#FF0000]">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default ActiveFilter
