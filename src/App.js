import React from 'react';
import NavbarInstance from './containers/Nav/Nav';
import Router from './components/Router/Router';

import './App.scss';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <div className="App">
        <NavbarInstance />
        <Router />
        <Layout />
    </div>
  );
}

export default App;
