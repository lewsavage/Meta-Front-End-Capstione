import React from 'react'

const SideNav = (props) => {
    return (
        <div className='sideNav'>
            <h3 onClick={props.sideNav}>X</h3>
            <ul>
                {props.navItems.map((link) => (
                    <a key={link.linkName} href={link.url}><li>{link.linkName}</li></a>
                ))}
            </ul>
        </div>
    )
}

export default SideNav