import { all } from 'redux-saga/effects';
import { commonSagas} from './common';

const sagas = [commonSagas()];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
