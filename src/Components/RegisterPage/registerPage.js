import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Auth/auth-operations";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    width: 280,
  },
  label: {
    width: 280,
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    width: 200,
    marginLeft: 15,
    marginBottom: 15,
  },
  registerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setPassword("");
    setEmail("");
    setName("");
  };
  const updateCredentials = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;

      default:
        break;
    }
  };
  return (
    <div style={styles.registerWrapper}>
      <h2>Введите Ваши данные</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Имя
          <input
            style={styles.input}
            type="name"
            name="name"
            value={name}
            required
            onChange={updateCredentials}
            autoComplete="off"
          />
        </label>
        <label style={styles.label}>
          Почта
          <input
            style={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={updateCredentials}
            required
            autoComplete="off"
          />
        </label>
        <label style={styles.label}>
          Пароль
          <input
            style={styles.input}
            type="password"
            name="password"
            value={password}
            required
            onChange={updateCredentials}
            autoComplete="off"
          />
        </label>
        <button type="submit">Регистрация</button>
      </form>
    </div>
  );
}
