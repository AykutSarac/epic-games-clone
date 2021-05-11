import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Incompatible from './components/layout/Incompatible/Incompatible';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Incompatible />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);