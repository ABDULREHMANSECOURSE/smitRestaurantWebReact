import { useState, useEffect, useRef } from "react";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const next = () => {
        setCurrentIndex(prev =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prev = () => {
        setCurrentIndex(prev =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    /* 🔥 AUTO SLIDE (eslint safe) */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    /* 👆 TOUCH HANDLERS */
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const diff = touchStartX.current - touchEndX.current;

        if (diff > 50) next();      // swipe left
        if (diff < -50) prev();    // swipe right
    };

    return (
        <>
            <div
                className="carousel"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="carouselSlides"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Slide ${i + 1}`}
                            className="carouselSlide"
                        />
                    ))}
                </div>

                <button className="carouselBtns carouselPrev" onClick={prev}>❮</button>
                <button className="carouselBtns carouselNext" onClick={next}>❯</button>

                {/* 🔘 DOTS */}
                <div className="carouselDots">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`carouselDot ${currentIndex === i ? "active" : ""}`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>

            <style>{`
        .carousel {
          position: relative;
          overflow: hidden;
          touch-action: pan-y;
        }

        .carouselSlides {
          display: flex;
          transition: transform 0.6s ease-in-out;
        }

        .carouselSlide {
          width: 100%;
          flex-shrink: 0;
          object-fit: cover;
        }

        .carouselBtns {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.6);
          color: white;
          border: none;
          font-size: 30px;
          padding: 15px 15px;
          cursor: pointer;
          z-index: 10;
        }

        .carouselPrev { 
            left: 0;
            border-top-right-radius:10px; 
            border-bottom-right-radius:10px; 
            }
        .carouselNext {
            border-top-left-radius:10px; 
            border-bottom-left-radius:10px; 
            right: 0; 

        }

        .carouselDots {
          position: absolute;
          bottom: 11px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 10px;
          z-index: 10;
        }

        .carouselDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
        }

        .carouselDot.active {
          background: white;
          transform: scale(1.2);
        }
      `}</style>
        </>
    );
}
export default Carousel