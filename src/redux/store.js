import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authSlice } from './auth/authSlice';
import { templatesSlice } from './templates/templatesSlice';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

const templatesPersistConfig = {
  key: 'templates',
  storage,
  whitelist: ['templates', 'favTemplates'],
};

const persistedItemsReducer = persistReducer(
  templatesPersistConfig,
  templatesSlice.reducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    templates: persistedItemsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
