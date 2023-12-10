import Nav from './components/Nav/Nav';
import Highlights from './components/Highlights/Highlights';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path='/' index element={<Highlights />} />

      </Routes>
      <main>
        {/* TODO
      
      Testimonials
        Star ratings
        User Profile
        Photo
        Review

      About
        Name
        Description
        Photos of Adrian and Mario
      */}
      </main>
      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
