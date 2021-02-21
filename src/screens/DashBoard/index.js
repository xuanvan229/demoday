/* eslint-disable no-unused-vars */
import React from 'react';
// import { Input } from 'antd';
// import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import History from '../History';
import List from '../List';
import Dashboard from './Dashboard';
import Detail from '../Detail';
import Project from '../Projects';

// import styles from './DashboardLayout.module.scss'; // Import css modules stylesheet as styles

// const { TextArea } = Input;

const DashBoardLayout = () => {
  const [fetchWallet, setFetchWallet] = React.useState(false);
  const isLogin = useSelector((state) => state.login.isLogin);

  if (!isLogin) {
    return <Redirect to="/login" />;
  }
  return (
  <div className="flex flex-row min-h-screen overflow-hidden">
    <NavBar fetchWallet={fetchWallet}/>
    <div className="flex flex-col flex-1" style={{ marginLeft: '250px' }}>
      {/* <Header /> */}
      <div className="flex flex-col items-center bg-gray-200 flex-1 overflow-auto" >
        <Switch >
          <Route exact path="/dashboard/new" component={Dashboard} />
          <Route path="/dashboard/list" component={List} />
          <Route path="/dashboard/history" component={History} />
          <Route path="/dashboard/project" component={Project} />
          <Route path="/dashboard/detail/:id">
            <Detail fetchWallet={fetchWallet} setFetchWallet={setFetchWallet} />
          </Route>
          {/* <Route path="/" render={() => <Redirect to="/dashboard" />} /> */}
        </Switch>
      </div>
    </div>
  </div>
  );
};
export default DashBoardLayout;
