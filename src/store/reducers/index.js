import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import login from './login';
import app from './app';

const rootReducer = (history) => combineReducers({
  login,
  app,
  router: connectRouter(history),
});

export default rootReducer;
