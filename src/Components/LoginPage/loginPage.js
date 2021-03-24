import React, { Component } from "react";
import { connect } from "react-redux";
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
class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: "", password: "" });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div style={styles.loginWrapper}>
        <h2>Введите Ваши данные</h2>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Почта
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
