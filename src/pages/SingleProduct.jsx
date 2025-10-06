import Card from '../components/Card';
import Review from '../components/Review';
import SingleProductCard from '../components/SingleProductCard';

const SingleProduct = () => {


    return (
        <div className=''>

            <div className='bg-[#eeeeee]'>
                <div className="mx-[20px]">
                    <SingleProductCard />
                </div>
                <Review />

            </div>
            <div className="relatedProducts my-[60px] xl:mx-[100px] md:mx-[60px] mx-[30px] max-sm:flex flex-col max-sm:items-center">
                <p className='text-[30px]/[42px] mb-[20px] font-bold w-fit'>Related products</p>

                <div className="productsWrap max-sm:w-[280px] grid md:grid-cols-2 sm:cols-1 lg:grid-cols-4 gap-[30px] mb-[100px]">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
