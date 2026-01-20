import React from "react";
import "../styles/Services.css";
import "../styles/screen_resolution/common_media_query.css";
import Carousel from "../components/carousel/Carousel";

import service1 from "../assets/images/banner1.jpg";
import service2 from "../assets/images/banner2.jpg";
import service3 from "../assets/images/banner3.jpg";
import service4 from "../assets/images/banner4.jpg";
import service5 from "../assets/images/banner5.jpg";

const serviceImages = [service1, service2, service3, service4, service5];

const Services: React.FC = () => {
  return (
    <>
      {/* ===== Carousel at the top ===== */}
      <Carousel
        className="services-carousel"
        images={serviceImages}
        title="Our Services"
        subtitle="Smart IT Solutions for Your Business"
        description="We provide web, cloud, and enterprise solutions tailored to your business needs."
      />

      {/* ===== Services Grid ===== */}
      <div className="page">
        <h1>Our Services</h1>

        <div className="services-grid">
          <div className="service-card">
            <h3>Software Development</h3>
            <p>
              Custom software solutions designed to meet your business needs
              using modern, scalable, and secure technologies.
            </p>
            <div className="stars">★★★★★</div>
          </div>

          <div className="service-card">
            <h3>Web Application Development</h3>
            <p>
              End-to-end web application development focused on performance,
              responsiveness, and user experience.
            </p>
            <div className="stars">★★★★★</div>
          </div>

          <div className="service-card">
            <h3>Backend & API Development</h3>
            <p>
              Robust backend systems and RESTful APIs built for scalability,
              security, and seamless integration.
            </p>
            <div className="stars">★★★★★</div>
          </div>

          <div className="service-card">
            <h3>Cloud & Deployment</h3>
            <p>
              Secure cloud deployment and infrastructure setup on AWS,
              DigitalOcean, and other cloud platforms.
            </p>
            <div className="stars">★★★★★</div>
          </div>

          <div className="service-card">
            <h3>Data Analytics & BI Solutions</h3>
            <p>
              Data analytics solutions that convert raw data into actionable
              insights for better business decisions.
            </p>
            <div className="stars">★★★★★</div>
          </div>

          <div className="service-card">
            <h3>IT Support & Maintenance</h3>
            <p>
              Continuous monitoring, maintenance, and technical support to
              ensure system stability and performance.
            </p>
            <div className="stars">★★★★★</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
