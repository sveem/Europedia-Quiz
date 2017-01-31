import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Quiz from './components/quiz';
import Questions from './containers/questions'

export default (
  <Route path="/" component={App} > 
    <IndexRoute component={Quiz} />
    <Route path="/test1" component={Questions} />
  </Route>
);