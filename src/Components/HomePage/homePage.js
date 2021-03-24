import React from "react";
import PhonebookContacts from "../PhonebookContacts/phonebookContacts";
import styles from "../../App.module.css";
import PhonebookForm from "../PhonebookForm/phonebookForm";

export default function HomePage() {
  return (
    <div className={styles.mainWrapper}>
      <PhonebookForm />
      <PhonebookContacts />
    </div>
  );
}
