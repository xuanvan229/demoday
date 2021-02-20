/* eslint-disable import/no-unresolved */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'screens/Home';
import Login from 'screens/Login';
import Register from 'screens/Register';
import DashBoard from 'screens/DashBoard/index';

const AppRouter = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={DashBoard} />
      {/* <Route path="/" render={() => <Redirect to="/dashboard" />} /> */}
    </Switch>
);

export default AppRouter;
