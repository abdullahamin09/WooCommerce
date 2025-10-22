import { useState } from "react";
import { Icon } from "@iconify/react";

const Input = ({
    Label,
    id,
    important,
    type = 'text',
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
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;
    return (
        <div className={`flex flex-col text-[20px]/[30px] font-medium ${inputClass}`}>
            {Label && <label className={` mb-${mb} !text-${textSize} ${type === 'radio' ? 'cursor-pointer' : ''}`} htmlFor={id}>{Label} {important && <span className="text-[#FF0000]">*</span>}</label>}
            <div className="relative">
                <input onChange={onChange} name={name} value={value} defaultValue={defaultValue} placeholder={placeHolder} className={`w-full border-[2px] h-[56px] px-[10px] focus:outline-none bg-[#fff] ${inputTagClass} ${type === 'radio' ? 'cursor-pointer' : ''}`} type={inputType} id={id} required={important} />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                        {showPassword ? <Icon icon="iconamoon:eye-off" width="24" height="24" /> : <Icon icon="mage:eye" width="24" height="24" />}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Input