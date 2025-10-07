import { Link } from "react-router-dom"
import EditAddress from "./EditAddress"
import Button from "../components/Shared/Button"

const CheckoutBilling = () => {
  return (
    <div className="mx-[100px] checkoutBilling">
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
        <div className="right flex-1">
          <div className="flex items-center justify-start gap-[12px] mb-[40px]">
            <input className="border-[2px] border-[#000000] w-[20px] h-[20px] text-black accent-white" type="checkbox" name="deliveryAddress" id="deliveryAddress" />
            <label className="w-fit text-[30px]/[42px] font-bold " htmlFor="deliveryAddress">Deliver to a different address?</label>
          </div>
          <div className="textarea flex flex-col items-start gap-[12px] mb-[10px] text-[20px]/[30px] font-medium">
            <label className="mb-[10px]" htmlFor="orderNotes">Order notes (optional)</label>
            <textarea className="border-[2px] border-[#000000] w-full h-[180px] resize-none font-normal px-[6px]" name="orderNotes" id="orderNotes"></textarea>
          </div>
        </div>
      </div>
      <div className="billingYourOrder mb-[40px]">
        <p className="text-[30px]/[42px] font-bold">Your order</p>
        <table className="border-[2px] border-[#50575E] md:w-full w-[1100px] text-left font-bold text-[20px]/[30px] my-[40px]">
          <tr className="bg-[#50575E] text-white h-[66px] font-bold">
            <th className="pl-[20px] w-[50%]">Product</th>
            <th className="pl-[20px] w-[50%]">Subtotal</th>
          </tr>
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
              <div className="mb-[10px]">
                <input type="radio" name="shipping" id="freeShipping" />
                <label className="pl-[10px]" htmlFor="freeShipping">Free shipping</label><br />
              </div>
              <div className="mb-[10px]">
                <input type="radio" name="shipping" id="localPickup" />
                <label className="pl-[10px]" htmlFor="localPickup">Local pickup</label><br />
              </div>
              <div className="mb-[10px]">
                <input type="radio" name="shipping" id="flatRate" />
                <label className="pl-[10px]" htmlFor="flatRate">Flat rate: R50</label><br />
              </div>
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
        </table>
      </div>
      <div className="paymentDetails bg-[#EBE9EB] w-full text-[20px]/[30px] font-medium pt-[10px] pb-[30px] px-[20px] mb-[60px]">
        <div className="border-b-[1px] my-[10px] border-[#D3CED2]">
          <div className="mb-[10px]">
            <input type="radio" name="shipping" id="bankTransfer" />
            <label className="pl-[10px]" htmlFor="bankTransfer">Direct bank transfer</label><br />
          </div>
          <div className="my-[20px] px-[20px] py-[24px] bg-[#DFDCDE]">
            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          </div>
          <div className="mb-[10px]">
            <input type="radio" name="shipping" id="chequePayments" />
            <label className="pl-[10px]" htmlFor="chequePayments">Cheque payments</label><br />
          </div>
          <div className="pb-[30px]">
            <input type="radio" name="shipping" id="cashOnDelivery" />
            <label className="pl-[10px]" htmlFor="cashOnDelivery">Cash on delivery</label><br />
          </div>
        </div>
        <div>
          <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-[#2F8EFF] underline">privacy policy</span></p>
          <div className="flex items-center justify-start gap-[12px] mt-[40px] mb-[30px]">
            <input className="border-[2px] border-[#000000] cursor-pointer w-[16px] h-[16px] text-black accent-white" type="checkbox" name="termsAndConditions" id="termsAndConditions" />
            <label className="w-fit cursor-pointer" htmlFor="termsAndConditions">I have read and agree to the website <span className="text-[#2F8EFF] underline">terms and conditions</span></label>
          </div>
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
