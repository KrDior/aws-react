import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import routes from './routes';
import AppAppBar from './views/AppAppBar';
import AppFooter from './views/AppFooter';

const history: History = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <AppAppBar />
      {routes}
      <AppFooter />
    </Router>
  );
}
