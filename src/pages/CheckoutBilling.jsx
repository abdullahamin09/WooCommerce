import { Link } from "react-router-dom"
import EditAddress from "./EditAddress"
import Button from "../components/Shared/Button"
import Checkbox from "../components/Shared/Checkbox"
import Input from "../components/Shared/Input"
import TextArea from "../components/Shared/TextArea"

const CheckoutBilling = () => {
  return (
    <div className="mx-[100px] checkoutBilling my-[70px]">
      <p className="text-[48px]/[66px] font-bold mb-[20px]">Checkout</p>
      <div className="text-[20px]/[30px] font-bold bg-[#F7F6F7] p-[30px] border-[2px] border-[#2F8EFF] mb-[60px]">
        <div className='flex gap-[10px] items-center'>
          <div className='w-[20px] h-[20px] bg-[#D9D9D9] border border-[#D9D9D9] rounded-[100%] '></div>
          <p className='font-medium'>Have a coupon? </p>
          <button className='underline text-[#2F8EFF]'>Click here to enter your code</button>
        </div>
      </div>
      <div className="billing flex gap-[50px]">
        <div className="left flex-1">
          <EditAddress EditAddressProp='Billing' />
        </div>
        <div className="right flex-1 flex flex-col gap-[40px]">
          <Checkbox
            label="Deliver to a different address?"
            id="deliveryAddress"
            name="deliveryAddress"
            checkboxClass='!text-[30px]/[42px] !font-bold gap-[12px]'
          />
          <TextArea
            Label="Order notes (optional)"
            id='orderNotes'
            Name='orderNotes'
          />
        </div>
      </div>
      <div className="billingYourOrder mb-[40px]">
        <p className="text-[30px]/[42px] font-bold">Your order</p>
        <table className="border-[2px] border-[#50575E] md:w-full w-[1100px] text-left font-bold text-[20px]/[30px] my-[40px]">
          <thead>
            <tr className="bg-[#50575E] text-white h-[66px] font-bold">
              <th className="pl-[20px] w-[50%]">Product</th>
              <th className="pl-[20px] w-[50%]">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[2px] border-[#50575E] data-row h-[66px] py-[18px]">
              <td className="pl-[20px] font-bold">
                <p>LSX Mega Menus x 1</p>
              </td>
              <td className="pl-[20px]">
                <p>R100,00</p>
              </td>
            </tr>
            <tr className="border-b-[2px] border-[#50575E] data-row h-[66px] py-[18px]">
              <td className="pl-[20px] font-medium">
                <p>Subtotal</p>
              </td>
              <td className="pl-[20px]">
                <p>R100,00</p>
              </td>
            </tr>
            <tr className="border-b-[2px] border-[#50575E] data-row py-[18px]">
              <td className="pl-[20px] font-medium">
                <p>Shipping</p>
              </td>
              <td className="pl-[20px] text-[20px]/[30px] font-medium py-[10px]">
                <Input
                  Label='Free shipping'
                  HtmlFor="freeShipping"
                  Name='shipping'
                  type="radio"
                  inputTagClass="!w-[16px] !h-[16px] mr-[9px]"
                  inputClass="flex-row-reverse justify-end items-center mb-[10px]"
                  Value='freeShipping'
                />
                <Input
                  Label='Local pickup'
                  HtmlFor="localPickup"
                  Name='shipping'
                  type="radio"
                  inputTagClass="!w-[16px] !h-[16px] mr-[9px]"
                  inputClass="flex-row-reverse justify-end items-center mb-[10px]"
                  Value='localPickup'
                />
                <Input
                  Label='Flat rate: R50'
                  HtmlFor="flatRate"
                  Name='shipping'
                  type="radio"
                  inputTagClass="!w-[16px] !h-[16px] mr-[9px]"
                  inputClass="flex-row-reverse justify-end items-center mb-[10px]"
                  Value='flatRate'
                />
              </td>
            </tr>
            <tr className="data-row h-[66px] py-[18px]">
              <td className="pl-[20px]">
                <p>Total</p>
              </td>
              <td className="pl-[20px]">
                <p>R100,00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="paymentDetails bg-[#EBE9EB] w-full text-[20px]/[30px] font-medium pt-[10px] pb-[30px] px-[20px] mb-[60px]">
        <div className="border-b-[1px] my-[10px] border-[#D3CED2]">
          <Input
            Label='Direct bank transfer'
            HtmlFor="bankTransfer"
            Name='payments'
            type="radio"
            inputTagClass="!w-[13px] !h-[13px] mr-[9px]"
            inputClass="flex-row-reverse justify-end items-center mb-[10px]"
            Value='bankTransfer'
          />
          <div className="my-[20px] px-[20px] py-[24px] bg-[#DFDCDE]">
            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          </div>
          <Input
            Label='Cheque payments'
            HtmlFor="chequePayments"
            Name='payments'
            type="radio"
            inputTagClass="!w-[13px] !h-[13px] mr-[9px]"
            inputClass="flex-row-reverse justify-end items-center mb-[10px]"
            Value='chequePayments'
          />
          <Input
            Label='Cash on delivery'
            HtmlFor="cashOnDelivery"
            Name='payments'
            type="radio"
            inputTagClass="!w-[13px] !h-[13px] mr-[9px]"
            inputClass="flex-row-reverse justify-end items-center mb-[10px]"
            Value='cashOnDelivery'
          />
        </div>
        <div>
          <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-[#2F8EFF] underline">privacy policy</span></p>

          <Checkbox
            id="termsAndConditions"
            name="termsAndConditions"
            label={<p>I have read and agree to the website <a className="underline">terms and conditions</a></p>}
            checkboxClass='my-[20px]'
          />
          <div className="flex justify-end">
            <Link to='/checkoutconfirmed'>
              <Button
                content='Place Order'
                btnClass='!h-[75px] !w-[300px] !bg-[#FF7A00]'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutBilling
