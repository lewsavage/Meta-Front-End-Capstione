import React from 'react'
import Logo from '../../assets/Logo.svg'
import './Nav.css';
import { navItems } from '../../utils/constants';
import hamburger from '../../assets/icon _hamburger menu.svg';
import SideNav from '../SideNav/SideNav';
import { useState } from 'react';





const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);

const sideNav = () => {
  setMenuToggle(!menuToggle)
  console.log(menuToggle)

}

  return (
    <nav className='nav'>
      <img src={Logo} alt='logo' className='logo'/>
        
      <ul className='navList'>
        {navItems.map((link) => (
          <a key={link.linkName} href={link.url}><li>{link.linkName}</li></a>
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