import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import PortfolioContext from '../context/PortfolioContext';
import '../style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Contact() {
  const { darkTheme, handleAlert } = useContext(PortfolioContext);
  return (
    <div className='contactPage'>
      { handleAlert === 'openAlert' && <div className='blurDiv'></div>}
      <Header/>
      <div className='mainContact'>
        <ContactForm />
        <div className='containerLinks'>
        <a className={darkTheme? 'myLinksDark' : 'myLinks'} href='https://github.com/Tamyrescso' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a className={darkTheme? 'myLinksDark' : 'myLinks'} href='https://www.facebook.com/tamyres.caroline' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a className={darkTheme? 'myLinksDark' : 'myLinks'} href='https://www.linkedin.com/in/tcso/' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;