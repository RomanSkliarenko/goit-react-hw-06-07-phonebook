import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "../Redux/Contacts/contacts-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const addContact = ({ name, number, id }) => (dispatch) => {
  const contact = {
    name,
    number,
    id,
  };
  dispatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const fetchContact = () => (dispatch, getState) => {
  dispatch(fetchContactRequest());
  axios.defaults.headers.common.Authorization = `Bearer ${
    getState().auth.token
  }`;
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error.message)));
};
const operations = { addContact, deleteContact, fetchContact };
export default operations;
