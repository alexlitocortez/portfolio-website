import React from 'react'
import BlogSection from '../BlogSection/BlogSection'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import ProjectSection from '../ProjectSection/ProjectSection'

function Home() {
    return (
        <div>
            <HeroSection />
            <ProjectSection />
            <BlogSection />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
