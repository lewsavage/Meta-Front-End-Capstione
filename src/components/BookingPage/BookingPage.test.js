import { render, screen } from '@testing-library/react';
import BookingsPage from './BookingsPage';

const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

test ('Booking form heading renders', () => {
    render(<BookingsPage availableTimes={availableTimes} />);
    const heading = screen.getByText("Reserve a table today!");
     expect(heading).toBeInTheDocument();
})

