import axios from 'axios';

const sendMessage = async ({ name, email, message: content}, language) => {
  const request = axios
    .post(process.env.REACT_APP_DATABASE_URL, {
      name,
      email,
      content,
      language,
    })
  const response = await request;
  return response;
}

export default sendMessage;