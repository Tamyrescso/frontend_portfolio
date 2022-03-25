import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import '../style/projects.css';


function Projects() {
  return (
    <div className='projectsWrapper'>
      <Header/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default Projects;