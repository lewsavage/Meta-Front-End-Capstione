import React from 'react';


const DishCard = (props) => {
  return (
    <div className='dishCard'>
      <img src={require('../../assets/' + props.img + props.ext)} alt={props.dishName} className='dishImage'/>
      <div className='dishCardInfo'>
        <div className='dishCardTitle'>
          <h3>{props.dishName}</h3>
          <h3 className='dishCardPrice'>${props.price}</h3>
        </div>
        <p className='dishCardDescription'>{props.description}</p>
        <h3>Order a delivery</h3>
      </div>
    </div>
  )
}

export default DishCard