import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductsContext from './components/contexts/ProductsContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <ProductsContext>
        <App />
    </ProductsContext>
    </BrowserRouter>,document.getElementById('root'));