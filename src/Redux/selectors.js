import { createSelector } from "@reduxjs/toolkit";
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

const selectors = { getContacts, getFilterValue, getFilteredContacts };
export default selectors;
