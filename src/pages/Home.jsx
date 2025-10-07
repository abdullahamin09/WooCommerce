import Card from '../components/Cards/Card';
import FeaturedCategory from '../components/FeaturedCategory'
import Shop from './Shop'

const Home = () => {
  const products = [
    { id: 1, title: "Product Title", rating: 5, price: 19.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 2, title: "Product Title", rating: 4, price: 25.50, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 3, title: "Product Title", rating: 3, price: 15.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 4, title: "Product Title", rating: 2, price: 49.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 5, title: "Product Title", rating: 1, price: 9.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 6, title: "Product Title", rating: 4, price: 35.75, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 7, title: "Product Title", rating: 5, price: 89.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 8, title: "Product Title", rating: 3, price: 22.10, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 9, title: "Product Title", rating: 2, price: 12.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 10, title: "Product Title", rating: 4, price: 65.40, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 11, title: "Product Title", rating: 5, price: 120.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 12, title: "Product Title", rating: 1, price: 8.50, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 13, title: "Product Title", rating: 3, price: 18.25, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 14, title: "Product Title", rating: 2, price: 42.00, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 15, title: "Product Title", rating: 4, price: 55.75, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
    { id: 16, title: "Product Title", rating: 5, price: 99.99, details: "Lorem ipsum dolor sit amet consectetur sociis maecenas." },
  ];


  return (
    <div className='flex flex-col gap-4 text-2xl font-semibold'>
      <FeaturedCategory Features='Welcome To Home Page' Details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore .' />
      <section>
        <div className='Card-wrap place-items-center grid md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-5 my-10 mx-[30px]'>

          {products.map((product) => (
            <Card 
              key={product.id}
              Ptitle={product.title}
              Pprice={product.price}
              Prating={product.rating}
              Pdetails={product.details}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
