import React from 'react'
import './Hero.css'
import heroImage from '../assets/restauranfood.jpg'
import HeroCard from './HeroCard'

const Hero = () => {
  return (
    <div className='hero'>
      <HeroCard />
      <div className='heroImgContainer'>
        <img src={heroImage} alt='table' width={300} height={'auto'} className='heroImg'/>
      </div>
    </div>
  )
}

export default Hero