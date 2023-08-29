import React from 'react';
import logo from '../../Assets/logo.png';

function Navbar() {
  return (
    <div>
      <nav>
        <div id="nav-left">
          <img src={logo} alt="Logo" id="nordic" />
        </div>
        <div id="nav-right">
          <a href="/">
            <h5>BLOG</h5>
          </a>
          <a href="/">
            <h5>ABOUT</h5>
          </a>
          <a href="/">
            <h5>LINKS</h5>
          </a>
          <a href="/">
            <h5>PROJECTS</h5>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
