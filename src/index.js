import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';   
import routes from './routes';
import store from './store'

import reducers from './reducers';       

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
 , document.querySelector('.container'));