import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

const loggerMiddleware = createLogger();

const middlewares = [thunkMiddleware, process.env.NODE_ENV !== "production" && loggerMiddleware].filter(Boolean);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
