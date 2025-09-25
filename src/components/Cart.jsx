import { Icon } from "@iconify/react"
import cartImage from "../assets/images/cartImage.png"
import Card from './Card'
const Cart = () => {
  return (
    <div className='cart-wrap mx-[120px]'>
      <div className="cart">
        <p className='text-[48px]/[66px] text-bold'>Cart</p>
      </div>
      <div className="table w-full my-3">
        <table className="w-full text-left text-bold text-[20px]/[30px]">
          <tr className="bg-[#50575E] text-white h-[63px] text-bold">
            <th className="pl-[20px] w-[550px]">Product</th>
            <th className="pl-[20px] w-[205px]">Price</th>
            <th className="pl-[20px] w-[223px]">Quantity</th>
            <th className="pl-[20px] w-[225px]">Subtotal</th>
          </tr>
          <tr className="data-row">
            <td >
              <div className="product flex items-center text-medium">
                <div className="cross-icon-wrap px-[41px]">
                  <Icon icon="raphael:cross" width="20" height="20" style={{ color: "#FF0000" }} />
                </div>
                <div className="cart_img my-[17px] mr-[30px]">
                  <img className="w-[88px] h-[88px]" src={cartImage} alt="" />
                </div>
                <p>LSX Mega Menus</p>
              </div>
            </td>
            <td className="pl-[20px]">R100,00</td>
            <td className="pl-[20px]">
              <div className="input-wrap ">
                <input className="w-[73px] h-[55px] border-[2px] border-[#000000] text-bold text-center focus:outline-none" type="number" name="quantity" id="" />
              </div>
            </td>
            <td className="pl-[20px]">
              <p>R100,00</p>
            </td>
          </tr>
          <tr className="data-row">
            <td >
              <div className="product flex items-center text-medium">
                <div className="cross-icon-wrap px-[41px]">
                  <Icon icon="raphael:cross" width="20" height="20" style={{ color: "#FF0000" }} />
                </div>
                <div className="cart_img my-[17px] mr-[30px]">
                  <img className="w-[88px] h-[88px]" src={cartImage} alt="" />
                </div>
                <p>LSX Mega Menus</p>
              </div>
            </td>
            <td className="pl-[20px]">R100,00</td>
            <td className="pl-[20px]">
              <div className="input-wrap ">
                <input className="w-[73px] h-[55px] border-[2px] border-[#000000] text-bold text-center focus:outline-none" type="number" name="quantity" id="" />
              </div>
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
                  <input className="w-[145px] pl-1 h-[44px] text-bold focus:outline-none" type="text" name="coupon" id="" />
                </div>
                <button className="bg-[#2F8EFF] text-[16px]/[24px] text-bold text-white h-[44px] w-[126px]">Apply coupon</button>
              </div>
            </td>
            <td>
              <button className="bg-[#2F8EFF] text-[20px]/[30px] text-white h-[70px] w-[181px]">Update basket</button>
            </td>
          </tr>
        </table>
      </div>
      <div className="basket-wrap">
        <div className="interested-product">
          <p className="text-[30px]/[42px] text-bold ">You may be interested in…</p>
          <div className="interested-card">
            <Card />
            <Card />
          </div>
          <div className="basket-total">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
