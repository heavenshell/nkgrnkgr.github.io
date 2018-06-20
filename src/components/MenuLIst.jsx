import React from 'react';
import '../css/MenuList.css';

const listItems = props => props.linkList.map((item, index) => {

    const delayTime = Number(index) * 0.1;
    const delayStyle = {
        animationDelay: delayTime + 's',
    }

    return (
        <li className="menuListItem" style={delayStyle} key={item + index}>
            <a href={item.href}>
                <span>{item.title}</span>
                <img src={item.imgSrc} alt={item.title} className='list_icon' />
            </a>
        </li>
    )
});

const MenuList = (props) => (
    <div className="menuListWapper">
        <ul className="menuList">{listItems(props)}</ul>
    </div>
)

export default MenuList;