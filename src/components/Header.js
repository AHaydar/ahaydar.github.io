import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@material-ui/icons/Menu';
import AliLogo from '../assets/icons/AliLogo';
import SocialMediaIcons from './SocialMediaIcons';
import './Header.scss';

const Header = () => {
  const [mobileHeaderItemsStatus, setHeaderItemsStatus] = useState(
    'header-items-hide'
  );

  const handleIconToggleClick = () => {
    if (mobileHeaderItemsStatus === 'header-items-hide') {
      setHeaderItemsStatus('header-items-show');
    } else {
      setHeaderItemsStatus('header-items-hide');
    }
  };

  const headerItemStatus = `header-item-status ${mobileHeaderItemsStatus}`;

  return (
    <div className="header">
      <div className="header-logo">
        <AliLogo />
      </div>
      <div className={headerItemStatus}>
        <div>
          <ul>
            <li>
              <Link to="/" onClick={handleIconToggleClick}>
                home
              </Link>
            </li>
            <li>
              <Link to="/now" onClick={handleIconToggleClick}>
                now
              </Link>
            </li>
            <li>
              <HashLink to="/#myWork" onClick={handleIconToggleClick}>
                work
              </HashLink>
            </li>
            <li>
              <a href="https://ali-haydar.medium.com/">blog</a>
            </li>
          </ul>
        </div>
        <SocialMediaIcons className="social-media-icons" />
      </div>
      <MenuIcon
        fontSize="large"
        className="icon-toggle"
        onClick={handleIconToggleClick}
      />
    </div>
  );
};

export default Header;
