import { useEffect, useRef } from "react";
import "../styles/ScrollImage.css";
import Tipper from "../assets/tippers 2.webp"

const ScrollImage = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    // Detect whether section is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      {
        threshold: 0,
      }
    );

    observer.observe(section);

    const handleScroll = () => {
      // Don't animate if section isn't visible
      if (!isVisible.current) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Progress from 0 → 1 while section passes through viewport
      let progress =
        (viewportHeight - rect.top) /
        (viewportHeight + rect.height);

      progress = Math.min(Math.max(progress, 0), 1);

      // Right → Left
      const startX = 120;
      const endX = -120;

      const x = startX + (endX - startX) * progress;

      imageRef.current.style.transform = `translateX(${x}%)`;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-section">
      <div className="image-wrapper">
        <img
          ref={imageRef}
          src={Tipper}
          alt="Scrolling visual"
        />
      </div>
    </section>
  );
};

export default ScrollImage;