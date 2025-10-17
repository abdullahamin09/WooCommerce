import { Icon } from "@iconify/react";

const Button = ({
    content,
    btnClass = "",
    iconProp,
    btnType,

}) => {
    return (
        <button type={btnType} className={`bg-sky-500 flex justify-center items-center hover:bg-sky-600 h-[60px] w-full font-bold text-[24px]/[34px] text-white px-auto cursor-pointer ${btnClass}`}>
            {content}
            {iconProp && (
                <Icon icon={iconProp} width="20" height="20" />
            )}
        </button>
    )
}

export default Button