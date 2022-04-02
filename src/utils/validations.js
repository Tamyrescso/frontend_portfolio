const blank = (value) => !value.length;
const regexMatch = (regex, value) => !regex.test(value);

const errorsPT = {
  name: 'Campo "Nome" não pode estar vazio!',
  email: 'Campo "E-mail" não pode estar vazio!',
  validEmail: 'Campo "E-mail" precisa ser válido!',
  message: 'Campo "Mensagem" não pode estar vazio!',
}

const errorsEN = {
  message: 'Field "Message" cannot be empty!',
  validEmail: 'Field "E-mail" must be valid!',
  email: 'Field "E-mail" cannot be empty!',
  name: 'Field "Name" cannot be empty!',
}

const validateForm = ({ name, email, message }, language) => {
  const errors = language === 'pt'? errorsPT : errorsEN;
  if(blank(name)) return { field: 'name', error: errors.name };
  if(blank(email)) return { field: 'email', error: errors.email };
  if(regexMatch(/^.+@\w+(.com)$/, email)) return { field: 'email', error: errors.validEmail };
  if(blank(message)) return { field: 'email', error: errors.message };

  return null;
};

export default validateForm;