import Button from "../components/Shared/Button"
import Input from "../components/Shared/Input"

const AccountDetails = () => {
    return (
        <div className=' mt-10'>
            <form className='editAddress flex flex-col gap-[29px] mb-[88px]'>
                <div className="flex gap-[24px]">
                    <Input
                        Label="First Name"
                        HtmlFor="firstName"
                        important
                        type="text"
                        mb='[20px]'
                        inputClass='flex-1'
                        textSize="[20px]/[30px]"
                    />
                    <Input
                        Label="Last Name"
                        HtmlFor="lastName"
                        important
                        type="text"
                        mb='[20px]'
                        inputClass='flex-1'
                        textSize="[20px]/[30px]"
                    />
                </div>
                <Input
                    Label="Display name"
                    HtmlFor="displayName"
                    important
                    type="text"
                    mb='[20px]'
                    textSize="[20px]/[30px]"
                />
                <p className='text-[12px]/[18px] font-medium mt-[10px]'>This will be how your name will be displayed in the account section and in reviews</p>
                <Input
                    Label="Email address"
                    HtmlFor="email"
                    important
                    type="email"
                    mb='[20px]'
                    textSize="[20px]/[30px]"
                />
                <div className="flex flex-col gap-[24px] border-[2px] border-[#B4B7C1] p-[20px] pt-[10px]">
                    <p className='text-[20px]/[30px] font-bold'>Password change</p>
                    <Input
                        Label="Current password (leave blank to leave unchanged)"
                        HtmlFor="currentPassword"
                        important
                        type="password"
                        mb='[20px]'
                        textSize="[20px]/[30px]"
                    />
                    <Input
                        Label="New password (leave blank to leave unchanged)"
                        HtmlFor="newPassword"
                        important
                        type="password"
                        mb='[20px]'
                        textSize="[20px]/[30px]"
                    />
                    <Input
                        Label="Confirm new password"
                        HtmlFor="confirmPassword"
                        important
                        type="password"
                        mb='[20px]'
                        textSize="[20px]/[30px]"
                    />
                </div>
                <Button
                    content='Save address'
                    btnClass='!w-[192px] !h-[44px] !text-[16px]/[24px]'
                    btnType='submit'
                />
            </form>
        </div>
    )
}

export default AccountDetails
