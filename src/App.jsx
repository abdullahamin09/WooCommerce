import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Auth from './components/Auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import MyAccount from './pages/MyAccount'
import Home from './pages/Home'
import Cart from './components/Cart'
import MainCart from './pages/MainCart'
import SingleProduct from './pages/SingleProduct'
import ResetPassword from './components/ResetPassword'
import CheckOut from './pages/CheckOut'
import CheckoutBilling from './pages/CheckoutBilling'
import CheckoutConfirmed from './pages/CheckoutConfirmd'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Review from './pages/Review'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Auth />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/forgetpassword' element={<ResetPassword />} />
            <Route path='/myaccount/*' element={<MyAccount />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/basket' element={<Cart />} />
            <Route path='/cart' element={<MainCart />} />
            <Route path='/singleproduct' element={<SingleProduct />} />
            <Route path='/checkOut' element={<CheckOut />} />
            <Route path='/checkoutbilling' element={<CheckoutBilling />} />
            <Route path='/checkoutconfirmed' element={<CheckoutConfirmed />} />
            <Route path='/review' element={<Review />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
