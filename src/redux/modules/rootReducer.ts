import { combineReducers } from "redux";
import commonReducer from './common/common.reducer';

const rootReducer = combineReducers({
  common: commonReducer,
});

export type CommonState = ReturnType<typeof rootReducer>;
export default rootReducer;
