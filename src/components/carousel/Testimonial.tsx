import React, { useRef, useEffect } from "react";
import "../../styles/Testimonial.css";

interface TestimonialItem {
  id: number;
  name: string;
  text: string;
}

interface TestimonialProps {
  testimonials: TestimonialItem[];
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 0.5; // pixels per frame, adjust for speed

  // Duplicate testimonials for seamless infinite scroll
  const items = [...testimonials, ...testimonials];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPos = 0;
    const totalScrollWidth = carousel.scrollWidth / 2; // width of first set

    const step = () => {
      scrollPos += scrollSpeed;

      // Seamless reset at end of first set
      if (scrollPos >= totalScrollWidth) {
        scrollPos = 0;
      }

      carousel.scrollLeft = scrollPos;

      requestAnimationFrame(step);
    };

    const animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, [testimonials, scrollSpeed]);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={carouselRef} className="testimonials-carousel">
        {items.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>"{t.text}"</p>
            <h4>{t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
