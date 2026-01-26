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
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 0.4; // smooth speed

  // Duplicate items for seamless loop
  const items = [...testimonials, ...testimonials];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPos = 0;
    const singleSetWidth = carousel.scrollWidth / 2;
    let isPaused = false;

    const step = () => {
      if (!isPaused) {
        scrollPos += scrollSpeed;

        if (scrollPos >= singleSetWidth) {
          scrollPos = 0;
        }

        carousel.scrollLeft = scrollPos;
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    // Pause on hover
    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", resume);
    carousel.addEventListener("touchstart", pause);
    carousel.addEventListener("touchend", resume);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      carousel.removeEventListener("mouseenter", pause);
      carousel.removeEventListener("mouseleave", resume);
      carousel.removeEventListener("touchstart", pause);
      carousel.removeEventListener("touchend", resume);
    };
  }, [testimonials]);

  return (
    <section className="testimonial-section">
      <div ref={carouselRef} className="testimonials-carousel">
        {items.map((t, index) => (
          <article
            key={`${t.id}-${index}`}
            className="testimonial-card"
          >
            <p className="testimonial-text">“{t.text}”</p>

            <div className="testimonial-author">
              <h4>{t.name}</h4>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
