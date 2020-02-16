import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AliLogo from '../assets/icons/AliLogo';
import SocialMediaIcons from './SocialMediaIcons';
import './Header.scss';
import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

// const menuItems = [
//   { title: 'home', url: '' },
//   { title: 'work', url: '' },
//   { title: 'blog', url: '' }
// ];

const Header = () => {
  const [mobileHeaderItemsStatus, setHeaderItemsStatus] = useState(
    'header-items-hide'
  );

  const [menuItems, setMenuItems] = useState(['home', 'work', 'blog']);

  useEffect(() => {
    const ref = firebase.database().ref('/');

    ref.on('value', snapshot => {
      setMenuItems(snapshot.val().menu);
    });
    console.log('Data retrieved', menuItems);
  }, [menuItems[0]]);

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
            {menuItems.map(item => (
              <li key={item}>
                <a href={'#'}>{item}</a>
              </li>
            ))}
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
