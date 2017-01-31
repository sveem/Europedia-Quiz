import { combineReducers } from 'redux';
import Answers from './reducer_answers';

const rootReducer = combineReducers({
  questions: Answers
});

export default rootReducer