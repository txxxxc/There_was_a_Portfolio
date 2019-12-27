import React from 'react';
import {Link} from 'gatsby'
import '../styles/header.scss'

const Header = () => (
  <header className="header">
    <div className="header__title">
      <Link to="/#home" className="header__title--link">
        Home
      </Link>
    </div>
    <div className="header__menu">
      <Link to="/#about" className="header__menu--link">
        About
      </Link>
      <Link to="/#products" className="header__menu--link">
        Products
      </Link>
      <Link to="/#skills" className="header__menu--link">
        Skills
      </Link>
    </div>
  </header>
)

export default Header;