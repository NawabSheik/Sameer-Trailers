import React from 'react'
import "../../styles/product.css";
import TipTrailers from "../../assets/product-img/flat-bed-trailer.webp";
import TipTrailersMobile from "../../assets/product-thumbnail/flat-bed-trailer.webp";
import GLCBlueprint from "../../assets/blueprints/glc-blueprint.webp";


const TipTrailer = () => {
  return (
    <div className="product-page">
      <img src={TipTrailers} alt="" className="product-hero-image" />
      <img src={TipTrailersMobile} alt="" className="product-hero-mobile-image" />

      <div className="product-head">
        <h2 className="product-page-name">Flat Bed Trailer</h2>
      </div>

      <div className="product-info-div">
        
        <div className="product-info-row">

        <div className="product-info-responsive-col">
          <div className="product-info-col-1">
            <div className="product-info">
            <div className="product-info-head">
              Chassis
            </div>
            <div className="product-info-desc">
              <ul>
                <li className="product-desc-pointer">Main girder - fabricated/Sail/Jindal</li>
                <li className="product-desc-pointer">Cross members - rolled or folded and I beam positioned at suitable locations</li>
                <li className="product-desc-pointer">Material: HSFQ - 450</li>
                
                
              </ul>
            </div>
            </div>
            <div className="product-info">
            <div className="product-info-head">
              King pin
            </div>
            <div className="product-info-desc">
              <ul>
              
                <li className="product-desc-pointer">2" king pin equivalent to IS: 6763 Part I 
                    provided</li>
                <li className="product-desc-pointer">Make: York or equivalent</li>
                
                
              </ul>
            </div>
            </div>
            <div className="product-info">
            <div className="product-info-head">
              Landing leg
            </div>
            <div className="product-info-desc">
              <ul>
              
                <li className="product-desc-pointer"> Two speed geared landing leg /Fabricated</li>
                <li className="product-desc-pointer"> Make : York or equivalent</li>
                
                
              </ul>
            </div>
            </div>
            
          </div>
          <div className="product-info-col-2">
            <div className="product-info">
            <div className="product-info-head">
              Axle
            </div>
            <div className="product-info-desc">
              <ul>
                <li className="product-desc-pointer">Tandem Or Tridem (14 to 18 Ton) Provide</li>
                <li className="product-desc-pointer">Make York,TATA,Kross. equivalent</li>
                
                
              </ul>
            </div>
            </div>
            <div className="product-info">
            <div className="product-info-head">
              Brakes
            </div>
            <div className="product-info-desc">
              <ul>
              
                <li className="product-desc-pointer">Twin line air brake system coupled to 
   prime mover brake system</li>
                <li className="product-desc-pointer">Trailer brakes are actuated from the 
   prime mover</li>
  
   <li className="product-desc-pointer">T24 brake chamber provided on all 
   axles</li>
    <li className="product-desc-pointer">Manually actuated parking brake.</li>
    <li className="product-desc-pointer">QRV or LQRV provided for enhanced 
   braking efficiency</li>
    <li className="product-desc-pointer">ABS/EBS</li>
                
                
              </ul>
            </div>
            </div>
            
          </div>
          </div>
          <div className="product-info-col-3">
            <div className="product-info">
            <div className="product-info-head">
              Painting
            </div>
            <div className="product-info-desc">
              <ul>
                <li className="product-desc-pointer">Surface is cleaned by shot blasting  followed  by painting which  
   confirms ASTM B117.2011 salt spray testing of 500 hours</li>
                
              </ul>
            </div>
            </div>
            <div className="product-info">
            <div className="product-info-head">
              Suspension
            </div>
            <div className="product-info-desc">
              <ul>
              
                <li className="product-desc-pointer">16-ton capacity tridem axle leaf spring suspension with load 
                                    equalizing brackets</li>
                <li className="product-desc-pointer">Tandem 16ton + 14ton pneumatic suspension</li>
                <li className="product-desc-pointer">Tridem pneumatic suspension</li>
                
                
              </ul>
            </div>
            </div>
             
            
          </div>
        
        </div>
      </div>

      <div className="blueprint">
        <img className='blueprint-img' src={GLCBlueprint}/>
      </div>
    
    </div>
  )
}

export default TipTrailer
