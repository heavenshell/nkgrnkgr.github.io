import React from 'react';
import github from '../svg/github-logo.svg';
import blog from '../svg/blog.svg';
import qiita from '../svg/qiita.svg';
import twitter from '../svg/twitter.svg';
import speaker from '../svg/speaker.svg';
import '../css/MenuList.css';

const linkList = [
    {
        title: 'Github',
        href: 'https://github.com/nkgrnkgr',
        imgSrc: github
    },
    {
        title: 'Blog',
        href: 'https://nkgr.hatenablog.com/',
        imgSrc: blog
    },
    {
        title: 'Qiita',
        href: 'https://qiita.com/nkgr',
        imgSrc: qiita
    },
    {
        title: 'Twiiter',
        href: 'https://twitter.com/nkgrnkgr',
        imgSrc: twitter
    },
    {
        title: 'SpeakerDeck',
        href: 'https://speakerdeck.com/undefined_name',
        imgSrc: speaker
    },
]

const listItems = linkList.map((item, index) => {

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

const MenuList = () => (
    <div className="menuListWapper">
        <ul className="menuList">{listItems}</ul>
    </div>
)

export default MenuList;