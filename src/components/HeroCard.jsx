import React from 'react';
import './HeroCard.css';
import Button from './Button';

const HeroCard = () => {
    return (
        <div className='heroCard'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                <span>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</span>
            </p>
            <Button btnText={'Reserve A Table'} />
        </div>
    )
}

export default HeroCard