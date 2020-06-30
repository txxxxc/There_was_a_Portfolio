import React from 'react';
import { Link } from 'gatsby';
import '../styles/header.scss';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = (props) => {
  const { size } = props;
  const isSmall = size <= 480;
  // console.log({isSmall})
  // console.log({size})
  return (
    <>
      {isSmall ? (
        <div className="hamburger">
          <Menu
            customBurgerIcon={<FontAwesomeIcon icon={faBars} size="xs" />}
            customCrossIcon={<FontAwesomeIcon icon={faTimes} />}
            // width={'60px'}
            className="hamburger"
          >
            <Link to="/#home" className="hamburger__link">
              Home
            </Link>
            <Link to="/#about" className="hamburger__link">
              About
            </Link>
            <Link to="/#skills" className="hamburger__link">
              Skills
            </Link>
            <Link to="/#products" className="hamburger__link">
              Products
            </Link>
          </Menu>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Header;
