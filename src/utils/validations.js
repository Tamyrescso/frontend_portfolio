const blank = (value) => !value.length;
const regexMatch = (regex, value) => !regex.test(value);

const validateForm = ({ name, email, message }) => {
  if(blank(name)) return { field: 'name', error: 'Field "Name" cannot be empty!' };
  if(blank(email)) return { field: 'email', error: 'Field "E-mail" cannot be empty!' };
  if(regexMatch(/^.+@\w+(.com)$/, email)) return { field: 'email', error: '"E-mail" must be valid!' };
  if(blank(message)) return { field: 'email', error: 'Field "Message" cannot be empty!' };

  return null;
};

export default validateForm;