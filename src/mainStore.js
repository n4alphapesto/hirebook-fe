import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./mainReducer";
import mainSaga from "./mainSaga";

// Added DevTool Inspection
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Prepare store with middlewares
export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware(mainSaga);
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(mainSaga);
  return store;
}
