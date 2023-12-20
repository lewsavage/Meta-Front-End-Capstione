import React from 'react';
import './About.css'
import imageA from '../../assets/MarioAdrianA.jpg';
import imageB from '../../assets/MarioAdrianB.jpg';
const About = () => {
  return (
    <div id='about' className='aboutSection'>
      <div className='aboutText'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          <span>Amet consequat nisi adipisicing laboris deserunt ut nostrud excepteur sint eiusmod nostrud do quis quis. Elit irure mollit occaecat exercitation. Qui mollit do ipsum elit commodo cillum nulla anim pariatur laborum aliquip.</span>
        </p>
      </div>
      <div className='imageContainer'>
        <img src={imageA} alt='Mario and Adrian 1' className='aboutImage' />
        <img src={imageB} alt='Mario and Adrian 2' className='aboutImage' />
      </div>
    </div>
  )
}

export default About