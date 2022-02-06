import React from 'react';
import './Contact.css';


function Contact() {
    return (
        <div>
            <section id='contact' className='contact-wrapper'>
                <div id='contactsection' className='contact-container'>
                    <header>
                        <h2 className='contact-header'>Let's Get Started</h2>
                    </header>
                    <div className='contact-row'>
                        <form method='post'>
                            <div className='row'>
                                <div className='col-6 col-12-small'>
                                    <input type='text' name='name' id='name' placeholder='Name' />
                                </div>
                                <div className='col-6 col-12-small'>
                                    <input type='text' name='email' id='email' placeholder='Email' />
                                </div>
                                <div className='col-12'>
                                    <input type='text' name='subject' id='subject' placeholder='Subject' />
                                </div>
                                <div className='col-12'>
                                    <textarea name='message' id='message' placeholder='Message' />
                                </div>
                                <div className='col-12'>
                                    <button className='submit-button'>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <section className='social-media-section'>
                        <hr className='contact-hr' />
                        <a href='https://www.linkedin.com/in/amcortez92'><span className='fa fa-linkedin'></span></a>
                        <a href='https://github.com/alexlitocortez'><span className='fa fa-github'></span></a>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Contact


