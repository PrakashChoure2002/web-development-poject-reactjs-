import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Product from './Product';
//import Demo from './Demo';
//import Avatar from './Avatar';
//import Cartitem from './Cartitem'

ReactDOM.render(
    <React.StrictMode>
      <Product/>
    </React.StrictMode>,
    document.getElementById('root')
  );

reportWebVitals();