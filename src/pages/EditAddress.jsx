import Button from "../components/Shared/Button"
import Input from "../components/Shared/Input"


const EditAddress = ({ EditAddressProp }) => {
    return (
        <form className='editAddress flex flex-col gap-[29px] mb-[88px]'>
            <p className='text-[30px]/[42px] font-bold'>{EditAddressProp} Address</p>
            <div className="flex gap-[24px]">
                <Input
                    Label="First Name"
                    HtmlFor="firstName"
                    important
                    type="text"
                    mb='[20px]'
                    inputClass='flex-1'
                />
                <Input
                    Label="Last Name"
                    HtmlFor="lastName"
                    important
                    type="text"
                    mb='[20px]'
                    inputClass='flex-1'
                />
            </div>
            <Input
                Label="Company Name (optional)"
                HtmlFor="companyName"
                type="text"
                mb='[20px]'
            />
            <div className="flex flex-col gap-[24px]">
                <Input
                    Label="Country / Region"
                    HtmlFor="country"
                    type="text"
                    important
                    mb='[20px]'
                />
                <Input
                    Label="Street Address"
                    HtmlFor="streetAddress1"
                    type="text"
                    important
                    mb='[20px]'
                />
                <input className="h-[56px] text-[20px]/[30px] px-[10px] border-[2px] border-black focus:outline-none" type="text" name="streetAddress2" id="streetAddress2" />
                <Input
                    Label="Town / City"
                    HtmlFor="cityAddress"
                    type="text"
                    important
                    mb='[20px]'
                />
                <Input
                    Label="Province"
                    HtmlFor="province"
                    type="text"
                    important
                    mb='[20px]'
                />
                <Input
                    Label="Postcode / ZIP"
                    HtmlFor="Postcode"
                    type="number"
                    important
                    mb='[20px]'
                />
            </div>
            <Input
                Label="Phone"
                HtmlFor="phone"
                type="number"
                important
                mb='[20px]'
            />
            <Input
                Label="Email"
                HtmlFor="email"
                type="email"
                important
                mb='[20px]'
            />
            <Button
                content='Save address'
                btnClass='!w-[192px] !h-[44px] !text-[16px]/[24px]'
                btnType='submit'
            />
            
        </form >
    )
}

export default EditAddress
