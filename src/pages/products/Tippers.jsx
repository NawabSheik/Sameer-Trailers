import React from 'react'
import Tipper1 from "../../assets/product-img/tippers/rb-tipper1.webp";
import Tipper2 from "../../assets/product-img/tippers/rb-tipper2.webp";
import Tipper3 from "../../assets/product-img/tippers/rb-tipper3.webp";
import Tipper4 from "../../assets/product-img/tippers/rb-tipper4.webp";
import Tipper5 from "../../assets/product-img/tippers/rb-tipper5.webp";
import "../../styles/ProductPage.css";

const Tippers = () => {
  return (
    <div className='product-page'>

        <div className="product-page-head">
            <h1 className="product-page-heading">Tippers</h1>
            <span className="head-stroke"></span>
        </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Tipper1}/>
            <h3 className="product-catalogue-name">20 cum ROCK BODY U SHAPE</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>Designed for heavy-duty mining and construction work, this tipper ensures smooth unloading with its U-shaped body.
                                            Offers better material flow and reduced residue inside the body.</p>
          
            <div className='btn-div'>
                <button className='know-more-btn'>Know More</button>
            </div> 
        </div>
        
      </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Tipper2}/>
            <h3 className="product-catalogue-name">22.5/24 Cum ROCK BODY TIPPER</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>High-capacity tipper built for transporting large volumes of aggregates.
Strong body structure ensures durability in rough terrain operations.</p>
          
            <div className='btn-div'>
                <button className='know-more-btn'>Know More</button>
            </div> 
        </div>
        
      </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Tipper3}/>
            <h3 className="product-catalogue-name">14/16 Cum Rock Body Tipper</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>Compact yet powerful, ideal for medium-scale construction and urban projects.
Provides efficient loading, transport, and quick discharge cycles.</p>
          
            <div className='btn-div'>
                <button className='know-more-btn'>Know More</button>
            </div> 
        </div>
        
      </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Tipper4}/>
            <h3 className="product-catalogue-name">25/32 Cum Box Body Tip Trailer
</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>Trailer-based solution for bulk material transport with higher payload capacity.
Box design ensures stability and secure movement over long distances.</p>
          
            <div className='btn-div'>
                <button className='know-more-btn'>Know More</button>
            </div> 
        </div>
        
      </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Tipper5}/>
            <h3 className="product-catalogue-name">22/24 Cum Box Body Tip Trailer</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>Balanced capacity trailer for efficient logistics in construction and mining.
Durable build with optimized tipping for faster unloading.</p>
          
            <div className='btn-div'>
                <button className='know-more-btn'>Know More</button>
            </div> 
        </div>
        
      </div>
    </div>
  )
}

export default Tippers
