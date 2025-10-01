

const CheckOut = () => {
    return (
        <div className="checkOut mx-[50px]">
            <p className="text-[48px]/[66px] font-bold mb-[30px]">Checkout</p>
            <div className="flex">
                <div className="left">
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
                            <div className="flex gap-[24px]">
                                <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="First name" type="text" name="firstName" id="" />
                                <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Last name" type="text" name="lastName" id="" />
                            </div>
                            <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Address" type="text" name="address1" id="" />
                            <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Apartment, suite, etc. (optional)" type="text" name="address2" id="" />
                            <div className="flex gap-[24px]">
                                <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Country/Region" type="text" name="country" id="" />
                                <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="City" type="text" name="city" id="" />
                            </div>
                            <div className="flex gap-[24px]">
                                <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Province" type="text" name="province" id="" />
                                <input className="pl-[10px] h-[56px] text-[20px]/[30px] px-[2px] border-[2px] border-black focus:outline-none" placeholder="Postal Code" type="number" name="postalCode" id="" />
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
                        <button className="px-[66px] h-[75px] border-[2px] border-[#000000]">Return to Basket</button>
                        <button className="text-[#FFFFFF] px-[66px] h-[75px] bg-[#FF7A00]">Place Order</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CheckOut
