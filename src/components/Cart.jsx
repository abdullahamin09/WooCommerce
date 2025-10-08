import { Icon } from "@iconify/react"
import cartImage from "../assets/images/cartImage.png"
import Card from './Cards/Card'
import { Link } from "react-router-dom"
import Button from "./Shared/Button"
import Input from "./Shared/Input"

const Cart = () => {
  return (
    <div className='cart-wrap lg:mx-[120px] mx-[30px] md:mx-[60px]'>
      <div className="cart">
        <p className='text-[48px]/[66px] font-bold'>Cart</p>
      </div>
      <div className="table-wrap overflow-x-auto">
        <div className="table w-[1100px] xl:w-full my-3">
          <table className="md:w-full w-[1100px] text-left font-bold text-[20px]/[30px]">
            <thead>
              <tr className="bg-[#50575E] text-white h-[63px] font-bold">
                <th className="pl-[20px] w-[550px]">Product</th>
                <th className="pl-[20px] w-[205px]">Price</th>
                <th className="pl-[20px] w-[223px]">Quantity</th>
                <th className="pl-[20px] w-[225px]">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="data-row">
                <td >
                  <div className="product flex items-center font-medium">
                    <div className="cross-icon-wrap px-[41px]">
                      <Icon icon="raphael:cross" width="20" height="20" style={{ color: "#FF0000" }} />
                    </div>
                    <div className="cart_img my-[17px] mr-[30px]">
                      <img className="w-[88px] h-[88px]" src={cartImage} alt="" />
                    </div>
                    <p className="underline text-[#2F8EFF]">LSX Mega Menus</p>
                  </div>
                </td>
                <td className="pl-[20px]">R100,00</td>
                <td className="pl-[20px]">
                  <Input
                    inputClass='w-[73px] h-[55px]'
                    inputTagClass='text-center'
                    defaultValue='1'
                    type='number'
                  />
                </td>
                <td className="pl-[20px]">
                  <p>R100,00</p>
                </td>
              </tr>
              <tr className="data-row">
                <td >
                  <div className="product flex items-center font-medium">
                    <div className="cross-icon-wrap px-[41px]">
                      <Icon icon="raphael:cross" width="20" height="20" style={{ color: "#FF0000" }} />
                    </div>
                    <div className="cart_img my-[17px] mr-[30px]">
                      <img className="w-[88px] h-[88px]" src={cartImage} alt="" />
                    </div>
                    <p className="underline text-[#2F8EFF]">LSX Mega Menus</p>
                  </div>
                </td>
                <td className="pl-[20px]">R100,00</td>
                <td className="pl-[20px]">
                  <Input
                    inputClass='w-[73px] h-[55px]'
                    inputTagClass='text-center'
                    defaultValue='1'
                    type='number'
                  />
                </td>
                <td className="pl-[20px]">
                  <p>R100,00</p>
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="pl-[20px] h-[102px]">
                  <div className="coupon flex items-center">
                    <div className="pl-[20px] w-[247px] h-[44px] border-t-[2px] border-b-[2px] border-l-[2px] border-[#000000] flex items-center">
                      <p>Coupon:</p>
                      {/* <input className="w-[145px] pl-1 h-[44px] font-bold focus:outline-none uppercase" type="text" name="coupon" id="" /> */}
                      <Input
                        inputClass='w-[145px] pl-1'
                        inputTagClass='!border-none !font-medium !h-full uppercase'
                        type='text'
                      />
                    </div>
                    <Button
                      content='Apply coupon'
                      btnClass='!h-[44px] !w-[126px] !text-[16px]/[24px]'
                    />
                  </div>
                </td>
                <td>
                  <Button
                    content='Update basket'
                    btnClass='!!h-[70px] !w-[181px] !text-[20px]/[30px]'
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="basket-wrap my-[20px] flex justify-between items-center gap-[20px] max-lg:flex-col-reverse">
        <div className="interested-product w-full lg:w-[45%]">
          <p className="text-[30px]/[42px] font-bold mb-[10px]">You may be interested in…</p>
          <div className="interested-card grid grid-cols-2 gap-4">
            <Card />
            <Card />
          </div>
        </div>
        <div className="basket-total w-full md:w-[70%] lg:w-[55%] space-y-6">
          <p className="text-[24px]/[34px] font-bold">Basket Total</p>
          <table className="Subtotal border-[2px] border-[#000000] w-full text-left text-[20px]/[30px]">
            <thead>
              <tr className="h-[62px] border-b-[2px] border-[#000000]">
                <td className="font-bold pl-[17px]">Subtotal</td>
                <td className=" pl-[17px]" colSpan={2}>R200,00</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-[2px] border-[#000000]">
                <td className="font-bold pl-[17px] align-top pt-[20px]">Shipping</td>
                <td className="shipping-wrap pl-[17px] pt-[20px]">
                  <div className="radio flex flex-col gap-2 mb-2">
                    <Input
                      Label='Free shipping'
                      Name='shipping'
                      HtmlFor='freeShipping'
                      inputClass='!flex-row-reverse justify-end !font-normal'
                      inputTagClass='!w-[16px] !h-[26px] mr-[6px]'
                      type='radio'
                      Value='freeShipping'
                    />
                    <Input
                      Label='Local pickup'
                      Name='shipping'
                      HtmlFor='localPickup'
                      inputClass='!flex-row-reverse justify-end !font-normal'
                      inputTagClass='!w-[16px] !h-[26px] mr-[6px]'
                      type='radio'
                      Value='localPickup'
                    />
                    <Input
                      Label='Flat rate: R50,00'
                      Name='shipping'
                      HtmlFor='flatRate'
                      inputClass='!flex-row-reverse justify-end !font-normal'
                      inputTagClass='!w-[16px] !h-[26px] mr-[6px]'
                      type='radio'
                      Value='flatRate'
                    />
                  </div>
                  <div className="mb-[20px] mt-[10px]">
                    <p className="mb-[30px]">Shipping to <span>Western Cape</span>.</p>
                    <a className="underline text-[#2F8EFF]" href="#">Change address</a>
                  </div>
                </td>
              </tr>
              <tr className="total h-[62px]">
                <td className="font-bold pl-[17px]">Total</td>
                <td className=" pl-[17px]">R200,00</td>
              </tr>
            </tbody>
          </table>
          <div className="checkOutButton">
            <Link to='/checkOut'>
              <Button
                content='Proceed to checkout'
                btnClass='!h-[94px] !bg-[#FF7A00]'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
