import { Link } from 'react-router-dom';
import CartProductCard from '../components/Cards/CartProductCard'
import Card from '../components/Cards/Card'
import Input from '../components/Shared/Input';
import Button from '../components/Shared/Button';

const MainCart = () => {
    const products = [
        { id: 1, title: "Product Title", rating: 5, price: 3000, discountPrice: "2500", discount: "Save 500", lisence: "1Site" },
        { id: 2, title: "Product Title", rating: 4, price: 4000, },
        { id: 3, title: "Product Title", rating: 3, price: 1500, discountPrice: "10000", discount: "Save 50,00", lisence: "1Site" },
        { id: 4, title: "Product Title", rating: 2, price: 4999, },
        { id: 5, title: "Product Title", rating: 1, price: 999, },
        { id: 6, title: "Product Title", rating: 4, price: "20000", discountPrice: "10000", discount: "Save 50,00" },
        { id: 7, title: "Product Title", rating: 5, price: 8900, },
        { id: 8, title: "Product Title", rating: 3, price: 2210, },
        { id: 9, title: "Product Title", rating: 2, price: 1299, discountPrice: "1200", discount: "Save 50,00", lisence: "1Site" },
        { id: 10, title: "Product Title", rating: 4, price: 6540, },
        { id: 11, title: "Product Title", rating: 5, price: 12000, },
        { id: 12, title: "Product Title", rating: 1, price: 8500, },
        { id: 13, title: "Product Title", rating: 3, price: 1825, },
        { id: 14, title: "Product Title", rating: 2, price: 4200, },
        { id: 15, title: "Product Title", rating: 4, price: 5575, },
        { id: 16, title: "Product Title", rating: 5, price: 9999, },
    ];
    const interestedCard = [
        { id: 1 },
        { id: 2 },
        { id: 3 }
    ]
    return (

        <div className='mx-[30px] lg:mx-[120px] flex lg:flex-row flex-col my-[70px] gap-10 my-[50px]'>
            <div className="left w-full lg:w-[60%]">
                <div className="text-[30px]/[42px] max-lg:hidden font-bold flex flex-row lg:gap-[20px] w-full mb-[30px]">
                    <div className='border-b-[1px] w-full border-[#000000] pb-[12px]'>
                        <p>Product</p>
                    </div>
                    <div className='border-b-[1px] border-[#000000] w-[100px] pb-[12px]'>
                        <p>Total</p>
                    </div>
                </div>
                <div className='mb-[40px] lg:mb-0 border-b-[1px] border-[#B4B7C1]'>
                    {products.map((products) => (
                        <div className="my-[40px]">
                            <CartProductCard
                                key={products.id}
                                Title={products.title}
                                Rating={products.rating}
                                Price={products.price}
                                DiscountPrice={products.discountPrice}
                                Discount={products.discount}
                                Lisence={products.lisence}
                            />
                        </div>
                    ))}
                </div>
                <div className="interestedCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-[40px] max-md:mx-[40px] mb-[20px] lg:mb-0 border-b-[1px] border-[#B4B7C1]">
                    {interestedCard.map((interestedCard) => (
                        <Card key={interestedCard.id} />
                    ))}
                </div>
            </div>
            <div className="right w-full lg:w-[40%]">
                <div className="basket-total w-full">
                    <div className='max-md:hidden border-b-[1px] border-[#000000 pb-[12px] mb-[10px] text-[30px]/[42px] font-bold'>
                        <p>Basket Total</p>
                    </div>
                    <div className='max-md:hidden border-b-[1px] border-[#000000] text-[#2F8EFF] pb-[15px] mb-[12px] text-[20px]/[32px] underline font-bold'>
                        <p  className='cursor-pointer'>Add a coupon</p>
                    </div>
                    <table className="Subtotal lg:border-b-[1px] border-[#000000] w-full text-left text-[20px]/[30px] max-lg:mx-[40px]">
                        <tr className="h-[62px] lg:border-b-[1px] border-[#000000]">
                            <td className="font-bold" colSpan={2}>Subtotal</td>
                            <td className=" pl-[30px]">R200,00</td>
                        </tr>
                        <tr className="max-md:hidden border-b-[2px] border-[#000000]">
                            <td className="font-bold align-top pt-[20px]">Shipping</td>
                            <td className="shipping-wrap pl-[30px] pt-[20px]">
                                <div className="radio flex flex-col gap-2 mb-2">
                                    <div>
                                        <Input
                                            Label='Free shipping'
                                            HtmlFor="freeShipping"
                                            Name='shipping'
                                            type="radio"
                                            inputTagClass="!w-[13px] !h-[13px] mr-[6px]"
                                            inputClass="flex-row-reverse justify-end items-center !font-normal"
                                            Value='freeShipping'
                                        />
                                        <p className='text-[12px]/[18px] text-[#757575] pl-[20px]'>R0,00</p>
                                    </div>
                                    <div>
                                        <Input
                                            Label='Local pickup'
                                            HtmlFor="localPickup"
                                            Name='shipping'
                                            type="radio"
                                            inputTagClass="!w-[13px] !h-[13px] mr-[6px]"
                                            inputClass="flex-row-reverse justify-end items-center !font-normal"
                                            Value='localPickup'
                                        />
                                        <p className='text-[12px]/[18px] text-[#757575] pl-[20px]'>R0,00</p>
                                    </div>
                                    <div>
                                        <Input
                                            Label='Flat rate: R50,00'
                                            HtmlFor="flatRate"
                                            Name='shipping'
                                            type="radio"
                                            inputTagClass="!w-[13px] !h-[13px] mr-[6px]"
                                            inputClass="flex-row-reverse justify-end items-center !font-normal"
                                            Value='flatRate'
                                        />
                                        <p className='text-[12px]/[18px] text-[#757575] pl-[20px]'>R0,00</p>
                                    </div>
                                </div>
                                <div className="mb-[20px] mt-[10px]">
                                    <p className="mb-[30px]">Shipping to 7925, Cape Town, Western Cape, South Africa</p>
                                    <a className="underline text-[#2F8EFF]" href="#">Change address</a>
                                </div>
                            </td>
                        </tr>
                        <tr className="max-md:hidden total h-[62px]">
                            <td className="font-bold">Total</td>
                            <td className=" pl-[30px]">R200,00</td>
                        </tr>
                    </table>
                    <div className="checkOutButton mt-[20px] flex text-[16px]/[24px] font-bold items-center justify-between gap-[20px] my-[40px]">
                        <button className="px-auto lg:hidden h-[50px] flex justify-center items-center gap-[8px] border-[2px] min-w-[200px] flex-1 border-[#000000]">
                            <span>View my cart</span>
                        </button>
                        <Link className='flex-1 min-w-[200px] ' to='/checkOut'>
                            <Button
                                content='Proceed to checkout'
                                btnClass="!bg-[#FF7A00] !h-[50px] lg:!h-[94px] !text-[16px]/[24px]"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCart
