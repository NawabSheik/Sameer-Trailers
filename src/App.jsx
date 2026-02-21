import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import TipTrailer from './pages/TipTrailer';

const App = () => {
  return (
   <Router>

    <div className='app-style'>
    <Header/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/product/tip-trailer" element={<TipTrailer/>}/>
    </Routes>
    
    <Footer/>
    </div>
   </Router>
  )
}

export default App
