import React, { useEffect } from "react";
import styles from "./App.module.css";
import Navigation from "./Components/Header/navigation";
import { Route, Switch } from "react-router";
import HomePage from "./Components/HomePage/homePage";
import LoginPage from "./Components/LoginPage/loginPage";
import RegisterPage from "./Components/RegisterPage/registerPage";
import { getUser } from "./Redux/Auth/auth-operations";
import GreetingPage from "./Components/GreetingPage/greetingPage";
import PrivateRoute from "./PrivateRoute";
import { useDispatch } from "react-redux";
import PublicRoute from "./PublicRoute";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div className={styles.container}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={GreetingPage} />
        <PrivateRoute path="/main" component={HomePage} redirectTo="/login" />
        <PublicRoute
          exact
          path="/login"
          restricted
          redirectTo="/main"
          component={LoginPage}
        />
        <PublicRoute
          exact
          restricted
          redirectTo="/main"
          path="/register"
          component={RegisterPage}
        />
      </Switch>
    </div>
  );
}
