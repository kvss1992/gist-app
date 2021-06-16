import { combineReducers } from 'redux';
import allGistsReducer from './allGists.reducer';
import singleGistReducer from './singleGist.reducer';

const rootReducer = combineReducers({
  allGistsReducer,
  singleGistReducer
});
export default rootReducer;