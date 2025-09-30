import React from 'react'

const AddressMyAcc = () => {
    return (
        <div className='text-[20px]/[30px] font-medium'>
            <p>The following addresses will be used on the checkout page by default.</p>
            <div className="address my-[25px] flex justify-between">
                <div className="billingAddress">
                    <div className='font-bold flex gap-[40px] mb-[20px]'>
                        <p>Billing address</p>
                        <button className='underline text-[#2F8EFF]'>Edit</button>
                    </div>
                    <p>Ash Shaw</p>
                    <p>LightSpeed</p>
                    <p>46 Devon Street</p>
                    <p>Cape Town</p>
                    <p>Western Cape</p>
                    <p>7925</p>
                </div>
                <div className="shippingAddress">
                    <div className='font-bold flex gap-[40px] mb-[20px]'>
                        <p>Shipping address</p>
                        <button className='underline text-[#2F8EFF]'>Edit</button>
                    </div>
                    <p>Ash Shaw</p>
                    <p>LightSpeed</p>
                    <p>46 Devon Street</p>
                    <p>Cape Town</p>
                    <p>Western Cape</p>
                    <p>7925</p>
                </div>
            </div>
        </div>
    )
}

export default AddressMyAcc
