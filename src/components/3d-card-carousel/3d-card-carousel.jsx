/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { MenuImages } from '../../constants/MenuImg';

export function Card3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + MenuImages.length) % MenuImages.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MenuImages.length);
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  const getCardPosition = (index) => (index - currentIndex + MenuImages.length) % MenuImages.length;

  const getOffsetX = (position) => {
    if (position === 0) return 0;
    if (position === 1) return 80;
    return -80;
  };

  return (
    <div className="carousel-container">
      {isZoomed && (
        <div className="overlay" onClick={toggleZoom}>
          {/* Stop click from bubbling to overlay */}
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <img
              src={MenuImages[currentIndex].url}
              alt={MenuImages[currentIndex].name}
              className="image-contain"
            />
          </div>
        </div>
      )}

      {/* Main Carousel */}
      <div className="carousel-wrapper">
        <div className="carousel-stage">
          {MenuImages.map((image, index) => {
            const position = getCardPosition(index);
            const isActive = position === 0;
            const zIndex = MenuImages.length - position;
            const offsetX = getOffsetX(position);
            const scale = 1 - position * 0.05;
            const opacity = position === 0 ? 1 : Math.max(0.3, 1 - position * 0.25);
            let rotateZ;
            if (position === 0) {
              rotateZ = 0;
            } else if (position === 1) {
              rotateZ = -12;
            } else {
              rotateZ = 12;
            }

            return (
              <div
                key={image.id}
                className={`carousel-card ${isActive ? 'card-active' : ''}`}
                style={{
                  transform: `translateX(${offsetX}px) scale(${scale}) rotateZ(${rotateZ}deg)`,
                  zIndex,
                  opacity,
                  top: '50%',
                  left: '50%',
                  marginLeft: '-50%',
                  marginTop: '-50%',
                  width: 'fit-content',
                  height: 'fit-content',
                }}
                onClick={isActive ? toggleZoom : undefined}
              >
                <div
                  className={`card-inner ${isActive ? 'card-highlight' : ''}`}
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    width={400}
                    height={600}
                    className="card-image"
                  />

                  {isActive && (
                    <div className="card-overlay">
                      <p className="overlay-text">Click to zoom</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="carousel-controls">
          <button
            type="button"
            onClick={goToPrevious}
            className="nav-btn"
            aria-label="Previous image"
          >
            <FaChevronLeft className="icon-lg" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="nav-btn"
            aria-label="Next image"
          >
            <FaChevronRight className="icon-lg" />
          </button>
        </div>

        <div className="image-counter">
          {currentIndex + 1} / {MenuImages.length}
        </div>
      </div>

      <div className="carousel-instructions">
        Click a card to zoom in · Click outside to close
      </div>
    </div>
  );
}
