import Button from "./Shared/Button"


const FeaturedCategory = ({ Features, Details }) => {
    return (
        <div className='bg-[#323649] flex justify-center items-center text-white '>
            <div className="max-w-[640px] flex justify-center items-center flex-col my-[170px] md:mt-[80px] md:mb-[92px]">
                <p className="text-[30px]/[42px] font-bold mb-[20px]">{Features}</p>
                <p className="text-[24px]/[34px] font-medium mb-[30px] text-center">{Details}</p>
                <p className="text-[20px]/[30px] mb-[30px]">
                    <span className="font-bold">R150,00 – R400,00</span>
                    <span className="font-medium">incl VAT </span>
                </p>
                {/* <button className="text-[24px]/[34px] font-bold w-[250px] h-[60px] lg:w-[285px] bg-[#2F8EFF] cursor-pointer">Read more</button> */}
                <Button
                    content='Read more'
                    btnClass='!w-[250px]'
                />
            </div>
        </div>
    )
}

export default FeaturedCategory
