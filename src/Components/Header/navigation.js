import React from "react";
import { NavLink } from "react-router-dom";
import AuthNav from "./authNav";
import UserMenu from "./userMenu";
import selectors from "../../Redux/selectors";
import styles from "../../App.module.css";
import { useSelector } from "react-redux";

export default function Navigation() {
  const isAuthentification = useSelector(selectors.getIsAuthentification);

  return (
    <div className={styles.nav}>
      <div>
        {!isAuthentification && (
          <NavLink to="/" exact>
            Главная
          </NavLink>
        )}
        {isAuthentification && (
          <NavLink to="/main" exact>
            Контакты
          </NavLink>
        )}
      </div>
      {isAuthentification ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
