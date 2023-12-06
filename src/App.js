import Hero from './components/Hero';
import Nav from './components/Nav';
import Highlights from './components/Highlights';


import './App.css';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Highlights />
      {/* TODO
      
      Highlights 
        Online Menu
        Button Link
        This week's specials
        images and descriptions
      
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
