import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import dogsReducer from "./Dogs";
import notificationReducer from "./Notification";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["Dogs", "Notification"],
};

const reducers = combineReducers({
  dogs: dogsReducer,
  notification: notificationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store, null, () => {
  const state = store.getState();
  if (state && state.version !== persistConfig.version) {
    persistor.purge(); // Clear persisted state if version mismatches
  }
});

export { store, persistor };
