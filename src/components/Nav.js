import React from 'react'
import Logo from '../assets/Logo.svg'

const navItems = [
  {
    linkName: 'Home',
    url: '/home'
  },
  {
    linkName: 'About',
    url: '/about'
  },
  {
    linkName: 'Menu',
    url: '/menu'
  },
  {
    linkName: 'Reservations',
    url: '/reservations'
  },
  {
    linkName: 'Order Online',
    url: '/order'
  },
  {
    linkName: 'login',
    url: '/login'
  },

]


const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt='logo'/>
      <ul>
        {navItems.map((link) => (
          <a key={link.linkName} href={link.url}><li>{link.linkName}</li></a>
        ))}

      </ul>

    </nav>
  )
}

export default Nav