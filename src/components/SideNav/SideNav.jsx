import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const SideNav = (props) => {
    return (
        <div className='sideNav'>
            <h3 onClick={props.sideNav}>X</h3>
            <ul>
                {props.navItems.map((link) => (
                    <Link key={link.linkName} smooth to={link.url} onClick={props.sideNav}>
                    <li>{link.linkName}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default SideNav