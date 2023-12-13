import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import BookingsPage from './components/BookingPage/BookingsPage';
import Main from './components/Main';

function App() {
  return (
    <>
      <header>
      <Nav />
      </header>
      <Routes>
        <Route path='/' index element={ <Main /> } />
        <Route path='/reservations' element={<BookingsPage />}/>
      </Routes>
        <Footer />
    </>
  );
}

export default App;
