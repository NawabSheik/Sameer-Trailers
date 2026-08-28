import React from "react";
import { Link } from "react-router-dom";
import CTA from "../assets/icons/messenger.svg"

const ContactButton = () => {
  return (
    <Link
      to="/contact"
      className="contact-button"
      aria-label="Contact us"
    >
      <img src={CTA}/>
    </Link>
  );
};

export default ContactButton;