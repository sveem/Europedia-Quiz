import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Quiz from './components/quiz';
import Questions from './containers/questions'

//TESTING WITH 2 RANDOM ROUTES
const Question1 = () => {
  return <div>How many countries are there in Europe??</div>
}

const Question2 = () => {
  return <div>What is the name of the capital city in Poland?</div>
}

export default (
  <Route path="/" component={App} > 
    <IndexRoute component={Quiz} />
    <Route path="/test1" component={Questions} />
    <Route path="/test2" component={Question2} />
  </Route>
);