import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Highlights from './Highlights/Highlights'
import Testimonials from './Testimonials/Testimonials'
import About from './About/About'

const Main = () => {
    return (
        <main>
            <HeroSection />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    )
}

export default Main