import axios from "axios";
// import { fetchContact } from "../../Operation/operation";
import authActions from "./auth-actions";
axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (credential) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post("/users/signup", credential);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

export const login = (credential) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post("/users/login", credential);
    token.set(response.data.token);

    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

export const getUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getUserRequest());
  try {
    const response = await axios.get("/users/current");
    dispatch(authActions.getUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getUserError(error.message));
  }
};

const operations = { register, login, logout, getUser };
export default operations;
