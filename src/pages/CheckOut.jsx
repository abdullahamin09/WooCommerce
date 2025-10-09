import { Link } from "react-router-dom"
import Button from "../components/Shared/Button"
import Checkbox from "../components/Shared/Checkbox"
import Input from "../components/Shared/Input"
import CartProductCard from "../components/Cards/CartProductCard"

const CheckOut = () => {
    const products = [
        { id: 1, title: "Product Title", rating: 5, price: 3000, discountPrice: "2500", itemNumber: 1 },
        { id: 2, title: "Product Title", rating: 4, price: 4000, itemNumber: 4 },
    ];
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
                            <Input
                                HtmlFor='email'
                                type='text'
                            />
                            <Checkbox
                                id="createAcc"
                                name="createAcc"
                                label="Create an account?"
                            />
                        </div>
                    </div>

                    <div className="shipping  mb-[30px]">
                        <p className="text-[24px]/[34px] font-bold mb-[31px]">2. Shipping address</p>
                        <div className="shippingWrap flex flex-col gap-[24px] border-l-[1px] border-[#B4B7C1] pl-[18px] ml-[6px]">
                            <p className="text-[20px]/[30px] font-medium ">Enter the address where you want your order delivered.</p>
                            <div className="flex max-sm:flex-col gap-[24px]">
                                <Input
                                    placeHolder="First name"
                                    Name='firstName'
                                    HtmlFor="firstName"
                                    important
                                    type="text"
                                    mb='[20px]'
                                    inputClass='flex-1'
                                />
                                <Input
                                    placeHolder="Last name"
                                    Name='lastName'
                                    HtmlFor="lastName"
                                    important
                                    type="text"
                                    mb='[20px]'
                                    inputClass='flex-1'
                                />
                            </div>
                            <Input
                                placeHolder="Address"
                                HtmlFor="address1"
                                Name='address1'
                                important
                                type="text"
                                mb='[20px]'
                            />
                            <Input
                                placeHolder="Apartment, suite, etc. (optional)"
                                HtmlFor="address2"
                                Name='address2'
                                type="text"
                                mb='[20px]'
                            />
                            <div className="flex max-sm:flex-col gap-[24px]">
                                <Input
                                    placeHolder="Country/Region"
                                    HtmlFor="country"
                                    Name='country'
                                    important
                                    type="text"
                                    mb='[20px]'
                                    inputClass='flex-1'
                                />
                                <Input
                                    placeHolder="City"
                                    HtmlFor="city"
                                    Name='city'
                                    important
                                    type="text"
                                    mb='[20px]'
                                    inputClass='flex-1'
                                />
                            </div>
                            <div className="flex max-sm:flex-col gap-[24px]">
                                <Input
                                    placeHolder="Province"
                                    HtmlFor="province"
                                    Name='province'
                                    important
                                    type="text"
                                    mb='[20px]'
                                    inputClass='flex-1'
                                />
                                <Input
                                    placeHolder="Postal Code"
                                    HtmlFor="postalCode"
                                    Name='postalCode'
                                    important
                                    type="text"
                                    mb='[20px]'
                                    inputClass='flex-1'
                                />
                            </div>
                            <Input
                                placeHolder="Phone (optional)"
                                HtmlFor="phoneNumber"
                                Name='phoneNumber'
                                type="text"
                                mb='[20px]'
                            />
                            <Checkbox
                                id="sameBillingAddress"
                                name="sameBillingAddress"
                                label="Use same address for billing"
                            />
                        </div>
                    </div>
                    <div className="shippingOption  mb-[30px]">
                        <p className="text-[24px]/[34px] font-bold mb-[31px]">3. Shipping options</p>
                        <div className="shippingOption text-[16px]/[24px] flex flex-col  border-l-[1px] border-[#B4B7C1] pl-[18px] ml-[6px]">
                            <div className="flex items-center py-[10px] border-b-[1px] border-[#B4B7C1]">
                                <Input
                                    Label='Free shipping'
                                    HtmlFor="freeShipping"
                                    Name='shippingOption'
                                    type="radio"
                                    inputTagClass="!w-[22px] !h-[22px] mr-[9px]"
                                    inputClass="flex-row-reverse justify-start items-center !text-[16px]/[24px]"
                                    Value='freeShipping'
                                />
                            </div>

                            <div className="flex items-center py-[10px] border-b-[1px] border-[#B4B7C1]">
                                <Input
                                    Label='Local pickup'
                                    HtmlFor="localpickup"
                                    Name='shippingOption'
                                    type="radio"
                                    inputTagClass="!w-[22px] !h-[22px] mr-[9px]"
                                    inputClass="flex-row-reverse justify-start items-center !text-[16px]/[24px]"
                                    Value='localpickup'
                                />
                            </div>

                            <div className="py-[10px] border-b-[1px] border-[#B4B7C1] mb-[20px]">
                                <Input
                                    Label='Flat rate'
                                    HtmlFor="flatRate"
                                    Name='shippingOption'
                                    type="radio"
                                    inputTagClass="!w-[22px] !h-[22px] mr-[9px]"
                                    inputClass="flex-row-reverse justify-end items-center !text-[16px]/[24px]"
                                    Value='flatRate'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="paymentOption border-b-[1px] border-[#B4B7C1] pb-[30px]">
                        <p className="text-[24px]/[34px] font-bold mb-[31px]">4. Payment Option</p>
                        <div className="border-l-[1px] border-[#B4B7C1] pl-[18px] ml-[6px]">
                            <div className="shippingOption text-[16px]/[24px] flex flex-col  border-[1px] border-[#B4B7C1] mb-[20px]">
                                <div className="flex items-start gap-[18px]  flex-col py-[20px] border-b-[1px] border-[#B4B7C1] py-[10px] px-[23px]">
                                    <div className="flex items-center ">
                                        <Input
                                            Label='Direct bank transfer'
                                            HtmlFor="directBankTransfer"
                                            Name='paymentOption'
                                            type="radio"
                                            inputTagClass="!w-[22px] !h-[22px] mr-[9px]"
                                            inputClass="flex-row-reverse items-center !text-[16px]/[24px]"
                                            Value='directBankTransfer'
                                        />
                                    </div>
                                    <p className="text-[20px]/[30px] font-medium">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                </div>
                                <div className="flex items-center py-[10px] border-b-[1px] border-[#B4B7C1] py-[20px] px-[23px]">
                                    <Input
                                        Label='Cheque payments'
                                        HtmlFor="chequePayments"
                                        Name='paymentOption'
                                        type="radio"
                                        inputTagClass="!w-[22px] !h-[22px] mr-[9px]"
                                        inputClass="flex-row-reverse items-center !text-[16px]/[24px]"
                                        Value='chequePayments'
                                    />
                                </div>
                                <div className="flex items-center py-[10px] py-[20px] px-[23px]">
                                    <Input
                                        Label='Cash on delivery'
                                        HtmlFor="cashOnDelivery"
                                        Name='paymentOption'
                                        type="radio"
                                        inputTagClass="!w-[22px] !h-[22px] mr-[9px]"
                                        inputClass="flex-row-reverse items-center !text-[16px]/[24px]"
                                        Value='cashOnDelivery'
                                    />
                                </div>
                            </div>
                            <div className="h-[20px]"></div>
                        </div>
                        <Checkbox
                            id="orderNote"
                            name="orderNote"
                            label="Add a note to your order"
                            checkboxClass='my-[20px]'
                        />
                        <p className="text-[20px]/[30px] font-medium pl-[30px]">By proceeding with your purchase you agree to our <span className="text-[#2F8EFF] font-medium underline">Terms and Conditions </span> and <span className="text-[#2F8EFF] font-medium underline">Privacy Policy</span></p>
                    </div>
                    <div className="buttons w-full my-[30px] gap-[40px] grid grid-cols-2 max-sm:grid-cols-1 text-[24px]/[34px] font-bold">
                        <Link to='/checkOut'>
                            <Button
                                content='Return to Basket'
                                btnClass='!h-[75px] border-[2px] border-[#000000] !bg-[#fff] !text-black !flex-row-reverse gap-[8px]'
                                iconProp='lineicons:arrow-left'
                            />
                        </Link>
                        <Link to='/checkoutbilling'>
                            <Button
                                content='Place Order'
                                btnClass='!h-[75px] !bg-[#FF7A00]'
                            />
                        </Link>
                    </div>


                </div>
                <div className="right lg:w-[40%]">
                    <div className="max-w-[500px] mx-auto">
                        {products.map((products) => (
                            <div className="pt-[22px] mb-[32px] border-t-[1px] border-[#B4B7C1]">
                                <CartProductCard
                                    key={products.id}
                                    Title={products.title}
                                    Price={products.price}
                                    DiscountPrice={products.discountPrice}
                                    itemNumber={products.itemNumber}
                                />
                            </div>
                        ))}
                        <div className="text-[20px]/[30px] font-medium">
                            <div className="couponWrap flex text-[#2F8EFF] font-bold pt-[22px] mb-[22px] border-t-[1px] border-[#B4B7C1]">
                                <p className="cursor-pointer">Add a coupon</p>
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
