import authReducer from './authReducer';
import websiteReducer from './websiteReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  website: websiteReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;