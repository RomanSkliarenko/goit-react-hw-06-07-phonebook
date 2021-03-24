import { createSelector } from "@reduxjs/toolkit";
const getIsAuthentification = (state) =>
  state.auth.token; /*поменять название на getUserToken*/
const getIsAuth = (state) => state.auth.isAuthentificated;
const getUserName = (state) => state.auth.user.name;
const getContacts = (state) => state.contacts.items;
const getFilterValue = (state) => state.contacts.filter;
const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const selectors = {
  getContacts,
  getFilterValue,
  getFilteredContacts,
  getIsAuthentification,
  getUserName,
  getIsAuth,
};
export default selectors;
