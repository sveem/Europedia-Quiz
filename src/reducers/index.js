import { combineReducers } from 'redux';
import Answers from './reducer_answers';
import Questions from './reducer_questions';

const rootReducer = combineReducers({
  answers: Answers,
  questions: Questions
});

export default rootReducer