import { combineReducers } from 'redux';
import boardsGame from './boards-reducer';
import questionsGame from './questions-reducer';

const rootReducer = combineReducers({
  boardsGame,
  questionsGame
});

export default rootReducer;
