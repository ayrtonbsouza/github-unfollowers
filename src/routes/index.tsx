import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Followers from '../pages/Followers';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/followers" component={Followers} />
  </Switch>
);

export default Routes;
