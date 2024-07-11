import React from 'react';

//import Helmet provider
import { HelmetProvider } from 'react-helmet-async';

//old
//import ReactDOM from 'react-dom';

//new
import { createRoot } from 'react-dom/client';

//others
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';


// Import and configure jQuery
import jquery from 'jquery';
window.$ = jquery;
window.jQuery = jquery;


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<HelmetProvider><App tab="home" /></HelmetProvider>);

reportWebVitals();