import React from 'react'
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css'
const BookingsPage = (props) => {
  return (
    <div className='bookingsPageContainer'>
      <div className='bookingBanner'>
        <h1>Dine with Us!</h1>
        <h2>Online Table Reservations</h2>
      </div>
      <div className='bookingPageHeroImg'>
        {/* <img src={DiningImage} alt='Dining Table' width={'100%'} /> */}
      </div>
      <div className='bookingFormContainer'>
        <h4>Reserve a table today!</h4>
        <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={props.submitForm}
        />
      </div>
    </div>
  )
}

export default BookingsPage