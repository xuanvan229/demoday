import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import './styles/index.scss';
// import './styles/_main.scss';
// import './styles/_utilities.scss';
import { Provider } from 'react-redux';
import AppRoute from './App/index';
import rootSaga from './store/sagas';
import { configureStore } from './store';

const { store, runSaga } = configureStore();
runSaga(rootSaga);

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <AppRoute />
        </div>
    </Provider>
  );
}

export default App;
