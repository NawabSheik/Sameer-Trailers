import React from 'react'
import "../../styles/product.css";
import TipTrailers from "../../assets/product-img/bulker-trailer.webp";
import TipTrailersMobile from "../../assets//product-thumbnail/bulker-trailer.webp";
import GLCBlueprint from "../../assets/blueprints/glc-blueprint.webp";


const TipTrailer = () => {
  return (
    <div className="product-page">
      <img src={TipTrailers} alt="" className="product-hero-image" />
      <img src={TipTrailersMobile} alt="" className="product-hero-mobile-image" />

      <div className="product-head">
        <h2 className="product-page-name">Bulker Trailer</h2>
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
                <li className="product-desc-pointer">The Main chassis is a ladder type construction with cross members.</li>
                <li className="product-desc-pointer">The structure shall ensure maximum load bearing capacity with low unladen weight. </li>
                <li className="product-desc-pointer">Construction will ensure maximum torsional stability.</li>
                <li className="product-desc-pointer">Cross members - rolled or folded positioned at suitable locations.</li>
                <li className="product-desc-pointer">Shell -4MM ST 52/ Dish End - 5MM ST 52 (thickness)</li>
                
              </ul>
            </div>
            </div>
            <div className="product-info">
            <div className="product-info-head">
              Loading
            </div>
            <div className="product-info-desc">
              <ul>
              
                <li className="product-desc-pointer">3 *450mm diameter hatches </li>
                <li className="product-desc-pointer">Designed max working pressure: 165 to 180 kpa </li>
                
                
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
                <li className="product-desc-pointer">Tandem or Tridom (14 to 18ton) provided</li>
                <li className="product-desc-pointer">Make York,TATA,Kross, or equivalent</li>
                
                
              </ul>
            </div>
            </div>
            <div className="product-info">
            <div className="product-info-head">
              Brakes
            </div>
            <div className="product-info-desc">
              <ul>
              
                <li className="product-desc-pointer">Twin line air brake system coupled to prime mover brake system</li>
                <li className="product-desc-pointer">Trailer brakes are actuated from the prime mover</li>
                <li className="product-desc-pointer">T24 brake chamber provided on all axles</li>
    <li className="product-desc-pointer">Manually actuated parking brake.</li>
    <li className="product-desc-pointer">QRV or LQRV provided for enhanced 
   braking efficiency</li>
 
                
                
              </ul>
            </div>
            </div>
            <div className="product-info">
            <div className="product-info-head">
              Pressure Gauge
            </div>
            <div className="product-info-desc">
              <ul>
              
                <li className="product-desc-pointer"> 100 mm diameter 0-10 Kg/Cm2 fluid intersec</li>
             
                
                
              </ul>
            </div>
            </div>
            
          </div>
          
          </div>
          <div className="product-info-col-3">
            <div className="product-info">
            <div className="product-info-head">
              Relief Valve
            </div>
            <div className="product-info-desc">
              <ul>
                <li className="product-desc-pointer">A relief valve will be installed in the vessel in accordance with IS - 2526 Class 3 requirements.</li>
                
              </ul>
            </div>
            </div>
            <div className="product-info">
            <div className="product-info-head">
              Suspension
            </div>
            <div className="product-info-desc">
              <ul>
              
                <li className="product-desc-pointer">Tridem suspension -Heavy duty free ended laminated leaf spring assemblies with "U" clamps & Spring pads.</li>
                <li className="product-desc-pointer">The alignment of the axles is achieved through tow adjustable torque arms provided on each side and
                  locked.</li>
                <li className="product-desc-pointer">12-16 ton capacity tandem or tridem axle leaf spring suspension with load equalizing brackets</li>
                
                
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
