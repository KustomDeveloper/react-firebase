import authReducer from './authReducer';
import websiteReducer from './websiteReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  website: websiteReducer,
  firestore: firestoreReducer
});

export default rootReducer;