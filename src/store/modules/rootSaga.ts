import { all } from "redux-saga/effects";
import { commonSagas} from "./common";
import { heroSagas} from "./hero";
import { comicSagas } from "./comic";
import { authorSagas } from "./author";

const sagas = [commonSagas(), heroSagas(), comicSagas(), authorSagas()];

function* rootSaga() {
  yield all(sagas);
};

export default rootSaga;
