const setStorage = (bool) => {
  return localStorage.setItem('darkTheme', JSON.stringify(bool));
}

const getStorage = () => {
  const theme = JSON.parse(localStorage.getItem('darkTheme'));
  if (!theme) setStorage(false)
  return JSON.parse(localStorage.getItem('darkTheme'));
}

export {
  setStorage,
  getStorage,
}