import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Whether you are planning to relish a cuppa with your squad or want to
          spend some alone time, Aire Cafe serve as the ideal spot for a casual
          day out. You get a graceful colonial setting accented by several
          lovely elements which exude supreme elegance. The Aire Cafe is your
          local corner coffee shop, serving quality fresh food with a unique,
          gourmet selection.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">The Aire Experience</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          A place where open skies, warm lighting, and relaxed seating come
          together to create a calm yet vibrant rooftop escape. Thoughtfully
          designed with cozy corners and inviting spaces, Aire Café sets the
          mood for unhurried conversations and laid-back evenings. Whether
          you’re here to unwind after a long day, capture beautiful moments, or
          spend slow nights with good company, every detail is meant to feel
          effortless.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
