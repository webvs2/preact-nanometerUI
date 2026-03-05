import "./style.scss";
import { h } from "preact";
import { useState, useEffect, useRef, useCallback } from "preact/hooks";

interface CarouselProps {
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  arrows?: boolean;
  children?: any;
}

function Carousel(props: CarouselProps) {
  const {
    autoplay = true,
    autoplaySpeed = 3000,
    dots = true,
    arrows = true,
    children,
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const childrenArray = Array.isArray(children) ? children : [children].filter(Boolean);
  const itemCount = childrenArray.length;

  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev + 1) % itemCount);
      }
    }, autoplaySpeed);
  }, [autoplaySpeed, isHovering, itemCount]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (autoplay && itemCount > 1) {
      startAutoplay();
    }
    return () => {
      stopAutoplay();
    };
  }, [autoplay, itemCount, startAutoplay, stopAutoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  if (itemCount === 0) return null;

  return (
    <div
      class="na-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        class="na-carousel__track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {childrenArray.map((child, index) => (
          <div class="na-carousel__item" key={index}>
            {child}
          </div>
        ))}
      </div>

      {arrows && itemCount > 1 && (
        <>
          <button
            class="na-carousel__arrow na-carousel__arrow--prev"
            onClick={handlePrev}
            type="button"
          >
            <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
              <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
            </svg>
          </button>
          <button
            class="na-carousel__arrow na-carousel__arrow--next"
            onClick={handleNext}
            type="button"
          >
            <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
            </svg>
          </button>
        </>
      )}

      {dots && itemCount > 1 && (
        <div class="na-carousel__dots">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              class={`na-carousel__dot ${index === currentIndex ? "na-carousel__dot--active" : ""}`}
              onClick={() => handleDotClick(index)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
export type { CarouselProps };
