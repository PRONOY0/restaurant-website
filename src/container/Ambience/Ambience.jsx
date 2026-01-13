import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Ambience.css';

const Ambience = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.insideShot} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="The Vibe" />
      <h1 className="headtext__cormorant">Where Comfort Comes First</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            A cozy indoor space designed for comfort and easy moments.
          </p>
        </div>
        <p className="p__opensans">
          A cozy indoor space designed for comfort and easy moments. With warm
          lighting, relaxed seating, and thoughtfully created interiors, Aire
          Café brings together good food, refreshing beverages, and smooth
          hookah to set the mood. Whether you’re here to unwind, catch up with
          friends, or enjoy a laid-back hangout, everything is crafted to feel
          welcoming and effortless.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Signature</p>
        <p className="p__opensans">— Team Aire Café</p>
      </div>
    </div>
  </div>
);

export default Ambience;
