import React, { useState, useContext } from 'react';
import '../style/book.css';
import arabesque from '../images/arabesco_book.svg';
import me from '../images/me.png';
import darkMe from '../images/darkMe.png';
import PortfolioContext from '../context/PortfolioContext';

function Book() {
  const [bookClass, setBookClass] = useState('book');
  const { language, darkTheme } = useContext(PortfolioContext);

  const changeBookClass = () => {
    bookClass === 'book' ? setBookClass('book bookSelected') : setBookClass('book');
  }

  const about = (
    <>
      <h2 className='aboutTitle'>About me</h2>
      <p className='aboutText'>
        {`I'm passionate about food and technology!
        I graduated in Gastronomy at UFRJ and I have more than 3 years of experience in the procurement field. While I was working in that area, I realized I haven't found my place yet.
        So, in 2021, finally I'd got the courage, and, with a lot of planning and conscious, I've started my career transition at Trybe. There, I've just completed my front-end cycle and nowadays I study back-end.`}
      </p>
    </>
  )

  const sobre = (
    <>
      <h2 className='aboutTitle'>Sobre mim</h2>
      <p className='aboutText'>
            {`Sou uma pessoa apaixonada pela área da tecnologia e da alimentação!
            Me formei em Gastronomia pela UFRJ e tenho mais de 3 anos de experiência na área de compras, nesse tempo eu percebi que ainda não havia achado o meu lugar.
            Em 2021, finalmente tomei coragem, e com muito planejamento e consciência, comecei minha transição de carreira na Trybe, onde me formei como desenvolvedora Front-end e atualmente estudo Back-end.`}
      </p>
    </>
  )

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
        {language === 'pt'? sobre : about}
      </div>
      <div className={ darkTheme? "page3 page3Dark" : "page3" }></div>
      <div className={ darkTheme? "page2 page2Dark" : "page2" }></div>
      <div className={ darkTheme? "page1 page1Dark" : "page1" }>
        <img className='myPic' src={darkTheme? darkMe : me } alt='minha foto'/>
      </div>
      <div className="front">
        <img className='arabesque' src={arabesque} alt="enfeite da capa do livro"/>
        {language === 'pt'? capa : cover}
      </div>
    </div>
  )
}

export default Book;