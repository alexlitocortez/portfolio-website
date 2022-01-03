import React from 'react';
import About from '../About/About';
import BlogSection from '../BlogSection/BlogSection'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import ProjectSection from '../ProjectSection/ProjectSection'

function Home() {
    return (
        <div>
            <About />
            <ProjectSection />
            <BlogSection />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
