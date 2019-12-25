import React from 'react';
import '../styles/header.scss'

const Header = () => (
  <header className="header">
    <div className="header__title">
      <a href="/" className="header__title--link">
        Home
      </a>
    </div>
    <div className="header__menu">
      <a href="/" className="header__menu--link">
        About
      </a>
      <a href="/" className="header__menu--link">
        Products
      </a>
      <a href="/" className="header__menu--link">
        Skills
      </a>
    </div>
  </header>
)

export default Header;