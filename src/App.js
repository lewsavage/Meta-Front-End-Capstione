import Nav from './components/Nav/Nav';
import Highlights from './components/Highlights/Highlights';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' index element={
          <>
            <main>
              <Header />
              <Highlights />
              <Testimonials />
              <About /> 
            </main>
          </>
        } />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
