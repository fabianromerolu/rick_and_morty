import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';  // Usa {} para named export
import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
