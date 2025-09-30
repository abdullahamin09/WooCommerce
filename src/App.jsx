import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LoginAndRegister from './components/LoginAndRegister'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import MyAccount from './pages/MyAccount'
import Home from './pages/Home'
import Cart from './components/Cart'
import SingleProduct from './pages/SingleProduct'
import LostPassword from './components/LostPassword'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<LoginAndRegister />} />
            <Route path='/forgetpassword' element={<LostPassword />} />
            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/singleproduct' element={<SingleProduct />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
