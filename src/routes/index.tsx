import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Privacy from '../containers/Privacy';
import ForgotPassword from '../containers/ForgotPassword';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import Terms from '../containers/Terms';
import Bucket from '../containers/Bucket';
import AdminOrders from '../containers/AdminOrders';
import ProductCreation from '../containers/ProductCreation';
import { PrivateRoute } from './privateRoute';
import AuthFailed from '../components/AuthFailed';

const routes = (
  <Switch>
    <Route path="/privacy">
      <Privacy />
    </Route>
    <Route path="/authfailed">
      <AuthFailed />
    </Route>
    <Route path="/forgotpassword">
      <ForgotPassword />
    </Route>
    <Route path="/signin">
      <SignIn />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route path="/terms">
      <Terms />
    </Route>
    <Route path="/bucket">
      <Bucket />
    </Route>
    <PrivateRoute path="/orders">
      <AdminOrders />
    </PrivateRoute>
    <PrivateRoute path="/uploadProduct">
      <ProductCreation />
    </PrivateRoute>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default routes;
