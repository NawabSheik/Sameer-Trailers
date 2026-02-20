import React from 'react'
import Logo from "../assets/st-logo.png"
import "../styles/header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo}/>
      </div>
      <div className="navbar">
        <Link to="/"  className="nav-options">Home</Link>
        <Link to="/products" className="nav-options">Products</Link>
        <Link to="/about-us" className="nav-options">About Us</Link>
        <Link to="/contact" className="nav-options">Contact</Link>
      </div>
    </div>
  )
}

export default Header
