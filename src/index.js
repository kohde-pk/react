import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();

if ('serviceWorker' in navigator) { 
    console.log('Service Worker is supported in your browser');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('%PUBLIC_URL%/service-worker.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log(`Service Worker: Error ${err}`));
    })
} else {
    console.log('Service Worker is not supported in your browser');
}
