import React from "react";
import "../styles/Aboutus.css";
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
      <section className="page">
        <h1>About Us</h1>
        <p>
          Zentrixa Technologies IT Solutions is a forward-thinking IT services
          company committed to delivering innovative, scalable, and reliable
          technology solutions that help businesses adapt and grow in a rapidly
          evolving digital landscape. We work with startups, small businesses,
          and enterprises to design and build solutions that are aligned with
          their goals and operational needs.
        </p>

        <p>
          With a strong focus on quality engineering and modern technologies, we
          specialize in developing secure, high-performance software solutions
          that are both flexible and future-ready. Our approach combines
          technical expertise, strategic planning, and industry best practices
          to ensure every solution we deliver adds measurable value to our
          clients.
        </p>

        <p>
          At Zentrixa Technologies, we provide end-to-end services covering the
          complete project lifecycle—from requirement analysis and solution
          design to development, deployment, and ongoing support. We emphasize
          transparency, timely delivery, and continuous communication to build
          long-term partnerships based on trust and reliability.
        </p>

        <p>
          Driven by innovation and a customer-centric mindset, our mission is to
          empower businesses through technology by delivering solutions that
          enhance efficiency, improve performance, and enable sustainable
          growth.
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
