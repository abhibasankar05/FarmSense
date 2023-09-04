import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/Reduser/AuthSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root', // the key to use in localStorage
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);


const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    // Add other reducers here if needed
  },
});

export const persistor = persistStore(store);
export default store;