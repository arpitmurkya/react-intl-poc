import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import rootReducer from "./rootReducer";
import {
  fetchCurrentUserSuccess,
  fetchCurrentUserRequest
} from "./actions/users";
import { localeSet } from "./actions/locale";
import rootSaga from "./rootSaga";
import history from "./history";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);
sagaMiddleware.run(rootSaga);

if (localStorage.bookwormJWT) {
  store.dispatch(fetchCurrentUserRequest());
} else {
  store.dispatch(fetchCurrentUserSuccess({}));
}

if (localStorage.alhubLang) {
  store.dispatch(localeSet(localStorage.alhubLang));
}

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
