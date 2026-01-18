import React from "react";
import "../styles/Home.css";
import Carousel from "../components/carousel/Carousel";

// Banner images
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.jpg";

// About image
import man1 from "../assets/images/man1.jpg";

// Feature icons
import bulb from "../assets/images/bulb.png";
import lock from "../assets/images/lock1.png";
import headset from "../assets/images/headset1.png";

const bannerImages = [banner1, banner2, banner3, banner4, banner5];

const Home: React.FC = () => {
  return (
    <main className="home">
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
        <div className="about-container">
          <div className="about-content">
            <h2>About Zentrixa Technologies</h2>
            <p>
              At Zentrixa, we combine innovation and expertise to deliver scalable,
              secure, and impactful IT solutions tailored to your business needs.
            </p>
            <a href="/about-us" className="btn primary">
              Learn More
            </a>
          </div>
          <div className="about-image">
            <img src={man1} alt="About Zentrixa Technologies" />
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="services-preview">
        <h2>Our Core Services</h2>
        <div className="services-cards">
          <article className="service-card">
            <h3>Software Development</h3>
            <p>Custom, scalable software solutions.</p>
          </article>
          <article className="service-card">
            <h3>Web Applications</h3>
            <p>High-performance, responsive web apps.</p>
          </article>
          <article className="service-card">
            <h3>Cloud & Deployment</h3>
            <p>Secure and scalable cloud infrastructure.</p>
          </article>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="features-section">
        <h2>Why Choose Zentrixa?</h2>
        <div className="features-grid">
          <article className="feature-card">
            <img src={bulb} alt="Innovation" />
            <h3>Innovative Solutions</h3>
            <p>Future-ready and cutting-edge technologies.</p>
          </article>
          <article className="feature-card">
            <img src={lock} alt="Security" />
            <h3>Secure & Reliable</h3>
            <p>Built with enterprise-grade security.</p>
          </article>
          <article className="feature-card">
            <img src={headset} alt="Support" />
            <h3>24/7 Support</h3>
            <p>Always-on support for your business.</p>
          </article>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="cta-section">
        <div className="cta-glass">
          <h2>Ready to Transform Your Business?</h2>
          <p>Get in touch with us today and let’s build the future together.</p>
          <a href="/contact-us" className="btn primary">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
