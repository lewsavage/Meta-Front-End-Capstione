import React from 'react';
import './BookingForm.css';


const BookingForm = (props) => {

    const handleChange = (e) => {
        if (e.target.name === 'resDate' && e.target.value !== '') {
            props.dispatch({
                type: 'changed resDate',
                field: e.target.name,
                payload: e.target.value
            })
        } else {
            props.dispatch({
                type: 'handle input text',
                field: e.target.name,
                payload: e.target.value
            });
        }
    }

    const resetForm = () => {
        props.dispatch({type: 'reset'})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        for (const value of formData.values()) {
            console.log(value);
        }
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
                    value={props.resDate}
                    onChange={handleChange}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name='resTime'
                    value={props.resTime}
                    onChange={handleChange}
                >

                    {props.availableTimes.map((time) => (
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
                    value={props.numGuests}
                    onChange={handleChange}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name='occasion'
                    value={props.occasion}
                    onChange={handleChange}
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