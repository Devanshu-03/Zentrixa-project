import React from "react";
import "../styles/Home.css";
import Carousel from "../components/carousel/Carousel";

// ✅ Banner images
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.jpg";

// ✅ About us image
import man1 from "../assets/images/man1.jpg";

// Banner images array
const bannerImages = [banner1, banner2, banner3, banner4, banner5];

const Home: React.FC = () => {
  return (
    <div>
      {/* ===== Banner Carousel ===== */}
      <Carousel
        images={bannerImages}
        title={
          <>
            Zentrixa <span>Technologies</span>
          </>
        }
        subtitle="Innovative IT Solutions for Business Growth"
        description="Delivering scalable, secure, and future-ready IT solutions to help organizations succeed in the digital era."
      />

      {/* ===== About Us ===== */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Zentrixa Technologies</h2>
          <p>
            At Zentrixa, we combine innovation and expertise to provide
            end-to-end IT solutions. Our team is dedicated to delivering
            scalable, secure, and impactful technology services tailored to
            your business.
          </p>
          <a href="/about-us" className="btn primary">Learn More</a>
        </div>
        <div className="about-image">
          <img src={man1} alt="About Zentrixa Technologies" />
        </div>
      </section>

      {/* ===== Services Preview ===== */}
      <section className="services-preview">
        <h2>Our Core Services</h2>
        <div className="services-cards">
          <div className="service-card">
            <h3>Software Development</h3>
            <p>Custom software solutions using modern, scalable technologies.</p>
          </div>
          <div className="service-card">
            <h3>Web Application Development</h3>
            <p>Responsive and high-performance web applications tailored to your needs.</p>
          </div>
          <div className="service-card">
            <h3>Cloud & Deployment</h3>
            <p>Secure cloud deployment and infrastructure for scalable systems.</p>
          </div>
        </div>
      </section>

      {/* ===== Features / Why Choose Us ===== */}
      <section className="features-section">
        <h2>Why Choose Zentrixa?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Innovative Solutions</h3>
            <p>We stay ahead of technology trends to deliver cutting-edge solutions.</p>
          </div>
          <div className="feature-card">
            <h3>Secure & Reliable</h3>
            <p>Our systems are built with top security standards for peace of mind.</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Continuous support ensures your business never experiences downtime.</p>
          </div>
        </div>
      </section>

      {/* ===== Call To Action ===== */}
      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Get in touch with us today and let’s build the future together.</p>
        <a href="/contact-us" className="btn primary">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
