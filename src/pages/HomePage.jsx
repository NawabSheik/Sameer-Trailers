import React from 'react'
import HeroTrailer from "../assets/hero-img.webp"
import Manufacturing from "../assets/manufacturing.webp";
import Steel from "../assets/steel.webp";
import "../styles/HomePage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Tippers from "../assets/tippers.webp"
import BodyBuilders from "../assets/body-builders.webp"
import Bulkers from "../assets/bulkers.webp"
import Trailers from "../assets/trailers.webp"
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className="hero-section">
        <div className='hero-left'>
        <div className="hero-left-top">
          <h1>MADE IN INDIA</h1>
        </div>

        <div className="hero-left-bottom">
          <h2>BUILT TO PERFORM. BUILT TO LAST.</h2>
          <p> We manufacture high-performance trailers designed to handle the toughest loads, harshest terrains, and longest hauls. When strength, safety, and reliability matter, our engineering delivers without compromise.</p>
        </div>
        </div>
        <div className='hero-right'>
          <img src={HeroTrailer}/>
        </div>
      </div>

      <div className="featured-product-section">
        <div className="featured-product-head">
        <h1 className="feature-product-heading">WHAT WE BUILD</h1>
        </div>
        <div className="featured-products">
        <Swiper
        
        spaceBetween={30}
        navigation={true} 
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          }
        }}
      >
        <SwiperSlide>
          <div>
          <Link to="/product/tippers" className="product-slide">
            <img src={Tippers}/>
            <h2  className='product-name'>Tippers</h2>
          </Link>
          </div>
          
          

        </SwiperSlide>
        <SwiperSlide>
          <div>
          <Link to="/product/tippers" className="product-slide">
            <img src={BodyBuilders}/>
            <h2  className='product-name'>Body Building</h2>
          </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/product/tippers" className="product-slide">
            <img src={Bulkers}/>
            <h2  className='product-name'>Bulkers / Tankers</h2>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/product/tippers" className="product-slide">
            <img src={Trailers}/>
            <h2  className='product-name'>Trailers</h2>
          </Link>
        </SwiperSlide>
       
      </Swiper>
        </div>
      </div>

      <div className="reach-out-section">
        <div className="reach-out-section-left">
          <img src={Manufacturing}/>
        </div>

        <div className='reach-out-section-right'>
          <div className='ros-right-top'>
          <h1>DESIGNED FOR MAXIMUM PAYLOAD</h1>
          </div>
          <div className='ros-right-bottom'>
          <Link to="/contact" className="ros-button">REACH OUT TO US</Link>
          </div>
        </div>
      </div>

      <div className="quality-section">
        <div className="quality-section-head">
          <h2>STRENGTH THAT SETS US APART</h2>
        </div>

        <div className="quality-section-points">
          <div className="quality-section-point">
              <img className="quality-image" src={Steel}/>

              <div className='quality-point'>
                <h2 className="quality-point-head">HIGH GRADE STRUCTURAL STEEL</h2>
                <p className="quality-point-desc">We use premium-quality, heavy-duty steel to ensure superior load-bearing capacity, structural rigidity, and long-term durability even under extreme operating conditions.</p>
              </div>
          </div>
          <div className="quality-section-point">
              <img className="quality-image" src={Steel}/>

              <div className='quality-point'>
                <h2 className="quality-point-head">PRECISION ENGINEERING</h2>
                <p className="quality-point-desc">We use premium-quality, heavy-duty steel to ensure superior load-bearing capacity, structural rigidity, and long-term durability even under extreme operating conditions.</p>
              </div>
          </div>
          <div className="quality-section-point">
              <img className="quality-image" src={Steel}/>

              <div className='quality-point'>
                <h2 className="quality-point-head">REINFORCED CHASSIS DESIGN</h2>
                <p className="quality-point-desc">We use premium-quality, heavy-duty steel to ensure superior load-bearing capacity, structural rigidity, and long-term durability even under extreme operating conditions.</p>
              </div>
          </div>
          <div className="quality-section-point">
              <img className="quality-image" src={Steel}/>

              <div className='quality-point'>
                <h2 className="quality-point-head">HEAVY DUTY AXLES & SUSPENSION</h2>
                <p className="quality-point-desc">We use premium-quality, heavy-duty steel to ensure superior load-bearing capacity, structural rigidity, and long-term durability even under extreme operating conditions.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
