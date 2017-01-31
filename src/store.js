import { createStore } from 'redux';
import rootReducer from './reducers/index';
import questions from './data/questions';

const defaultState = {
  questions
}

const store = createStore(rootReducer, defaultState);

export default store