import React from 'react';
import PropTypes from 'prop-types';
import '../css/Footer.css';

const Footer = ({ linkList }) => (
  <footer>
    <ul className="footerList">
      {linkList.map(item => (
        <li className="footerListItem" key={item.title}>
          <a href={item.href} target="about">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
    © 2011-2018 Nokogiri.
  </footer>
);

Footer.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Footer;
