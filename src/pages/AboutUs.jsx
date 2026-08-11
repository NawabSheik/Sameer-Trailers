import React from 'react'
import "../styles/about.css";
import AboutImg1 from "../assets/about-image/about-img1.webp"
import AboutImg2 from "../assets/about-image/about-img2.webp"
import AboutImg3 from "../assets/about-image/about-img3.webp"
import AboutImg3m from "../assets/about-image/about-img3m.webp"

const AboutUs = () => {
  return (
    <div className='about-page'>
      <div className="about-hero">
        <div className="about-hero-left">
            <h1 className="about-hero-head">About Us</h1>
            <h3 className="brand-name">Sameer Trailer Motor Body Pvt. Ltd.</h3>
            <p className="about-brand">
                is where rugged Indian transport meets purpose-built engineering. From a single facility in Bhilwara, our trailers roll out everyday to mines, highways and construction sites across the country, built to handle heavyloads, bad roads and tight delivery schedules without giving up. <br/> <br/>Instead of outsourcing, we keep design, fabrication and finishing under one roof, so every weld, bracket and cross member follows a clear standard. Modern machinery, strict processes and a hands-on team mean our trailers don't just look strong on day one they stay working, earning a moving for years.
            </p>
        </div>

        <div className="about-hero-right">
            <img src={AboutImg1}/>
        </div>
      </div>

     <div className="about-stats">
      <div className="stat">
      <div className="stat-num">
        <h1>1991</h1>
      </div>
      <div className="stat-name">
        <h3>Establishment Year</h3>
      </div>
      </div>
      <div className="stat">
      <div className="stat-num">
        <h1>1500+</h1>
      </div>
      <div className="stat-name">
        <h3>Happy Clients</h3>
      </div>
      </div>
      <div className="stat">
      <div className="stat-num">
        <h1>150+</h1>
      </div>
      <div className="stat-name">
        <h3>Skilled Team</h3>
      </div>
      </div>
      <div className="stat">
      <div className="stat-num">
        <h1>35+</h1>
      </div>
      <div className="stat-name">
        <h3>Trailer Variants</h3>
      </div>
      </div>
     </div>

     <div className="about-innovation">

      <div className="about-innovation-head"><h2 className='special'> Powered by  <span className='highlight'> Innovation </span></h2></div>
      <div className="about-innovation-content">
      <div className="about-innovation-left">
        <div className="about-innovation-left-content">
        <div className="about-innovation-left-head">
          <h3>Engineered to Move</h3>
        </div>

        <div className="about-innovation-left-para">
          <p>Sameer Trailer keeps your business moving with trailers engineered to work as hard as you do. Every product is designed to deliver more uptime, better payloads and consistent performance on demanding Indian routes. With our in-house design and manufacturing setup, we create optimized bodies that balance strength, weight and durability for real—world operating conditions. Advanced fabrication, high-grade materials and strict quality checks on every chassis ensure you get a trailer that runs longer and costs less to maintain</p>
        </div>
        </div>

        <div className="about-innovation-left-content">

        <div className="about-innovation-left-head">
          <h3>Reliability to Safety</h3>
        </div>

        <div className="about-innovation-left-para">
          <p>Behind every Sameer trailer is a team that understands transport challenges from the ground up. From concept to final dispatch, our focus stays on reliability, safety and faster turnaround so your fleet always has an edge on the road.</p>
        </div>
        </div>
        
      </div>

      <div className="about-innovation-right">
        <img src={AboutImg2} alt=""  />
      </div>
      </div>
     </div>

     <div className="about-team">
     
    
          <img src={AboutImg3} className="team-img-desktop"/>
          <img src={AboutImg3m} className="team-img-mobile"/>
          <div className="about-team-content">
        <div className="about-team-para">
          <p>Sameer Trailer Motor Body Pvt. Ltd. began with a clear goal — to bring organised, quality-driven trailer manufacturing to transporters who need dependable equipment every day. From our base in Bhilwara, Rajasthan, we have grown into a specialist in custom trailer bodies designed specifically for Indian road and load conditions. Today, our team of skilled engineers, supervisors and shop-floor experts works across design, fabrication, painting and final inspection under one roof. By combining real transport experience with modern machinery and strict processes, we build trailers that consistently deliver the strength, stability and uptime our customers expect from Sameer Trailer Motor Body.</p>
        </div>
      </div>
  
      </div>

      
    </div>
  )
}

export default AboutUs
