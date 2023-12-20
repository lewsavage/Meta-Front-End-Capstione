import React from 'react'
import Logo from '../../assets/Logo.svg'
import './Nav.css';
import { navItems } from '../../utils/constants';
import hamburger from '../../assets/icon _hamburger menu.svg';
import SideNav from '../SideNav/SideNav';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';





const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);

const sideNav = () => {
  setMenuToggle(!menuToggle)
}

  return (
    <nav className='nav'>
      <Link to={'/'}><img src={Logo} alt='logo' className='logo'/></Link>
        
      <ul className='navList'>
        {navItems.map((link) => (
          <Link key={link.linkName} smooth to={link.url}><li>{link.linkName}</li></Link>
        ))}
      </ul>
      {
        menuToggle ? <SideNav navItems={navItems} sideNav={sideNav}/>
      : 
      <img src={hamburger} alt='hamburger' className='hamburger' onClick={sideNav}/>
      }

    </nav>
  )
}

export default Nav