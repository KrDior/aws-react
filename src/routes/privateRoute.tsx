import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import handleAuthStatus from '../utils/handleAuthStatus';


export const PrivateRoute: React.StatelessComponent<RouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        handleAuthStatus.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/authfailed',
              state: { from: location }
            }}
          />
        )}
    />
  );
};
