import { combineReducers } from "redux";
import commonReducer from './common/common.reducer';
import heroReducer from './hero/hero.reducer';
import ComicReducer from "./comic/comic.reducer";
import AuthorReducer from "./author/author.reducer";

const rootReducer = combineReducers({
  common: commonReducer,
  hero: heroReducer,
  comic: ComicReducer,
  author: AuthorReducer,
});

export type CommonState = ReturnType<typeof rootReducer>;
export default rootReducer;
