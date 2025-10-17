const Input = ({
    Label,
    HtmlFor,
    important,
    type,
    inputClass = "",
    inputTagClass = "",
    mb,
    textSize = "",
    defaultValue,
    Value,
    Name,
    placeHolder = '',

}) => {
    return (
        <div className={`flex flex-col text-[20px]/[30px] font-medium ${inputClass}`}>
            {Label && <label className={` mb-${mb} !text-${textSize} ${ type === 'radio' ? 'cursor-pointer' :'' }`} htmlFor={HtmlFor}>{Label} {important && <span className="text-[#FF0000]">*</span>}</label>}
            <input name={Name} value={Value} defaultValue={defaultValue} placeholder={placeHolder} className={`w-full border-[2px] h-[56px] px-[10px] focus:outline-none bg-[#fff] ${inputTagClass} ${ type === 'radio' ? 'cursor-pointer' :'' }`} type={type} id={HtmlFor} required={important} />
        </div>
    )
}

export default Input