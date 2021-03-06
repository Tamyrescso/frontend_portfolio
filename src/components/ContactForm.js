import React, { useState, useContext } from 'react';
import validationForm from '../utils/validations';
import sendMessage from '../services';
import PortfolioContext from '../context/PortfolioContext';
import '../style/contactForm.css';

function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { language,
    setHandleAlert,
    setType,
    setAlertText } = useContext(PortfolioContext);

  const handleClick = async (e) => {
    e.preventDefault();

    const validate = validationForm(fields, language);
    if(validate) {
      setType('error')
      setAlertText(validate.error);
      return setHandleAlert('openAlert');
    }
    
    const sending = language === 'pt'? 'Conectando ao back-end...' : 'Connecting to backend...';
    setType('success')
    setAlertText(sending);
    setHandleAlert('openAlert');
    const { data } = await sendMessage(fields, language);
    const { message } = data;
    setAlertText(message);
    return setFields({
      name: '',
      email: '',
      message: ''
    })
  }

  const ptForm = (
    <form> 
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" name="name" value={fields.name} onChange={ (e) => setFields({ ...fields, name: e.target.value }) } placeholder="Escreva seu nome ex.: Ada Lovelace" />

      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" name="email" value={fields.email} onChange={ (e) => setFields({ ...fields, email: e.target.value }) } placeholder="Escreva seu e-mail ex.: email@email.com" />

      <label htmlFor="message">Mensagem</label>
      <textarea id="message" name="message" value={fields.message} onChange={ (e) => setFields({ ...fields, message: e.target.value }) } placeholder="Fique à vontade para falar do meu portifólio aqui! me mande um comentário, elogio, dica, me chame para um projeto ou até me mande uma receita :)" className="textArea"></textarea>

      <input type="submit" value="Enviar" onClick={handleClick} />
    </form>
  );

  const enForm = (
    <form> 
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={fields.name} onChange={ (e) => setFields({ ...fields, name: e.target.value }) } placeholder="Write your name ex.: Ada Lovelace" />

      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" name="email" value={fields.email} onChange={ (e) => setFields({ ...fields, email: e.target.value }) } placeholder="Write your email ex.: email@email.com" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" value={fields.message} onChange={ (e) => setFields({ ...fields, message: e.target.value }) } placeholder="Be comfortable to talk about my portfolio here! send me a comment, a compliment, a tip, call me to work in a project or even send me a recipe :)" className="textArea"></textarea>

      <input type="submit" value="Send" onClick={handleClick} />
    </form>
  )

  return (
    <div className='formContact'>
      { language === 'pt'? ptForm : enForm }
    </div>
  )
}

export default ContactForm;