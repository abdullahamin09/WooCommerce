

const Input = ({
    Label,
    HtmlFor,
    important,
    type,
    inputClass = "",
    mb,
    textSize = ""

}) => {
    return (
        <div className={`flex flex-col ${inputClass}`}>
            <label className={`text-[20px]/[30px] font-medium mb-${mb} !text-${textSize}`} htmlFor={HtmlFor}>{Label} {important && <span className="text-[#FF0000]">*</span>}</label>
            <input className='w-full border-[2px] h-[56px] px-[10px] focus:outline-none bg-[#fff]' type={type} name={type} id={HtmlFor} required={important} />
        </div>
    )
}

export default Input