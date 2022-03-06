import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import PortfolioProvider from './context/PortfolioProvider';

ReactDOM.render(
  <BrowserRouter>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
