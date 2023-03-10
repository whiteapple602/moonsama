import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import application from './application/reducer';
import { updateVersion } from './global/actions';
import transactions from './transactions/reducer';
import settings from './settings/reducer';

const PERSISTED_KEYS: string[] = ['transactions', 'settings'];

const store = configureStore({
  reducer: {
    application,
    transactions,
    settings,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
});

store.dispatch(updateVersion());

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
