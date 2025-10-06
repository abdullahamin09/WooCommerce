import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

const CheckOut = () => {
    return (
        <div className="checkOut mx-[50px]  mt-10">
            <p className="text-[48px]/[66px] font-bold mb-[30px]">Checkout</p>
            <div className="flex flex-col md:flex-row gap-[20px]">
                <div className="left lg:w-[60%]">
                    <div className="contactInfo flex flex-col gap-[20px] mb-[30px]">
                        <p className="text-[24px]/[34px] font-bold ">1. Contact information</p>
                        <p className="text-[16px]/[16px] font-medium pl-[24px]">Already have an account? <span className="text-[#2F8EFF]">Log in.</span></p>
                        <div className="border-l-[1px] border-[#B4B7C1] pl-[18px] ml-[6px] gap-[20px] flex flex-col">
                            <p className="text-[20px]/[30px] font-medium">We'll use this email to send you details and updates about your order.</p>
                            <input className="pl-[10px] h-[56px] text-[16px]/[24px] px-[2px] border-[2px] border-black w-full" type="email" name="email" id="" />
                            <div className="flex items-start gap-[12px] mb-[10px]">
                                <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="createAcc" id="createAcc" />
                                <label className="w-fit" htmlFor="createAcc">Create an account?</label>
                            </div>
                        </div>
                    </div>

                    <div className="shipping  mb-[30px]">
                        <p className="text-[24px]/[34px] font-bold mb-[31px]">2. Shipping address</p>
                        <div className="shippingWrap flex flex-col gap-[24px] border-l-[1px] border-[#B4B7C1] pl-[18px] ml-[6px]">
                            <p className="text-[20px]/[30px] font-medium ">Enter the address where you want your order delivered.</p>
                            <div className="flex max-sm:flex-col gap-[24px]">
                                <input className="pl-[10px] w-full h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="First name" type="text" name="firstName" id="" />
                                <input className="pl-[10px] w-full h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Last name" type="text" name="lastName" id="" />
                            </div>
                            <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Address" type="text" name="address1" id="" />
                            <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Apartment, suite, etc. (optional)" type="text" name="address2" id="" />
                            <div className="flex max-sm:flex-col gap-[24px]">
                                <input className="pl-[10px] w-full h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Country/Region" type="text" name="country" id="" />
                                <input className="pl-[10px] w-full h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="City" type="text" name="city" id="" />
                            </div>
                            <div className="flex max-sm:flex-col gap-[24px]">
                                <input className="pl-[10px] w-full h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Province" type="text" name="province" id="" />
                                <input className="pl-[10px] w-full h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Postal Code" type="number" name="postalCode" id="" />
                            </div>
                            <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Phone (optional)" type="number" name="phoneNumber" id="" />
                            <div className="flex items-start gap-[12px] mb-[10px]">
                                <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="sameBillingAddress" id="sameBillingAddress" />
                                <label className="w-fit" htmlFor="sameBillingAddress">Use same address for billing</label>
                            </div>
                        </div>
                    </div>
                    <div className="shippingOption  mb-[30px]">
                        <p className="text-[24px]/[34px] font-bold mb-[31px]">3. Shipping options</p>
                        <div className="shippingOption text-[16px]/[24px] flex flex-col  border-l-[1px] border-[#B4B7C1] pl-[18px] ml-[6px]">
                            <div className="flex items-center py-[10px] border-b-[1px] border-[#B4B7C1]">
                                <input className="w-[22px] h-[22px] mr-[9px]" type="radio" name="shippingOption" id="freeShipping" value={'freeShipping'} />
                                <label htmlFor="freeShipping">Free shipping</label>
                            </div>
                            <div className="flex items-center py-[10px] border-b-[1px] border-[#B4B7C1]">
                                <input className="w-[22px] h-[22px] mr-[9px]" type="radio" name="shippingOption" id="localpickup" value={'localpickup'} />
                                <label htmlFor="localpickup">Local pickup</label>
                            </div>
                            <div className="flex items-center py-[10px] border-b-[1px] border-[#B4B7C1] mb-[20px]">
                                <input className="w-[22px] h-[22px] mr-[9px]" type="radio" name="shippingOption" id="flatRate" value={'flatRate'} />
                                <label htmlFor="flatRate">Flat rate</label>
                            </div>
                        </div>
                    </div>
                    <div className="paymentOption border-b-[1px] border-[#B4B7C1] pb-[30px]">
                        <p className="text-[24px]/[34px] font-bold mb-[31px]">4. Payment Option</p>
                        <div className="border-l-[1px] border-[#B4B7C1] pl-[18px] ml-[6px]">
                            <div className="shippingOption text-[16px]/[24px] flex flex-col  border-[1px] border-[#B4B7C1] mb-[20px]">
                                <div className="flex items-start gap-[18px]  flex-col py-[20px] border-b-[1px] border-[#B4B7C1] py-[10px] px-[23px]">
                                    <div className="flex items-center ">
                                        <input className="w-[22px] h-[22px] mr-[9px]" type="radio" name="paymentOption" id="directBankTransfer" value={'directBankTransfer'} />
                                        <label htmlFor="directBankTransfer">Direct bank transfer</label>
                                    </div>
                                    <p className="text-[20px]/[30px] font-medium">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                </div>
                                <div className="flex items-center py-[10px] border-b-[1px] border-[#B4B7C1] py-[20px] px-[23px]">
                                    <input className="w-[22px] h-[22px] mr-[9px]" type="radio" name="paymentOption" id="chequePayments" value={'chequePayments'} />
                                    <label htmlFor="chequePayments">Cheque payments</label>
                                </div>
                                <div className="flex items-center py-[10px] py-[20px] px-[23px]">
                                    <input className="w-[22px] h-[22px] mr-[9px]" type="radio" name="paymentOption" id="cashOnDelivery" value={'cashOnDelivery'} />
                                    <label htmlFor="cashOnDelivery">Cash on delivery</label>
                                </div>
                            </div>
                            <div className="h-[20px]"></div>
                        </div>
                        <div className="flex items-start gap-[12px] my-[20px]">
                            <input className="w-[26px] h-[26px] text-black accent-white" type="checkbox" name="orderNote" id="orderNote" />
                            <label className="w-fit text-[16px]/[24px] font-medium" htmlFor="orderNote">Add a note to your order</label>
                        </div>
                        <p className="text-[20px]/[30px] font-medium pl-[30px]">By proceeding with your purchase you agree to our <span className="text-[#2F8EFF] font-medium underline">Terms and Conditions </span> and <span className="text-[#2F8EFF] font-medium underline">Privacy Policy</span></p>
                    </div>
                    <div className="buttons w-full my-[30px] gap-[40px] grid grid-cols-2 max-sm:grid-cols-1 text-[24px]/[34px] font-bold">
                        <button className="px-auto h-[75px] flex justify-center items-center gap-[8px] border-[2px] border-[#000000]">
                            <Icon icon="lineicons:arrow-left" width="16" height="16" />
                            <span>Return to Basket</span>
                        </button>
                            <Link to = '/checkoutbilling' className="text-[#FFFFFF] flex justify-center items-center h-[75px] bg-[#FF7A00]">Place Order</Link>
                    </div>


                </div>
                <div className="right lg:w-[40%]">
                    <div className="max-w-[500px] mx-auto">
                        <div className="product flex gap-[20px]  pt-[22px] mb-[32px] border-t-[1px] border-[#B4B7C1]">
                            <div className="img relative">
                                <div className="imgwrap w-[53px] h-[50px] bg-[#000000]">
                                    <img className="w-full h-full object-contain" src="./images/card_logo.png" alt="" />
                                </div>
                                <div className="absolute flex justify-center items-center w-[31px] h-[29px] rounded-full bg-white  right-[-15px] top-[-14px]">
                                    <div className="border-[2px] bg-white rounded-full flex justify-center items-center border-[#000000] w-[27px] h-[25px]">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div className="text-[16px]/[24px] flex flex-col  font-medium">
                                <div className="flex justify-between font-bold">
                                    <p>LSX Mega Menus</p>
                                    <p>R100,00</p>
                                </div>
                                <p>R100,00</p>
                                <p>Display beautiful banners on your LSX WordPress site with the LSX Banners extension, which offers…</p>
                            </div>
                        </div>
                        <div className="product flex gap-[20px]  pt-[22px] mb-[32px] border-t-[1px] border-[#B4B7C1]">
                            <div className="img relative">
                                <div className="imgwrap w-[53px] h-[50px] bg-[#000000]">
                                    <img className="w-full h-full object-contain" src="./images/card_logo.png" alt="" />
                                </div>
                                <div className="absolute flex justify-center items-center w-[31px] h-[29px] rounded-full bg-white  right-[-15px] top-[-14px]">
                                    <div className="border-[2px] bg-white rounded-full flex justify-center items-center border-[#000000] w-[27px] h-[25px]">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div className="text-[16px]/[24px] flex flex-col  font-medium">
                                <div className="flex justify-between font-bold">
                                    <p>LSX Mega Menus</p>
                                    <p>R50,00</p>
                                </div>
                                <p><span className="line-through pr-[6px]">R100,00</span>R50,00</p>
                                <p>Display beautiful banners on your LSX WordPress site with the LSX Banners extension, which offers…</p>
                            </div>
                        </div>
                        <div className="text-[20px]/[30px] font-medium">
                            <div className="couponWrap flex text-[#2F8EFF] font-bold pt-[22px] mb-[22px] border-t-[1px] border-[#B4B7C1]">
                                <p>Add a coupon</p>
                            </div>
                            <div className="Subtotal flex justify-between pt-[22px] mb-[22px] border-t-[1px] border-[#B4B7C1]">
                                <p>Subtotal</p>
                                <p className="text-[20px]/[35px] font-bold">R150,00</p>
                            </div>
                            <div className="pt-[22px] mb-[30px] border-t-[1px] border-[#B4B7C1]">
                                <div className="flex justify-between mb-[5px]">
                                    <p>Shipping</p>
                                    <p className="text-[20px]/[35px] font-bold">R50,00</p>
                                </div>
                                <p className="text-[12px]/[15px] mb-[28px]">Flat rate</p>
                                <p className="text-[16px]/[24px]">Shipping to 7925, Cape Town, Western Cape, South Africa</p>
                            </div>
                            <div className="flex justify-between pt-[22px] mb-[22px] border-t-[1px] border-[#B4B7C1]">
                                <p className="text-[28px]/[40px] font-bold">Total</p>
                                <p className="text-[28px]/[40px] font-bold">R200,00</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
