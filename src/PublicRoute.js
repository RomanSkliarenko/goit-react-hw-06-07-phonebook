import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import getIsAuthentification from "./Redux/selectors";

const PublicRoute = ({
  component: Component,
  isAuthentificated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthentificated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);
const mapStateToProps = (state) => ({
  isAuthentificated: getIsAuthentification.getIsAuthentification(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute);
