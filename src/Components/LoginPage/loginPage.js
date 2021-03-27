import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Auth/auth-operations";

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
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const updateEmail = (e) => {
    setemail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setPassword("");
    setemail("");
  };

  return (
    <div style={styles.loginWrapper}>
      <h2>Введите Ваши данные</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Почта
          <input
            style={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </label>
        <label style={styles.label}>
          Пароль
          <input
            style={styles.input}
            autoComplete="off"
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
