import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import TipTrailer from './pages/products/TipTrailer';
import GLCTrailer from './pages/products/GirderLaunchingTrailer';
import ContainerTrailer from './pages/products/ContainerTrailer';
import SideWallTrailer from './pages/products/SideWallTrailer';
import FlatBedTrailer from './pages/products/FlatBedTrailer';
import BulkerTrailer from './pages/products/BulkerTrailer';
import Tippers from './pages/products/Tippers';

const App = () => {
  return (
   <Router>

    <div className='app-style'>
    <Header/>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/product/tip-trailer" element={<TipTrailer/>}/>
      <Route path="/product/side-wall-trailer" element={<SideWallTrailer/>}/>
      <Route path="/product/container-trailer" element={<ContainerTrailer/>}/>
      <Route path="/product/flat-bed-trailer" element={<FlatBedTrailer/>}/>
      <Route path="/product/bulker-trailer" element={<BulkerTrailer/>}/>
      <Route path="/product/girder-launching-trailer" element={<GLCTrailer/>}/>
       <Route path="/product/tippers" element={<Tippers/>}/>
    </Routes>
    
    <Footer/>
    </div>
   </Router>
  )
}

export default App
