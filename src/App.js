import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';

import Landing from './containers/Landing';
import RecentWork from './containers/RecentWork';
import LessRecentWork from './containers/LessRecentWork';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/recent-work" component={RecentWork} />
      <Route exact path="/less-recent-work" component={LessRecentWork} />
    </Switch>
  );
}
