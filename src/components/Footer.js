import React from 'react';
import AliLogo from '../assets/icons/AliLogo';
import SocialMediaIcons from './SocialMediaIcons';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="copyright">
      <AliLogo className="ali-logo" />
      <span>© ALI HAYDAR 2022</span>
    </div>
    <SocialMediaIcons className="social-media-icons" />
  </div>
);

export default Footer;
