import React from "react";
import selectors from "../../Redux/selectors";
import { logout } from "../../Redux/Auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../App.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectors.getUserName);

  return (
    <div>
      <span className={styles.greeting}>Welcome, {userName}!</span>
      <button
        className={styles.userMenuBtn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}
