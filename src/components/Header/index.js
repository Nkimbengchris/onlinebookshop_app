import React from 'react';
import './styles.scss';
import Logo from '../../assets/bookolid.png';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="bookolid logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
