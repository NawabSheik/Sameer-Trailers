import React from 'react'
import Logo from "../assets/st-logo white.svg"
import "../styles/footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
      <div className="footer-left">
        <img src={Logo}/>
      </div>

      <div className="footer-right">
        <div className="f-social">
          <h2 className="info-head">Social Links</h2>
          <a href="https://whatsapp.com" className="info">Whatsapp</a>
          <a href="https://instagram.com" className="info">Instagram</a>
          <a href="https://facebook.com" className="info">Facebook</a>
        </div>
        <div className="f-products">
          <h2 className="info-head">Products</h2>
          <Link to="/products/tippers" className='info'>Tippers</Link>
          <Link to="/products/tippers" className='info'>Body Builders</Link>
          <Link to="/products/tippers" className='info'>Tankers</Link>
          <Link to="/products/tippers" className='info'>Trailers</Link>
        </div>
        <div className="f-contact">
          <h2 className="info-head">Contact</h2>
          <h2 className="info"> 8JGM+2HJ, near FCI GODOWN, Kawa Kheda,<br/> AMBEDKAR COLONY, Bhilwara, Rajasthan 311001</h2>
          <h2 className="info">info@sameertrailer.in</h2>
          <h2 className="info">+91 96023 68888</h2>
        </div>
      </div>
      </div>

      <span class="footer-stroke"></span>

      <div className="footer-bottom">
        <h2 className="copyright">
        Copyright © 2026 by Sameer Trailers. 
        </h2>
      </div>
    </div>
  )
}

export default Footer
