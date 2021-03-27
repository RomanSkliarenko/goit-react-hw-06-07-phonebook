import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./phonebookContacts.module.css";
import shortid from "shortid";
import * as filterActions from "../../Redux/Filter/filter-actions";
import { deleteContact, fetchContact } from "../../Operation/operation";
import selectors from "../../Redux/selectors";

export default function PhonebookContacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, []);
  const filterContacts = useSelector(selectors.getFilteredContacts);
  const filter = useSelector(selectors.getFilterValue);
  const contacts = useSelector(selectors.getContacts);
  const handleInputChange = (event) => {
    dispatch(filterActions.changeFilter(event.target.value));
  };
  return (
    <>
      <h2>Contacts</h2>
      <label className={styles.label}>
        Find contact by name :
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleInputChange}
        ></input>
      </label>
      <ul className={styles.list}>
        {filter !== "" && filterContacts ? (
          <>
            {filterContacts.map((query) => {
              return (
                <li className={styles.item} key={shortid.generate()}>
                  <p>
                    {query.name} : {query.number}
                  </p>
                  <button
                    className={styles.button}
                    name={query.id}
                    onClick={() => dispatch(deleteContact(query.id))}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </>
        ) : (
          contacts.map((contact) => (
            <li key={contact.id} className={styles.item}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                className={styles.button}
                name={contact.id}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
