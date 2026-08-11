import React, {useState} from 'react'
import Logo from "../assets/st-logo.png"
import "../styles/header.css"
import {Link} from "react-router-dom"
import { Menu, X } from "lucide-react"; // Or any icon library / SVG


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <a href='/'>
        <img  src={Logo}/>
        </a>
      </div>
      <div className="navbar">
        <Link to="/"  className="nav-options">Home</Link>
        <Link to="/products" className="nav-options">Products</Link>
        <Link to="/about-us" className="nav-options">About Us</Link>
        <Link to="/contact" className="nav-options">Contact</Link>
        <button className="menu-btn" onClick={() => setIsOpen(true)}>
            <Menu  size={28} className="menu-icon" />
            
          </button>
      </div>

      {isOpen && (
        <div className="overlay">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={45} />
          </button>
          <nav className="overlay-nav">
            <a className='nav-options-m' href="/" onClick={() => setIsOpen(false)}>Home</a>
            <a className='nav-options-m' href="/products" onClick={() => setIsOpen(false)}>Products</a>
            <a className='nav-options-m' href="/about-us" onClick={() => setIsOpen(false)}>About Us</a>
            <a className='nav-options-m' href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
          
          </nav>
          
        </div>
        )}
    </div>
  )
}

export default Header
