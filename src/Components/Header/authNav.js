import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class AuthNav extends Component {
  render() {
    return (
      <div>
        <NavLink to="/register" exact>
          Регистрация
        </NavLink>
        <NavLink to="/login" exact>
          Логин
        </NavLink>
      </div>
    );
  }
}

export default AuthNav;
