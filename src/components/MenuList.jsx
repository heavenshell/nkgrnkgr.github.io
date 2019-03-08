import React from 'react';
import PropTypes from 'prop-types';
import '../css/MenuList.css';

const MenuList = props => {
  const { linkList } = props;
  return (
    <div className="menuListWapper">
      <ul className="menuList" />
      {linkList.map((item, index) => {
        const delayTime = Number(index) * 0.1;
        const delayStyle = {
          animationDelay: `${delayTime}s`
        };

        return (
          <li className="menuListItem" style={delayStyle} key={item.href}>
            <a href={item.href}>
              {item.title}
              <img src={item.imgSrc} alt={item.title} className="list_icon" />
            </a>
          </li>
        );
      })}
      <ul />
    </div>
  );
};

MenuList.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MenuList;
