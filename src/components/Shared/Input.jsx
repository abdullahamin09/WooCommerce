const Input = ({
    Label,
    id,
    important,
    type,
    inputClass = "",
    inputTagClass = "",
    mb,
    textSize = "",
    defaultValue,
    value,
    name,
    onChange,
    placeHolder = '',

}) => {
    return (
        <div className={`flex flex-col text-[20px]/[30px] font-medium ${inputClass}`}>
            {Label && <label className={` mb-${mb} !text-${textSize} ${ type === 'radio' ? 'cursor-pointer' :'' }`} id={id}>{Label} {important && <span className="text-[#FF0000]">*</span>}</label>}
            <input onChange={onChange} name={name} value={value} defaultValue={defaultValue} placeholder={placeHolder} className={`w-full border-[2px] h-[56px] px-[10px] focus:outline-none bg-[#fff] ${inputTagClass} ${ type === 'radio' ? 'cursor-pointer' :'' }`} type={type} id={id} required={important} />
        </div>
    )
}

export default Input