import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">
        AIRE — A Rooftop Café Made for Views & Vibes
      </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Elevated above the everyday, AIRE is a rooftop café designed for slow
        evenings, good conversations, and unforgettable plates. From warm
        interiors to open skies, every corner invites you to pause, unwind, and
        stay a little longer.
      </p>
      <button
        type="button"
        className="custom__button"
        onClick={() => {
          window.location.href = '#menu';
        }}
      >
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="AIRE rooftop cafe ambience with city skyline views" />
    </div>
  </div>
);

export default Header;
