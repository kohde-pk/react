import React from 'react';
import NavbarInstance from './containers/Nav/Nav';
import Router from './components/Router/Router';

import './App.scss';


function App() {
  return (
    <div className="App">
        <NavbarInstance />
        <Router />
    </div>
  );
}

export default App;
