import React, { useState } from 'react';
import '../style/book.css';

function Book() {
  const [bookClass, setBookClass] = useState('book');

  function changeBookClass() {
    bookClass === 'book' ? setBookClass('book bookSelected') : setBookClass('book');
  }
  return (
    <div onClick={changeBookClass} className={bookClass}>
      <div className="back"></div>
      <div className="page6"></div>
      <div className="page5"></div>
      <div className="page4"></div>
      <div className="page3"></div>
      <div className="page2"></div>
      <div className="page1"></div>
      <div className="front"></div>
    </div>
  )
}

export default Book;