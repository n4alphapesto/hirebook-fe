import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./mainReducer";
import mainSaga from "./mainSaga";

// Prepare store with middlewares
export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware(mainSaga);
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(mainSaga);
    return store;
}
