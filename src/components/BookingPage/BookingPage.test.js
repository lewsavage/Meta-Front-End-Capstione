import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingsPage from './BookingsPage';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

// setup userEvent
const setup = (jsx) => {
    return {
        user: userEvent.setup(),
        ...render(jsx)

    }
}



test ('Booking form heading renders', () => {
    render(<BookingsPage availableTimes={{availableTimes}}/>)
    const heading = screen.getByText("Reserve a table today!")
     expect(heading).toBeInTheDocument()
})

test ('Booking form displays appropriate fields', () => {
    render(<BookingsPage availableTimes={{availableTimes}} />)
    expect(
        screen.getByRole('textbox', {name: /Full name/i})
    ).toBeInTheDocument();

    expect(
        screen.getByRole('textbox', {name: /Email/i})
    ).toBeInTheDocument();    
    
    expect(
        screen.getByTestId('datePicker', {name: /Reservation date/i})
    ).toBeInTheDocument();    
    
    expect(
        screen.getByRole('combobox', {name: /Requested reservation time/i})
    ).toBeInTheDocument();    
    
    expect(
        screen.getByRole('spinbutton', {name: /Number of guests/i})
    ).toBeInTheDocument();    
    
    expect(
        screen.getByRole('combobox', {name: /Occasion/i})
    ).toBeInTheDocument();

    expect(
        screen.getByRole('button', {name: /Make Your reservation/i})
    ).toBeInTheDocument();   

})

test ('Booking form should validate form fields', async () => {
    const mockSave = jest.fn();
    const submitForm = jest.fn();
    const { user } = setup (<BookingsPage availableTimes={{availableTimes}} saveData={mockSave} submitForm={submitForm}
        />)

    await user.click (
        screen.getByRole('button', { name: /Make Your reservation/i}));


    expect(mockSave).not.toBeCalled();
})