import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LoginAndRegister from './components/LoginAndRegister'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<LoginAndRegister />} />
            <Route path='/login' element={<LoginAndRegister />} />
            <Route path='/register' element={<LoginAndRegister />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
