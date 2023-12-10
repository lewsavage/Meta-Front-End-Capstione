import React from 'react'
import './Header.css'
import heroImage from '../../assets/restauranfood.jpg'
import HeroCard from '../Hero/HeroCard'

const Header = () => {
  return (
    <header>
      <HeroCard />
      <div className='heroImgContainer'>
        <img src={heroImage} alt='table' width={300} height={'auto'} className='heroImg'/>
      </div>
    </header>
  )
}

export default Header