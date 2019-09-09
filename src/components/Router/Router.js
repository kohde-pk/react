import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddLinkForm from './../../containers/Form/Form';
import Landing from './../../containers/Landing/Landing';
import ContentCard from './../../containers/Cards/ContentCard';
import Content from './../Content/Content';
import Cards from './../../containers/Cards/Cards';
import Post from './../../components/Content/Post';

const Router = () => (
  <React.Fragment>
    <Switch>
      <Route path="/add" component={AddLinkForm} />
      <Route path="/content" component={ContentCard} />
      <Route path="/cardList" component={Cards} />
      <Route path="/card" component={Content} />
      <Route exact path="/:id"  component={Post} />
      <Route exact path="/"  component={Landing} />
    </Switch>
  </React.Fragment>

);

export default Router;

