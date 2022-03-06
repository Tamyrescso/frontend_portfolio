import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Book from '../components/Book';
import BackgroundIcons from '../components/BackgroundIcons';
import '../style/home.css';

function Home() {
  return (
    <div>
      <Header/>
      <Book/>
      <BackgroundIcons/>
      <Footer/>
    </div>
  )
}

export default Home;
