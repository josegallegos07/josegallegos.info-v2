import React from 'react';
import NavbarItem from './NavbarItem';

import '../styles/components/Navbar.scss';

function Navbar() {
  const handleClick = (key) => {
    console.log('clicked', key);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-items">
          <NavbarItem label="About" onClick={() => handleClick('about')} />
          <NavbarItem label="Projects" onClick={() => handleClick('projects')} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
