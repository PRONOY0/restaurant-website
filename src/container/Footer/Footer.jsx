import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { IoLogoWhatsapp } from 'react-icons/io';
// import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          11j, 5th Floor, E Topsia Rd, Mirania Gardens, East Topsia, Tangra,
          Kolkata, West Bengal 700046
        </p>
        <p className="p__opensans">+91-9330686337</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.AIRE} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/airecafekolkata"
            aria-label="Visit our Facebook page"
          >
            <FiFacebook />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=919330686337&text=Hi+I+contacted+you+through+your+Google.&type=phone_number&app_absent=0"
            aria-label="Contact us on WhatsApp"
          >
            <IoLogoWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/airecafekolkata"
            aria-label="Visit our Instagram page"
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Sunday:</p>
        <p className="p__opensans">12:00 am - 6:00 am</p>
        <p className="p__opensans">11:00 am - 12:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 Aire Cafe. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
