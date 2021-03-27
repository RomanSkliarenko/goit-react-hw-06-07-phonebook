import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import styles from "./phonebookForm.module.css";
import { addContact } from "../../Operation/operation";
import selectors from "../../Redux/selectors";

export default function PhonebookForm() {
  const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const updateCredentials = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      default:
        break;
    }
  };
  const formReset = () => {
    setNumber("");
    setName("");
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const alredyInContacts = contacts.find((item) => {
      return item.name === name || item.number === number;
    });
    if (alredyInContacts) {
      alert("Такой контакт уже есть!");
      formReset();
      return;
    } else if (name === "") {
      alert("Введите имя для добавления!");
      return;
    } else if (number === "") {
      alert("Введите номер для добавления!");
      return;
    } else if (name !== "" && number !== "") {
      dispatch(
        addContact({
          name,
          number,
          id: shortid.generate(),
        })
      );
      formReset();
      return;
    } else {
      alert("Что-то пошло не так :(");
      formReset();
      return;
    }
  };
  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={formSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            name="name"
            type="text"
            onChange={updateCredentials}
            value={name}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            name="number"
            type="number"
            onChange={updateCredentials}
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
