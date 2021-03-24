import React, { Component } from "react";
import { connect } from "react-redux";
import selectors from "../../Redux/selectors";
import { logout } from "../../Redux/Auth/auth-operations";
import styles from "../../App.module.css";

// import { NavLink } from "react-router-dom";
class UserMenu extends Component {
  render() {
    return (
      <div>
        <span className={styles.greeting}>Welcome, {this.props.userName}!</span>
        <button
          className={styles.userMenuBtn}
          type="button"
          onClick={this.props.onLogout}
        >
          Logout
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userName: selectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
