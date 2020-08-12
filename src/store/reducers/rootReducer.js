import authReducer from './authReducer';
import websiteReducer from './websiteReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  website: websiteReducer
});

export default rootReducer;