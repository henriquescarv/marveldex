import { call, put, takeLatest } from "redux-saga/effects";
import commonActions from './comic.actions';
import { ComicActionTypes } from "./comic.types";
import service from "service/service";
import md5 from "md5";

function* getCharacters(): any {
  const credentials = { // depois vão vir do action.payload
    publicKey: '0a1fdf436215f99d674d4d1d9d76e906',
    privateKey: 'bcada1ac7be94e76c28a22ddc4530e0326e691cb',
  };

  const time = Number(new Date());
  const hash = md5(time + credentials.privateKey + credentials.publicKey).toString();

  try {
    const response = yield call(service.get, `/comics?apikey=${credentials.publicKey}&ts=${time}&hash=${hash}`);
    yield put(commonActions.comics.set(response.data));
  } catch (error) {
    alert('deu erro :/')
  }
}

function* sagas() {
  yield takeLatest(ComicActionTypes.REQUEST_COMICS, getCharacters);
};

export default sagas;

