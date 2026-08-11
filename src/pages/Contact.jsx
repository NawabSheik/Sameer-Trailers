import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-div">
      {/* Contact Details */}
      <div className="contact-half contact-info">
        <h2>Get In Touch</h2>

      

        <div className="info-box">
          <h4>Address</h4>
          <p>
            8JGM+2HJ, near FCI GODOWN, Kawa Kheda,
AMBEDKAR COLONY
            <br />
            Bhilwara, Rajasthan 311001
          </p>
        </div>

        <div className="info-box">
          <h4>Phone</h4>
          <p>+91 96023 68888</p>
        </div>

        <div className="info-box">
          <h4>Email</h4>
          <p>info@sameertrailer.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-half">
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;