import React, { useEffect, useState } from 'react';
import ptProjects from '../data/projectsData';
import cover from '../images/food_cover.png';
import '../style/carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';


function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1)  
  
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
  return (
    <div className='carouselContainer'>
      {ptProjects.map(({ title, description, repo, image }, index, array) => {
        return (
          <div key={title} className='carouselItem fade'>
            <div className='numbertext'>{`${index+1} / ${array.length}`}</div>
            <h1 className='projectTitle'>{title}</h1>
            <img className='cover'src={cover} alt='a metallic food cover'/>
            <img className='projectImg'src={image} alt='a screenshot of the project'/>
            <div className='text'>
              <p>{description}</p>
              <br></br>
              <a href={repo}>Link do repositório!</a>
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