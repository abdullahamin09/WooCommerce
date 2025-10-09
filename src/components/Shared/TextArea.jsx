import React from 'react'

const TextArea = ({
    Label,
    id,
    Name,
    important = false,
    areaClass,

}) => {
    return (
        <div className='flex flex-col items-start gap-[12px] mb-[10px] text-[20px]/[30px] font-medium '>
            <label className="" htmlFor={id}>{Label} {important && <span className='text-[#FF0000]'>*</span>}</label>
            <textarea className={`border-[2px] border-[#000000] w-full h-[180px] resize-none font-normal p-[6px] focus:outline-none bg-white ${areaClass}`} required={important} name={Name} id={id}></textarea>
        </div>
    )
}

export default TextArea
