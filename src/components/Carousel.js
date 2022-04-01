import React, { useEffect, useState, useContext } from 'react';
import { ptProjects, enProjects } from '../data/projectsData';
import cover from '../images/food_cover.png';
import '../style/carousel.css';
import PortfolioContext from '../context/PortfolioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);
  const { language, darkTheme } = useContext(PortfolioContext);
  
  useEffect(() => {
    showSlides(slideIndex);
  }, [])

  useEffect(() => {
    showSlides(slideIndex)
  }, [slideIndex, setSlideIndex])

  const plusSlides = (n)  => {
  let slides = document.getElementsByClassName('carouselItem');
  if ((slideIndex + n) > slides.length+1) return setSlideIndex(1)
  if ((slideIndex + n) < 1) return setSlideIndex(slides.length+1)
  setSlideIndex(slideIndex + n);
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName('carouselItem');
    let previousSlide = document.querySelector('.showItem');
    if (slides.length) {
      if (previousSlide !== null) {
        previousSlide.classList.remove('showItem')
        previousSlide.classList.add('carouselItem')
      }
      slides[slideIndex-1].classList.add('showItem');
      slides[slideIndex-1].classList.remove('carouselItem');
    }
  }

  const projectsDescriptions = language === 'pt'? ptProjects : enProjects;
  return (
    <div className='carouselContainer'>
      {projectsDescriptions.map(({ title, description, repo, gif }, index, array) => {
        return (
          <div key={title} className='carouselItem fade'>
            <div className={ darkTheme? 'numbertext numberTextDark' : 'numberText' }>{`${index+1} / ${array.length}`}</div>
            <h1 className={ darkTheme? 'projectTitle projectTitleDark' : 'projectTitle' }>{title}</h1>
            <img className='cover'src={cover} alt='a metallic food cover'/>
            <img className={ gif.includes('recipes_app') ? 'recipesGif' : 'projectGif' }src={gif} alt='a gif of the project'/>
            <div className='text'>
              <p className={ darkTheme? 'textDark' : '' }>{description}</p>
            </div>
            <div className='linkWrapper'>
              <a href={repo} target="_blank" className={ darkTheme? 'repoLink repoLinkDark' : 'repoLink' } rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        )
      })}
      <button className="prev" onClick={() => plusSlides(- 1)}>
        <FontAwesomeIcon className='controlProject' icon={faAnglesLeft}/>
      </button>
      <button className="next" onClick={() => plusSlides(+ 1)}>
        <FontAwesomeIcon className='controlProject' icon={faAnglesRight}/>
      </button>
    </div>
  )
}

export default Carousel;