import React from 'react'
import './Home.css'
import NavBar from '../components/NavBar/NavBar'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className='home-container'>
        <NavBar />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home