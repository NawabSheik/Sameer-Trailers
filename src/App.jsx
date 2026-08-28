import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
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
import Bulkers from './pages/products/Bulkers';
import Trailers from './pages/products/Trailers';
import Contact from './pages/Contact';
import SplashScreen from "./components/SplashScreen";
import WhatsappButton from './components/WhatsappButton';
import ContactButton from './components/CTAButton';
import AboutUs from './pages/AboutUs';

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Show splash screen for 3 seconds
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <SplashScreen />; // Show splash screen first
    }
  return (
   <Router>
    <ScrollToTop/>

    <div className='app-style'>
    <Header/>
    <WhatsappButton/>
    <ContactButton/>

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
      <Route path="/product/bulkers" element={<Bulkers/>}/>
      <Route path="/product/trailers" element={<Trailers/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    
    <Footer/>
    </div>
   </Router>
  )
}

export default App
