import React from 'react'
import DiningImage from '../../assets/ronan-kruithof-PCE0T5i4pDI-unsplash.jpg'

const ConfirmationPage = () => {

  const confirmation = JSON.parse(localStorage.getItem('reservation'));
    
    let date = new Date (confirmation.resDate).toDateString()
    let time = confirmation.resTime
    let fixHours = time.split(':')[0]
    let minutes = time.split(':')[1]
    let suffix = parseInt(fixHours) >= 12 ? " PM":" AM"; 
    let resHour = ((fixHours + 11) % 12 + 1) + ":" +minutes + suffix
    let guests = confirmation.numGuests
    let occasion = confirmation.occasion

  return (
    <div className='bookingsPageContainer'>
    <div className='bookingBanner'>
    <h1>Success!</h1>
    <h2>Thank you for choosing Little Lemon</h2>
    </div>
    <div className='bookingPageHeroImg'>
    <img src={DiningImage} alt='Dining Table' width={'100%'}/>

    </div>
    <h4>Booking Confirmed!</h4>
      <p>Reservation Date: {date}</p>
      <p>Reservation Time: {resHour}</p>
      <p>Number of Guests: {guests}</p>
      <p>Ocassion: {occasion}</p>
    </div>
  )
}

export default ConfirmationPage