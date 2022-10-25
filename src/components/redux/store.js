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
// ((https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data) ===> link!)
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

const persistConfig = {
  key: 'phone-book',
  storage,
  blacklist: ['filter'],
};

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, reducer),
  },
  // middleware,
  // devTools: process.env.NODE_ENV === 'development',
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

const persistor = persistStore(store);

export default { store, persistor };