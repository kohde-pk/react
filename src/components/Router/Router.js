import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddLinkForm from '../../containers/Form/Form';
import Article from '../Content/Article';
import Landing from '../../containers/Landing/Landing';
import ContentCard from '../../containers/Cards/ContentCard';
import ContentModal from '../../containers/Modal/ContentModal';
import Cards from '../../containers/Cards/Cards';

const Router = () => (
  <React.Fragment>
    <Switch>
      <Route path="/add" component={AddLinkForm} />
      <Route path="/article" component={Article} />
      <Route path="/content" component={ContentCard} />
      <Route path="/cardList" component={Cards} />
      <Route path="/modal" component={ContentModal} />
      <Route exact path="/"  component={Landing} />
    </Switch>
  </React.Fragment>

);

export default Router;

