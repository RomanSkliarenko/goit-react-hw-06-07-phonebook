import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthNav from "./authNav";
import UserMenu from "./userMenu";
import selectors from "../../Redux/selectors";
import styles from "../../App.module.css";
class Navigation extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <div>
          {!this.props.isAuthentification && (
            <NavLink to="/" exact>
              Главная
            </NavLink>
          )}
          {this.props.isAuthentification && (
            <NavLink to="/main" exact>
              Контакты
            </NavLink>
          )}
        </div>
        {this.props.isAuthentification ? <UserMenu /> : <AuthNav />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthentification: selectors.getIsAuthentification(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
