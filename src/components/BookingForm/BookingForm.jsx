import React from 'react';
import './BookingForm.css';
import { useState } from 'react';


const BookingForm = (props) => {

    const defaultFields = {
        resName: '',
        resEmail: '',
        resDate: '',
        resTime: '',
        numGuests: '',
        occasion: '',
    }


    const [formFields, setFormFields] = useState(defaultFields);
    const {resName, resEmail, resDate, resTime, numGuests, occasion} = formFields;


    const handleChange = (e) => {
        const { name, value }  = e.target;
        setFormFields ((prev) => ({...prev, [name]: value}));
    }

    const handleDateChange = async (e) => {
        const { name, value } = e.target
        setFormFields ((prev) => ({...prev, [name]: value}));
        props.dispatch({ type: 'UPDATE_TIMES', payload: value })
      }

    const resetForm = () => {
        setFormFields(defaultFields);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let f = JSON.stringify(formFields)
        localStorage.setItem('reservation', f);
        props.submitForm(f);
        resetForm();
    }
    const currentDate = new Date().toISOString().split("T")[0]

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label htmlFor="res-name">Full name</label>
                <input
                    type="text"
                    id="res-name"
                    name='resName'
                    value={resName}
                    onChange={handleChange} 
                    required 
                    />
            <label htmlFor="res-email">Email</label>
                <input
                    type="email"
                    id="res-email"
                    name='resEmail'
                    value={resEmail}
                    onChange={handleChange} 
                    required 
                    />
                <label htmlFor="res-date">Reservation date</label>
                <input
                    type="date"
                    id="res-date"
                    name='resDate'
                    value={resDate}
                    onChange={handleDateChange} 
                    required 
                    min={currentDate}
                    data-testid='datePicker'
                    />
                <label htmlFor="res-time">Requested reservation time</label>
                <select
                    id="res-time"
                    name='resTime'
                    value={resTime}
                    onChange={handleChange}
                    required
                    >
                    <option value={''}>Select</option>

                    {props.availableTimes.availableTimes.map((time) => (
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
                    required
                    value={numGuests}
                    onChange={handleChange}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name='occasion'
                    value={occasion}
                    onChange={handleChange}
                    required
                >
                    <option value={''}>Choose your occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                <button id='submitRes' type="submit" aria-label="Make your reservation">Make Your reservation</button>
            </form>
        </>
    );
}

export default BookingForm