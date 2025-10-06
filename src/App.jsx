import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LoginAndRegister from './components/LoginAndRegister'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import MyAccount from './pages/MyAccount'
import Home from './pages/Home'
import Cart from './components/Cart'
import MainCart from './pages/MainCart'
import SingleProduct from './pages/SingleProduct'
import LostPassword from './components/LostPassword'
import CheckOut from './pages/CheckOut'
import CheckoutBilling from './pages/CheckoutBilling'
import CheckoutConfirmed from './pages/CheckoutConfirmd'
import Services from './components/Services'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<LoginAndRegister />} />
            <Route path='/services' element={<Services />} />
            <Route path='/forgetpassword' element={<LostPassword />} />
            <Route path='/myaccount/*' element={<MyAccount />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/basket' element={<Cart />} />
            <Route path='/cart' element={<MainCart />} />
            <Route path='/singleproduct' element={<SingleProduct />} />
            <Route path='/checkOut' element={<CheckOut />} />
            <Route path='/checkoutbilling' element={<CheckoutBilling />} />
            <Route path='/checkoutconfirmed' element={<CheckoutConfirmed />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
