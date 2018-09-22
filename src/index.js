import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import "./styles/main.css";
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReduxThunk from "redux-thunk";
import registerServiceWorker from './utils/registerServiceWorker';

import combinedReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(combinedReducer);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
