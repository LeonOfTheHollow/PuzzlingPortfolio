import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import "./styles/main.css";
import LandingPuzzle from './components/LandingPuzzle';
import CellularAutomataPage from './components/CellularAutomata/Container';
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
      <Route exact path="/" component={LandingPuzzle} />
      <Route exact path="/automata" component={CellularAutomataPage} />
    </div>
  </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
