import React from 'react'
import Design from "../assets/icons/cad.svg"
import Arrow from "../assets/icons/right-arrow.svg"
import Cutting from "../assets/icons/laser.svg"
import Fabrication from "../assets/icons/welding.svg"
import Welding from "../assets/icons/welding2.svg"
import Painting from "../assets/icons/spray-gun.svg"
import Quality from "../assets/icons/quality.svg"
import "../styles/ChooseUs.css";
import "../styles/ManufacturingProcess.css"

const ChooseUs = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="choose-us">
        <div className="manufacturing-head">
            <div className="choose-us-subheading">MANUFACTURING PROCESS</div>
            <div className="manufacturing-heading">PRECISION IN EVERY STEP</div>
           
        </div>

       <div className="manufacturing-points">
       <div className="manufacturing-pointer">
            <div className="manufacturing-point-number">01</div>
            <div className="manufacturing-icon">
                <img src={Design}/>
            </div>

            <div className="pointer-head">DESIGN</div>
            <div className="pointer-para">Advanced 3D Design & Engineering</div>
        </div>

        <img src={Arrow}/>
        <div className="manufacturing-pointer">
            <div className="manufacturing-point-number">02</div>
            <div className="manufacturing-icon">
                <img src={Cutting}/>
            </div>

            <div className="pointer-head">CUTTING</div>
            <div className="pointer-para">High Performance Cutting for Accuracy</div>
        </div>

        <img src={Arrow}/>
        <div className="manufacturing-pointer">
            <div className="manufacturing-point-number">03</div>
            <div className="manufacturing-icon">
                <img src={Fabrication}/>
            </div>

            <div className="pointer-head">FABRICATION</div>
            <div className="pointer-para">Strong Fabrication by Professionals</div>
        </div>

        <img src={Arrow}/>
        <div className="manufacturing-pointer">
            <div className="manufacturing-point-number">04</div>
            <div className="manufacturing-icon">
                <img src={Welding}/>
            </div>

            <div className="pointer-head">WELDING</div>
            <div className="pointer-para">High Strength Welding for Long Life</div>
        </div>

        <img src={Arrow}/>
        <div className="manufacturing-pointer">
            <div className="manufacturing-point-number">05</div>
            <div className="manufacturing-icon">
                <img src={Painting}/>
            </div>

            <div className="pointer-head">PAINTING</div>
            <div className="pointer-para">Anti corrision painting for extra protection</div>
        </div>

        <img src={Arrow}/>
        <div className="manufacturing-pointer">
            <div className="manufacturing-point-number">06</div>
            <div className="manufacturing-icon">
                <img src={Quality}/>
            </div>

            <div className="pointer-head">QC</div>
            <div className="pointer-para">Strict Quality Inspection before final delivery</div>
        </div>

      

       </div>
      </div>
    </div>
  )
}

export default ChooseUs
