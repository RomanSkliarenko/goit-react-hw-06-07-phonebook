// import PhonebookContact from "./Components/PhonebookContacts/phonebookContacts";
// import PhonebookForm from "./Components/PhonebookForm/phonebookForm";
import styles from "./App.module.css";
import Navigation from "./Components/Header/navigation";
import { Route, Switch } from "react-router";
import HomePage from "./Components/HomePage/homePage";
import LoginPage from "./Components/LoginPage/loginPage";
import RegisterPage from "./Components/RegisterPage/registerPage";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "./Redux/Auth/auth-operations";
import GreetingPage from "./Components/GreetingPage/greetingPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

class App extends Component {
  componentDidMount() {
    this.props.onRefreshUser();
  }
  render() {
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
}

const mapDispatchToProps = {
  onRefreshUser: getUser,
};

export default connect(null, mapDispatchToProps)(App);
