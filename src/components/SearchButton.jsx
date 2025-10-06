import React from 'react'

const SearchButton = () => {
  return (
    <div className="flex justify-center items-center flex-col text-[48px]/[66px] font-bold space-y-8">
      <p>Search Results for “search phrase”</p>
      <div className="search w-[400px] h-[52px] border-[2px] border-black">
        <label className='text-[20px]/[30px] h-full flex ' htmlFor="search">
          <input type="text" className="h-full w-full focus:outline-none pl-[10px]" id='search' />
          <button className='w-[120px] text-white bg-black h-full py-[9px] px-[5px] text-center cursor-pointer'>Search</button>
        </label>
      </div>
    </div>
  )
}

export default SearchButton
