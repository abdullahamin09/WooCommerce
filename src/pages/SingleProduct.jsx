import Card from '../components/Card';
import FeaturedCategory from '../components/FeaturedCategory';
import SingleProductCard from '../components/SingleProductCard';

const SingleProduct = () => {
    

    return (
        <div>
            <FeaturedCategory Features = 'Featured Category Title' Details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .' />
            <FeaturedCategory Features = 'Featured Product Title' Details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .'/>
            <SingleProductCard />
            <div className="relatedProducts my-[60px] xl:mx-[100px] md:mx-[60px] sm:mx-[20px]">
                <p className='text-[30px]/[42px] mb-[20px] font-bold'>Related products</p>
                <div className="productsWrap grid md:grid-cols-2 sm:cols-1 lg:grid-cols-4 gap-[30px] mb-[100px]">
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
