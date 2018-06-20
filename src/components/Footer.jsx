import React from 'react';
import PropTypes from 'prop-types';
import '../css/Footer.css';

const links = props => props.linkList.map((item, index) => {

    return (
        <li className="footerListItem" key={item + index}>
            <a href={item.href} target="about">
                <span>{item.title}</span>
            </a>
        </li>
    )
})

const Footer = (props) => (
    <footer>
        <ul className="footerList">
            {links(props)}
        </ul>
        © 2011-2018 Nokogiri.
    </footer>
)

Footer.propTypes = {
    linkList: PropTypes.array.isRequired,
};

export default Footer;