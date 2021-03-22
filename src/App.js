import PhonebookContact from "./Components/PhonebookContacts/phonebookContacts";
import PhonebookForm from "./Components/PhonebookForm/phonebookForm";
import styles from "./App.module.css";

const App = function () {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <PhonebookForm />
      <PhonebookContact />
    </div>
  );
};

export default App;
