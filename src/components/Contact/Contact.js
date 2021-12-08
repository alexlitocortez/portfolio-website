import React from 'react';
import './Contact.css';


function Contact() {
    return (
        <div>
            <section id='contact' className='contact-wrapper'>
                <div id='contactsection' className='contact-container'>
                    <header>
                        <h2 className='contact-header'>Talk to me.</h2>
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
                                    <textarea name='message' id='message' placeholder='Message'></textarea>
                                </div>
                                <div className='col-12'>
                                    <ul className='list-button'>
                                        <li><input type='submit' value='Send Message' /></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                    <section className='social-media-section'>
                        <hr className='contact-hr' />
                        <h3>Social Media</h3>
                        <ul className='social-icons'>
                            <a href='https://www.linkedin.com/in/amcortez92/' target="_blank"><i className="fa fa-linkedin"></i></a>
                            <a href='https://github.com/alexlitocortez' target="_blank"><i className='fa fa-github'></i></a>
                        </ul>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Contact


