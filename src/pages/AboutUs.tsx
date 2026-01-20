import React from "react";
import "../styles/Aboutus.css";
import "../styles/screen_resolution/common_media_query.css";
import Carousel from "../components/carousel/Carousel";

// Banner images
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

const bannerImages = [banner1, banner2, banner3];

const AboutUs: React.FC = () => {
  return (
    <main className="about-page">
      {/* ===== About Us Carousel ===== */}
      <Carousel
        images={bannerImages}
        title={
          <>
            About <span>Zentrixa</span>
          </>
        }
        subtitle="Driven by Innovation & Technology"
        description="Empowering businesses with scalable, secure, and future-ready IT solutions."
      />

      {/* ===== About Content ===== */}
      <section className="page about-page">
        <div className="page-container">
          <h1 className="page-title">About Us</h1>

          <div className="about-card">
            <p>
              Zentrixa Technologies IT Solutions is a forward-thinking IT
              services company committed to delivering innovative, scalable, and
              reliable technology solutions that help businesses adapt and grow
              in a rapidly evolving digital landscape.
            </p>
          </div>

          <div className="about-card">
            <p>
              With a strong focus on quality engineering and modern
              technologies, we specialize in developing secure, high-performance
              software solutions that are both flexible and future-ready.
            </p>
          </div>

          <div className="about-card">
            <p>
              We provide end-to-end services covering the complete project
              lifecycle — from requirement analysis and solution design to
              development, deployment, and ongoing support.
            </p>
          </div>

          <div className="about-card">
            <p>
              Driven by innovation and a customer-centric mindset, our mission
              is to empower businesses through technology by delivering
              solutions that enhance efficiency and enable sustainable growth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
