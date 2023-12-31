import React from 'react'
import './HeroSection.css'
import heroImage from '../../assets/restauranfood.jpg'
import HeroCard from '../HeroCard/HeroCard'

const HeroSection = () => {
  return (
    <div className='hero'>
      <HeroCard />
      <div className='heroImgContainer'>
        <img src={heroImage} alt='table' width={300} height={'auto'} className='heroImg'/>
      </div>
    </div>
  )
}

export default HeroSection