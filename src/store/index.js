/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { routerMiddleware } from 'connected-react-router';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // ADDED
import rootReducer from './reducers';

export const history = createBrowserHistory();

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const blacklistPaths = [];

  const persistConfig = {
    key: 'root',
    storage,
    blacklist: blacklistPaths,
    stateReconciler: autoMergeLevel2, // ADDED
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer(history));
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
  );
  const persistor = persistStore(store);
  return {
    store,
    runSaga: sagaMiddleware.run,
    persistor,
  };
}
