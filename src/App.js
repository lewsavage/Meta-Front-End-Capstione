import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import BookingsPage from './components/BookingPage/BookingsPage';
import Main from './components/Main/Main';

function App() {

  const initializeState =  {
          availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'], 
          resDate: '', 
          resTime: '', 
          numGuests: 1, 
          occasion: ''
  }

  const updateForm = (state, action) => {
    switch (action.type) {

      case 'changed resDate': {
        return {
          ...state,
          [action.field]: action.payload,
          availableTimes: ['23:00', '22:00', '21:00'],
        }
      }

      case 'handle input text': {
        return {
          ...state,
          [action.field]: action.payload,
        }
      }

      case 'reset': {
        return initializeState; 
        
      }

      default:
        return state;
    }
  }


const [state, dispatch] = useReducer(updateForm, initializeState);

  return (
    <>
      <header>
      <Nav />
      </header>
      <Routes>
        <Route path='/' index element={ <Main /> } />
        <Route path='/reservations' element={ 
          <BookingsPage 
            availableTimes={state.availableTimes}
            dispatch={dispatch}
            updateForm={updateForm}
            /> }/>
      </Routes>
        <Footer />
    </>
  );
}

export default App;
