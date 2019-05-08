import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './containers/Landing/Landing';
import AddLinkForm from './containers/Form/Form';
import NavbarInstance from './containers/Nav/Nav';

import './App.scss';
import ContentCard from './containers/Cards/ContentCard';

function App() {
  return (
    <div className="App">
    <NavbarInstance />
    <Switch>
      <Route path="/add" component={AddLinkForm} />
      <Route path="/content" component={ContentCard} />
      <Route path="/" exact component={Landing} />
    </Switch>

    </div>
  );
}

export default App;
