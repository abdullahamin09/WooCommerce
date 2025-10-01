import React from 'react'

const AddressMyAcc = ({ onAction }) => {
    return (
        <div className='text-[20px]/[30px] w-full font-medium'>
            <p className='addressPTag'>The following addresses will be used on the checkout page by default.</p>
            <div className="address my-[25px] flex justify-between">
                <div className="billingAddress flex-1">
                    <div className='font-bold flex gap-[40px] mb-[20px]'>
                        <p>Billing address</p>
                        <button
                            className='underline text-[#2F8EFF] editButton'
                            onClick={() => onAction('editBillingingAddress')}
                        >
                            Edit</button>
                    </div>
                    <div className="addressDetailsPTags">
                        <p>Ash Shaw</p>
                        <p>LightSpeed</p>
                        <p>46 Devon Street</p>
                        <p>Cape Town</p>
                        <p>Western Cape</p>
                        <p>7925</p>
                    </div>
                </div>
                <div className="shippingAddress flex-1">
                    <div className='font-bold flex gap-[40px] mb-[20px]'>
                        <p>Shipping address</p>
                        <button
                            className='underline text-[#2F8EFF] editButton'
                            onClick={() => onAction('editShippingAddress')}
                        >
                            Edit
                        </button>
                    </div>
                    <div className="addressDetailsPTags">
                        <p>Ash Shaw</p>
                        <p>LightSpeed</p>
                        <p>46 Devon Street</p>
                        <p>Cape Town</p>
                        <p>Western Cape</p>
                        <p>7925</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressMyAcc
