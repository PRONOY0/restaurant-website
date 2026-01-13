import React from 'react';

import { SubHeading } from '../../components';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          11j, 5th Floor, E Topsia Rd, Mirania Gardens, East Topsia, Tangra,
          Kolkata, West Bengal 700046
        </p>
        <p
          className="p__cormorant"
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">
          Monday - Sunday: 12:00 am - 6:00 am, 11:00 am - 12:00 am
        </p>
      </div>
    </div>

    <div className="map-container" style={{ width: '50%', height: '450px' }}>
      <iframe
        title="Aire Cafe Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.0063522116216!2d88.3894662!3d22.541434799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277003ff2c5eb%3A0x18936e71ab274aca!2sAire%20Cafe!5e0!3m2!1sen!2sin!4v1768332341631!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
);

export default FindUs;
