import { combineReducers } from 'redux';
import Questions from './reducer_questions';

const rootReducer = combineReducers({
  questions:Questions
});

export default rootReducer