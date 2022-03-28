import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../style/contact.css';

function Contact() {
  return (
    <div>
      <Header/>
      <div className='mainContact'>
        <ContactForm />
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;