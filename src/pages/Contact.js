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
  const { language } = useContext(PortfolioContext);

  const ptTitle = (
    <h2 className='linkTitle'>Contato</h2>
  );

  const enTitle = (
    <h2 className='linkTitle'>Contact</h2>
  );
  return (
    <div className='contactPage'>
      <Header/>
      <div className='mainContact'>
        {language === 'pt'? ptTitle : enTitle}
        <ContactForm />
        <div className='containerLinks'>
        <a className='myLinks' href='https://github.com/Tamyrescso' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a className='myLinks' href='https://www.facebook.com/tamyres.caroline' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a className='myLinks' href='https://www.linkedin.com/in/tcso/' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;