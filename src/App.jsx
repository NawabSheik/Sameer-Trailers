import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import TipTrailer from './pages/TipTrailer';
import GLCTrailer from './pages/GirderLaunchingTrailer';
import ContainerTrailer from './pages/ContainerTrailer';
import RockBodyTrailer from './pages/RockBodyTrailer';
import FlatBedTrailer from './pages/FlatBedTrailer';
import BulkerTrailer from './pages/BulkerTrailer';

const App = () => {
  return (
   <Router>

    <div className='app-style'>
    <Header/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/product/tip-trailer" element={<TipTrailer/>}/>
      <Route path="/product/rock-body-trailer" element={<RockBodyTrailer/>}/>
      <Route path="/product/container-trailer" element={<ContainerTrailer/>}/>
      <Route path="/product/flat-bed-trailer" element={<FlatBedTrailer/>}/>
      <Route path="/product/bulker-trailer" element={<BulkerTrailer/>}/>
      <Route path="/product/girder-launching-trailer" element={<GLCTrailer/>}/>
    </Routes>
    
    <Footer/>
    </div>
   </Router>
  )
}

export default App
