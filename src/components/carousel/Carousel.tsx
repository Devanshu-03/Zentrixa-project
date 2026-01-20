import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/carousel.css";
import "../../styles/screen_resolution/common_media_query.css";

interface CarouselProps {
  images: string[];
  title: React.ReactNode;
  subtitle: string;
  description: string;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  title,
  subtitle,
  description,
  className = "",
}) => {
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (index === images.length + 1) {
      setIsTransitioning(false);
      setIndex(1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  return (
    <section className={`carousel ${className}`}>
      <div
        ref={trackRef}
        className={`carousel-track ${isTransitioning ? "animate" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Clone LAST */}
        <div
          className="carousel-slide"
          style={{ backgroundImage: `url(${images[images.length - 1]})` }}
        />
        {images.map((img, i) => (
          <div
            key={i}
            className="carousel-slide"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Clone FIRST */}
        <div
          className="carousel-slide"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
      </div>

      {/* Overlay */}
      <div className="carousel-overlay">
        <div className="carousel-content">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>

          <div className="carousel-buttons">
            <Link to="/services" className="btn primary">
              Our Services
            </Link>
            <Link to="/contact-us" className="btn secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
