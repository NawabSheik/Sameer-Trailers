import React from 'react'
import "../styles/ProductPage.css";
import TipTrailer from "../assets/product-thumbnail/tip-trailer.webp"
import GLCTrailer from "../assets/product-thumbnail/glc-trailer.webp";
import SideWallTrailer from "../assets/product-thumbnail/side-wall-trailer.webp"
import ContainerTrailer from "../assets/product-thumbnail/container-trailer.webp";
import FlatBedTrailer from "../assets/product-thumbnail/flat-bed-trailer.webp";
import BulkerTrailer from "../assets/product-thumbnail/bulker-trailer.webp";
import { Link } from 'react-router-dom';

const ProductPage = () => {
  return (
    <div className="Products">
      <div className="product-row">
        <div className="product-div">
           <img src={GLCTrailer} alt="" className="product-image" />
           <div className="product-details">
          <h1 className="product-name">
           Girder Launching Trailer
          </h1>
          <p className="product-desc">
            Main girder - fabricated <br/>
            Cross members - rolled or folded 
            positioned at suitable locations <br/>
            Material: HSFQ - 450
          </p>
          
           <Link to="/product/girder-launching-trailer" ><button className='product-button'> Learn More </button>  </Link>
        
         </div>
        </div>
        <div className="product-div">
           <img src={ContainerTrailer} alt="" className="product-image" />
           <div className="product-details">
          <h1 className="product-name">
            Container Trailer
          </h1>
          <p className="product-desc">
            Main girder - fabricated <br/>
            Cross members - rolled or folded 
            positioned at suitable locations <br/>
            Material: HSFQ - 450
          </p>

          <Link to="/product/container-trailer" ><button className='product-button'> Learn More </button>  </Link>
         </div>
        </div>
        
        
      </div>
      <div className="product-row">
        <div className="product-div">
           <img src={SideWallTrailer} alt="" className="product-image" />
           <div className="product-details">
          <h1 className="product-name">
            Side Wall Trailer
          </h1>
          <p className="product-desc">
            Main girder - fabricated <br/>
            Cross members - rolled or folded 
            positioned at suitable locations <br/>
            Material: HSFQ - 450
          </p>
          
           <Link to="/product/side-wall-trailer" ><button className='product-button'> Learn More </button>  </Link>
        
         </div>
        </div>
        <div className="product-div">
           <img src={FlatBedTrailer} alt="" className="product-image" />
           <div className="product-details">
          <h1 className="product-name">
            Flat Bed Trailer
          </h1>
          <p className="product-desc">
            Main girder - fabricated <br/>
            Cross members - rolled or folded 
            positioned at suitable locations <br/>
            Material: HSFQ - 450
          </p>

          <Link to="/product/flat-bed-trailer" ><button className='product-button'> Learn More </button>  </Link>
         </div>
        </div>
        
        
      </div>
      <div className="product-row">
        <div className="product-div">
           <img src={BulkerTrailer} alt="" className="product-image" />
           <div className="product-details">
          <h1 className="product-name">
            Bulker Trailer
          </h1>
          <p className="product-desc">
            The Main chassis is a ladder type construction <br/> with cross members.
            positioned at suitable locations <br/>
            Shell -4MM ST 52/ Dish End - 5MM ST 52 (thickness)
          </p>
          
           <Link to="/product/bulker-trailer" ><button className='product-button'> Learn More </button>  </Link>
        
         </div>
        </div>
        <div className="product-div">
           <img src={TipTrailer} alt="" className="product-image" />
           <div className="product-details">
          <h1 className="product-name">
            Tip Trailer
          </h1>
          <p className="product-desc">
            Main girder - fabricated <br/>
            Cross members - rolled or folded 
            positioned at suitable locations <br/>
            Material: HSFQ - 450 or equivalent
          </p>

          <Link to="/product/tip-trailer" ><button className='product-button'> Learn More </button>  </Link>
         </div>
        </div>
        
        
      </div>
      
        
        
      
    </div>
  )
}

export default ProductPage
