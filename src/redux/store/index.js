import { createStore, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";
import mainReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer, composeEnhancers(
      applyMiddleware(thunk)
    ));

export default store;
