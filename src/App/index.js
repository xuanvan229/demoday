/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { Spin } from 'antd';
import AppRouter from './Router';

const App = (props) => {
  const { loadingApp } = props;
  if (loadingApp) {
    return (
      <div>
      <Spin/>
    </div>
    );
  }
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

const mapStateToProps = (state) => ({
  loadingApp: state.app.loadingApp,
});

export default connect(mapStateToProps, undefined)(App);
