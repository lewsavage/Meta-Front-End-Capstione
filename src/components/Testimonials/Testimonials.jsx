import React from 'react';
import './Testimonials.css';
import { testimonials } from '../../utils/constants';

export const TestimonialCard = () => {
  return (
    <>
      {testimonials.map((data) => (
        <div className='testimonial'>
          <div key={data.userName}>{data.starRating}
          </div>
          <div className='userProfile'>
            <div className='userImage'>
              <img src={data.userImage} alt='userImg' />
            </div>
            <div className='userName'>{data.userName}</div>
          </div>
          <div className='reviewText'>{data.review}</div>
        </div>
      ))}
    </>
  )
}

const Testimonials = () => {
  return (
    <div className='testimonialSection'>
    <div>
    <h3>Testimonials</h3>
    </div>
    <div className='testimonialContainer'>
      <TestimonialCard />
    </div>
    </div>

  )
}

export default Testimonials