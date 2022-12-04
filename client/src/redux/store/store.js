import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const composeWithDevTools = window._REDUX_DEVTOOLS_EXTENSION || compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
