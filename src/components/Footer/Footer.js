import React from 'react'
import './Footer.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container'>
      <a href='mailto:alexlitocortez@gmail.com'>
        <AiOutlineMail className='footer-icon' />
      </a>
      <a href='https://github.com/alexlitocortez'>
        <FiGithub className='footer-icon' />
      </a>
      <a href='https://www.linkedin.com/in/amcortez92/'>
        <AiOutlineLinkedin className='footer-icon' />
      </a>
    </div>
  )
}

export default Footer

