import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";
import "../../styles/screen_resolution/common_media_query.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Zentrixa Technologies</h3>
          <p>
            Delivering reliable, scalable, and innovative IT solutions. Your
            trusted partner in technology.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: zentrixatechnologies@gmail.com</p>
          <p>Phone: +91 6264420968</p>
          <p>Address: Bengaluru, Karnataka, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zentrixa Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
