import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import persistReducers from "./persistReducer";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducers(rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };