
import React from "react";
import WhatsApp from "../assets/icons/whatsapp.svg";


const WhatsAppButton = () => {
 
  const message = "Hello, I want to know more about your trailers";
  const whatsappNumber = "+919602368888";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img src={WhatsApp} />
    </a>
  );
};

export default WhatsAppButton;