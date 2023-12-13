import React from 'react';
import './BookingForm.css';
import { useState } from 'react';

const defaultFormFields = {
    resDate: '',
    resTime: '',
    numGuests: '',
    occasion: '',    
}


const BookingForm = () => {
    
    const [availableTimes, setAvailableTimes] = useState (['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])


    const [formFields, setFormFields] = useState(defaultFormFields);
    const { resDate, resTime, numGuests, occasion } = formFields;

    const resetForm = () => {
        setFormFields(defaultFormFields);
    }

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormFields ({...formFields, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formFields)
        resetForm();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input 
                    type="date" 
                    id="res-date" 
                    name='resDate'
                    value={resDate}
                    onChange={handleForm}    
                    />
                <label htmlFor="res-time">Choose time</label>
                <select 
                    id="res-time" 
                    name='resTime'
                    value={resTime}
                    onChange={handleForm}
                    >

                        {availableTimes.map ((time) => (
                            <option key={time}>{time}</option>
                        ))}

                </select>
                <label htmlFor="guests">Number of guests</label>
                <input 
                    type="number" 
                    placeholder="Choose number of guests" 
                    min="1" 
                    max="10" 
                    id="guests" 
                    name='numGuests'
                    value={numGuests}
                    onChange={handleForm}    
                    />
                <label htmlFor="occasion">Occasion</label>
                <select 
                    id="occasion" 
                    name='occasion'
                    value={occasion}
                    onChange={handleForm}
                    >
                        <option>Choose your occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                </select>
                <button type="submit">Make Your reservation</button>
            </form>
        </>
    );
}

export default BookingForm