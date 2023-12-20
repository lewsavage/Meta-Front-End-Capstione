import React from 'react'
import ConfirmImage from '../../assets/louis-hansel-UtcOhVC-3VU-unsplash.jpg';
import './ConfirmationPage.css';

const ConfirmationPage = () => {

  const confirmation = JSON.parse(localStorage.getItem('reservation'));

  let name = confirmation.resName
  let email = confirmation.resEmail

  let date = new Date(confirmation.resDate).toDateString()
  let time = confirmation.resTime
  let fixHours = time.split(':')[0]
  let minutes = time.split(':')[1]
  let suffix = parseInt(fixHours) >= 12 ? " PM" : " AM";
  let resHour =  parseInt(fixHours) > 12 ? ((fixHours - 12) + ":" + minutes + suffix) : fixHours + ":" + minutes + suffix;
  let guests = confirmation.numGuests
  let occasion = confirmation.occasion

  return (
    <div className='confirmPageContainer'>
      <div className='confirmBanner'>
        <h1>Success!</h1>
        <h2>Thank you for choosing Little Lemon</h2>
      </div>
      <div className='confirmImgContainer'>
        <img src={ConfirmImage} alt='Dining Table' width={'100%'} />
      </div>
      <div className='confirmDetailsContainer'>
      <h4 id='bookingStatus'>Booking Confirmed!</h4>
        <div className='confirmDetails'>
          <div>
            <p>Reservation For:</p>
            <p>Email:</p>
            <p>Reservation Date:</p>
            <p>Reservation Time:</p>
            <p>Number of Guests:</p>
            <p>Ocassion:</p>
          </div>
          <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{date}</p>
            <p>{resHour}</p>
            <p>{guests}</p>
            <p>{occasion}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage