import React from 'react';
import Button from '../Button/Button'
import { specials } from '../../utils/constants';
import DishCard from '../DishCard/DishCard';
import './Highlights.css';


const Highlights = () => {
  return (
    <div id='menu' className='highlightsContainer'>

      <div className='highlights'>
        <h1 className='dishSpecialsH1'>This weeks' specials!</h1>
        <Button btnText={'Online Menu'} />
      </div>
      <div className='dishCardContainer'>
      {specials.map((dish) => (
        <DishCard key={dish.dishName} img={dish.dishImage} ext={dish.dishImageExt} dishName={dish.dishName} price={dish.price} description={dish.description} />
      ))}
      </div>
    </div>
  )
}

export default Highlights