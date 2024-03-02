import { createStore, applyMiddleware } from "redux";

const createReduxStore = (reducers: any, middlewares: any) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

export default createReduxStore;
