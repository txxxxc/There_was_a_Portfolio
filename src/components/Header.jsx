import React from 'react';
import {Link} from 'gatsby'
import '../styles/header.scss'

const Header = () => (
  <header className="header">
    <div className="header-title">
      <Link to="/#home" className="header-title__link">
        Home
      </Link>
    </div>
    <div className="header-menu">
      <Link to="/#about" className="header-menu__link">
        About
      </Link>
      <Link to="/#products" className="header-menu__link">
        Products
      </Link>
      <Link to="/#skills" className="header-menu__link">
        Skills
      </Link>
    </div>
  </header>
)

export default Header;