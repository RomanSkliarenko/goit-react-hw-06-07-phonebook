import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
const initialUserState = { name: null, email: null };
const user = createReducer(initialUserState, {
  "auth/registerSuccess": (_, { payload }) => {
    return payload.user;
  },
  "auth/loginSuccess": (_, { payload }) => {
    return payload.user;
  },
  "auth/logoutSuccess": (_, __) => {
    return initialUserState;
  },
  "auth/getUserSuccess": (_, { payload }) => {
    return payload;
  },
});
const token = createReducer(null, {
  "auth/registerSuccess": (_, { payload }) => {
    return payload.token;
  },
  "auth/loginSuccess": (_, { payload }) => {
    return payload.token;
  },
  "auth/logoutSuccess": (_, __) => {
    return null;
  },
  "auth/logoutError": (_, __) => {
    return null;
  },
});
const error = createReducer(null, {
  "auth/registerError": (_, { payload }) => payload,
  "auth/loginError": (_, { payload }) => payload,
  "auth/logoutError": (_, { payload }) => payload,
  "auth/getUserError": (_, { payload }) => payload,
});
const isAuthentificated = createReducer(false, {
  "auth/registerSuccess": () => true,
  "auth/loginSuccess": () => true,
  "auth/getUserSuccess": () => true,
  "auth/registerError": () => false,
  "auth/loginError": () => false,
  "auth/getUserError": () => false,
  "auth/logoutSuccess": () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthentificated,
});
