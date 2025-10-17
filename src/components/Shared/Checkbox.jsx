const Checkbox = ({ id, name, label, numbers, required = false, checked, onChange, checkboxClass }) => {
    return (
        <div className={`flex items-center gap-[12px] mb-[10px] text-[16px]/[24px] font-medium ${checkboxClass}`}>
            <input
                type="checkbox"
                id={id}
                name={name}
                required={required}
                checked= {checked}
                onChange={onChange}
                className="
                    w-[26px] h-[26px]
                    bg-white
                appearance-none
                border-2 border-black
                rounded-[4px]
                cursor-pointer
                relative
                checked:bg-white checked:border-black
                checked:after:content-['✓']
                checked:after:text-black
                checked:after:absolute
                checked:after:top-[50%]
                checked:after:left-[50%]
                checked:after:-translate-x-1/2
                checked:after:-translate-y-1/2
                checked:after:text-[18px]
                checked:after:font-bold
                "
            />
            <label
                htmlFor={id}
                className="w-fit cursor-pointer select-none"
            >
                {label} {numbers &&<span className="ml-[12px]">({numbers})</span>}
            </label>
        </div>
    )
}

export default Checkbox