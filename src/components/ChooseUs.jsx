import React from 'react'
import Steel from "../assets/icons/steel.svg"
import CNC from "../assets/icons/settings.svg"
import Quality from "../assets/icons/shield.svg"
import Design from "../assets/icons/sketch.svg"
import Delivery from "../assets/icons/delivery-truck.svg"
import "../styles/ChooseUs.css";

const ChooseUs = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="choose-us">
        <div className="choose-us-head">
            <div className="choose-us-subheading">Why Choose Us</div>
            <div className="choose-us-heading">Quality That You Can Trust</div>
            <div className="choose-us-para">We use the best materials and advanced technology to manufacture trailers that ensure, durability and high performance</div>
          
        </div>

        <div className="choose-us-points">

            <div className="choose-us-point">
            <div className="choose-us-icon">
                <img src={Steel}/>
            </div>

            <h2 className="point-head">High Strength Steel</h2>
            <p className="point-para">Premium Quality Steek for maximun strength and durability.</p>
            </div>
            <div className="choose-us-point">
            <div className="choose-us-icon">
                <img src={CNC}/>
            </div>

            <h2 className="point-head">Advance CNC Technology</h2>
            <p className="point-para">Precision manufacturing with advanced CNC machines.</p>
            </div>
            <div className="choose-us-point">
            <div className="choose-us-icon">
                <img src={Quality}/>
            </div>

            <h2 className="point-head">ISO Certified Quality</h2>
            <p className="point-para">Products manufactured as per International Quality Standards.</p>
            </div>
            <div className="choose-us-point">
            <div className="choose-us-icon">
                <img src={Design}/>
            </div>

            <h2 className="point-head">Custom Design</h2>
            <p className="point-para">Tailor made trailers as per your requirements.</p>
            </div>
            <div className="choose-us-point">
            <div className="choose-us-icon">
                <img src={Delivery}/>
            </div>

            <h2 className="point-head">On Time Delivery</h2>
            <p className="point-para">Committed to deliver quality products on time.</p>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
