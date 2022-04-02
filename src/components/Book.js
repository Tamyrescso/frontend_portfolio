import React, { useState, useContext } from 'react';
import '../style/book.css';
import arabesque from '../images/arabesco_book.svg';
import me from '../images/me.png';
import darkMe from '../images/darkMe.png';
import PortfolioContext from '../context/PortfolioContext';
import { aboutMePt, aboutMeEn } from '../data/aboutMe';

function Book() {
  const [bookClass, setBookClass] = useState('book');
  const { language, darkTheme } = useContext(PortfolioContext);

  const changeBookClass = () => {
    bookClass === 'book' ? setBookClass('book bookSelected') : setBookClass('book');
  }

  const cover = (
    <h1 className='coverText'>Tamyres'<br></br><s>recipes book</s><br></br>Portfolio</h1>
  )

  const capa = (
    <h1 className='coverText'>Portifólio<br></br><s>livro de receitas</s><br></br>da<br></br>Tamyres</h1>
  )

  return (
    <div className={bookClass} onClick={changeBookClass}>
      <div className="back"></div>
      <div className={ darkTheme? "page6 page6Dark" : "page6" }></div>
      <div className={ darkTheme? "page5 page5Dark" : "page5" }></div>
      <div className={ darkTheme? "page4 page4Dark" : "page4" }>
        { language === 'pt'? aboutMePt : aboutMeEn }
      </div>
      <div className={ darkTheme? "page3 page3Dark" : "page3" }></div>
      <div className={ darkTheme? "page2 page2Dark" : "page2" }></div>
      <div className={ darkTheme? "page1 page1Dark" : "page1" }>
        <img className='myPic' src={darkTheme? darkMe : me } alt='minha foto'/>
      </div>
      <div className={ darkTheme? "front frontDark" : "front" }>
        <img className='arabesque' src={arabesque} alt="enfeite da capa do livro"/>
        {language === 'pt'? capa : cover}
      </div>
    </div>
  )
}

export default Book;