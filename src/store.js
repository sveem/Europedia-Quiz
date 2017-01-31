import { createStore } from 'redux';
import rootReducer from './reducers/index';
import questions from './data/questions';
import answers from './data/answers';

const defaultState = {
  questions,
  answers
}

const store = createStore(rootReducer, defaultState);

export default store