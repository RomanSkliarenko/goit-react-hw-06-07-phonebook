import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import getIsAuthentification from "./Redux/selectors";

const PrivateRoute = ({
  component: Component,
  isAuthentificated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthentificated ? (
        <>
          <Component {...props} />
          {/* <button
            type="button"
            onClick={() => {
              console.log(getIsAuthentification.getIsAuthentification);
            }}
          >
            test
          </button> */}
        </>
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);
const mapStateToProps = (state) => ({
  isAuthentificated: getIsAuthentification.getIsAuthentification(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
