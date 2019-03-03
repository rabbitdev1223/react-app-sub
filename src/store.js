import storage from 'redux-persist/es/storage'
import { applyMiddleware, createStore } from 'redux'
import { createFilter   } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import apiMiddleware from './middleware';
import rootReducer from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension';

export default (history) => {
  const persistedFilter = createFilter(
    'auth', ['access', 'refresh'], 'talentInfo', 'clientInfo', 'selectedProfile'
  );

  const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
  );

  const store = createStore(
    persistedReducer, {},
    composeWithDevTools(
      applyMiddleware(apiMiddleware, routerMiddleware(history)),
    )
  );

  let persistor = persistStore(store);

  // return store
  return { store, persistor };
}
