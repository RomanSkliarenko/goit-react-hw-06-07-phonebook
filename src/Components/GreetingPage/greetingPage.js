import styles from "../../App.module.css";
import React, { Component } from "react";

class GreetingPage extends Component {
  render() {
    return (
      <div className={styles.mainWrapper}>
        <h1 className={styles.greeting}>
          Добрый день! Я приветственная страница и я горжусь этим! А теперь
          зарегистрируйтесь или войдите в приложение!
        </h1>
      </div>
    );
  }
}
export default GreetingPage;
