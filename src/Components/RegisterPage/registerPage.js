import React, { Component } from "react";
import { connect } from "react-redux";
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

class LoginPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state);
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    const { email, password, name } = this.state;
    return (
      <div style={styles.registerWrapper}>
        <h2>Введите Ваши данные</h2>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Имя
            <input
              style={styles.input}
              type="name"
              name="name"
              value={name}
              required
              onChange={this.handleChange}
            />
          </label>
          <label style={styles.label}>
            Почта
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
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
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Регистрация</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  register,
};
export default connect(null, mapDispatchToProps)(LoginPage);
