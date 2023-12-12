import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
        <div className='divider' />
    <div className='footerContainer'>

        <div className='footerLogo'>
            <img src={Logo} alt='logo' width={130}/>
        </div>
        <div className='footerNav'>
            Navigation
        </div>
        <div className='contactInfo'>
            Contact Info
        </div>
        <div className='socialLinks'>
            Social Media Links
            <div className='icons'>
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            </div>
        </div>
    </div>
    <div className='copyright'><p>Copyright 2023 - Little Lemon</p></div>
    </footer>
  )
}

export default Footer