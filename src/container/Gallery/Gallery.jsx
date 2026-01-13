/* eslint-disable jsx-quotes */
import React from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id='gallery'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: '#AAAAAA', marginTop: '2rem' }}
        >
          Explore our gallery and get a glimpse of the cozy vibes, delicious
          flavors, and memorable experiences waiting for you at Aire Cafe. From
          our beautifully crafted drinks and mouth-watering treats to our warm,
          inviting interiors, every corner of our café tells a story.
        </p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
            images.gallery05,
            images.gallery06,
            images.gallery07,
            images.gallery08,
            images.gallery09,
            images.gallery10,
            images.gallery11,
            images.gallery12,
            images.gallery13,
            images.gallery14,
            images.gallery15,
            images.gallery16,
          ].map((image, index) => (
            <a
              href="https://www.instagram.com/airecafekolkata"
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </a>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
