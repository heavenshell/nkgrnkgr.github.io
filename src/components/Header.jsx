import React from 'react';
import PropTypes from 'prop-types';
import logo from '../svg/logo.svg';
import Menu from './Menu';
import '../css/Header.css';

const Header = props => {
  const { isMenuOpen } = props;
  const { handleChangeMenuOpen } = props;

  return (
    <header className="header">
      <a href="./">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <Menu
        isMenuOpen={isMenuOpen}
        handleChangeMenuOpen={handleChangeMenuOpen}
      />
    </header>
  );
};

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleChangeMenuOpen: PropTypes.func.isRequired
};

export default Header;
