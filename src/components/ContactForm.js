import React, { useState } from 'react';
import validationForm from '../utils/validations';
import sendMessage from '../services';
import '../style/contactForm.css';

function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    fields[name] = value;
    setFields(fields); 
  }

  const handleClick = async (e) => {
    e.preventDefault();

    const validate = validationForm(fields);
    if(validate) return alert(validate.error);

    const { data } = await sendMessage(fields);
    const { message } = data;
    return alert(message);
  }
  return (
    <div className='formContact'>
      <form> 
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" onChange={handleChange} placeholder="Escreva seu nome" />

        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" onChange={handleChange} placeholder="email@email.com" />

        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" onChange={handleChange} placeholder="Fique à vontade para falar do meu portifólio! me mande um comentário, elogio, dica, me chame para um projeto ou até me mande uma receita :)" className="textArea"></textarea>

        <input type="submit" value="Enviar" onClick={handleClick} />
      </form>
    </div>
  )
}

export default ContactForm;