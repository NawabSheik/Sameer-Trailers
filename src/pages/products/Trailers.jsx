import React from 'react'
import Trailer1 from "../../assets/product-img/trailers/trailer1.webp";
import Trailer2 from "../../assets/product-img/trailers/trailer2.webp";
import Trailer3 from "../../assets/product-img/trailers/trailer3.webp";
import Trailer4 from "../../assets/product-img/trailers/trailer4.webp";
import Trailer5 from "../../assets/product-img/trailers/trailer5.webp";
import "../../styles/ProductPage.css";

const Tippers = () => {
  return (
    <div className='product-page'>

        <div className="product-page-head">
            <h1 className="product-page-heading">Trailers</h1>
            <span className="head-stroke"></span>
        </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Trailer1}/>
            <h3 className="product-catalogue-name">FLAT BED TRAILER</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>Flat Bed Trailer is designed for the efficient transportation of heavy, oversized, and irregularly shaped cargo across diverse industries. Its open platform allows easy loading and unloading from all sides, making it ideal for carrying construction materials, machinery, steel structures, pipes, and industrial equipment. Built with a high-strength chassis and premium-grade materials, it offers excellent load-bearing capacity, stability, and durability. Engineered for long-distance performance and minimal maintenance, the trailer delivers reliable operation while ensuring maximum safety, efficiency, and productivity for demanding transportation requirements.</p>
          
            
        </div>
        
      </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Trailer2}/>
            <h3 className="product-catalogue-name">SKELETAL TRAILER</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>Skeletal Trailer is specifically engineered for the safe and efficient transportation of ISO shipping containers. Featuring a lightweight yet robust chassis, it maximizes payload capacity while maintaining exceptional structural strength. Designed for seamless compatibility with standard container sizes, it includes secure locking mechanisms for enhanced cargo safety during transit. Ideal for ports, logistics hubs, and freight operators, the trailer delivers excellent maneuverability, durability, and fuel efficiency. Manufactured to meet industry standards, it provides dependable performance and cost-effective container transportation for domestic and long-haul operations.</p>
          
           
        </div>
        
      </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Trailer3}/>
            <h3 className="product-catalogue-name">SIDE BODY TRAILER</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>Side Body Trailer is a versatile transportation solution built to handle a wide range of bulk and packaged cargo. The high-strength side panels provide added security while allowing efficient loading and unloading of materials such as agricultural produce, industrial goods, construction materials, and consumer products. Constructed with premium-quality steel and a reinforced chassis, it offers superior durability, high payload capacity, and long service life. Designed for reliability and low maintenance, the trailer ensures safe, efficient, and economical transportation across both short and long-distance routes.</p>
          
           
        </div>
        
      </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Trailer4}/>
            <h3 className="product-catalogue-name">26/32/35/40 Cum. TIP
</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>26/32/35/40 Cum. Tip Trailer is engineered for high-performance bulk material transportation and quick unloading operations. Ideal for mining, construction, infrastructure, and industrial applications, it efficiently carries materials such as sand, gravel, coal, stone, and aggregates. Equipped with a robust hydraulic tipping mechanism, it enables fast and controlled unloading, reducing turnaround time and increasing operational efficiency. Built using high-grade steel with a reinforced structure, the trailer delivers exceptional strength, stability, and durability while ensuring reliable performance under the toughest working conditions.</p>
          
           
        </div>
        
      </div>
      <div className="product-info-row2">
        <div className="product-info-left">
            <img src={Trailer5}/>
            <h3 className="product-catalogue-name">CONTAINER TRAILER</h3>
        </div>
        <div className="product-info-left">
            <p className='product-info-desc'>Container Trailer is designed for the secure and efficient transportation of standard ISO shipping containers. Built with a heavy-duty chassis and precision-engineered frame, it offers exceptional strength, stability, and load-carrying capacity for long-distance logistics operations. The trailer features reliable container locking systems that ensure maximum cargo safety throughout transit. Suitable for ports, logistics companies, warehouses, and intermodal transportation, it delivers smooth handling, low maintenance, and dependable performance. Manufactured to the highest quality standards, it is an ideal solution for efficient containerized cargo movement across diverse transportation networks.</p>
          
           
        </div>
        
      </div>
    </div>
  )
}

export default Tippers
