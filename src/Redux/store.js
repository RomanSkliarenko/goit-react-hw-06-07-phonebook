import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import itemsReducer from "./Contacts/contacts-reducers";
import filterReducer from "./Filter/filter-reducers";
import logger from "redux-logger";
import authReducer from "./Auth/auth-reducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware,
  logger,
});
const persistor = persistStore(store);
const stor = { store, persistor };
export default stor;
