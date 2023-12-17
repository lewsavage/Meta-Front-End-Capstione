import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import BookingsPage from './components/BookingPage/BookingsPage';
import Main from './components/Main/Main';
import { useNavigate } from "react-router-dom";
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage'


function App() {

  const navigate = useNavigate();

  const seedRandom = (seed) => {
    var m = 2**35 -31;
    var a = 185852;
    var s = seed % m;
    return function(){
        return (s = s * a % m) /m;
      }
    }

    const fetchAPI = (date) => {
      let result = [];
      let random = seedRandom(date.getDate());
      for ( let i = 17; i <=23; i++) {
        if(random() < 0.5) {
          result.push (i + ':00');
        }
        if(random() > 0.5) {
          result.push (i + ':30');
        }
      }
      return result;
    }

    const submitAPI = (formData) => {
      return true;
    };
    
    const submitForm = (formData) => {
      if (submitAPI(formData)) {
      navigate("/confirmed")
    }
}

  const initializeTimes = {availableTimes:  fetchAPI(new Date())}

  function updateTimes(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = {availableTimes: fetchAPI(new Date(newDate))}
      break;

      default:
        throw new Error()
    }
    return newState
  }

  
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);




  return (
    <>
      <header>
      <Nav />
      </header>
      <Routes>
        <Route path='/' index element={ <Main /> } />
        <Route path='/reservations' element={ 
          <BookingsPage 
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
            /> }/>
        <Route path='/confirmed' element={<ConfirmationPage />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
