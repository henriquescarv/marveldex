import { call, put, select, takeLatest } from "redux-saga/effects";
import comicActions from './comic.actions';
import { ComicActionTypes } from "./comic.types";
import service from "service/service";
import md5 from "md5";

function* getCharacters(action: any): any {
  const payload = action.payload;

  const time = Number(new Date());
  const hash = md5(time + payload.privateKey + payload.publicKey).toString();

  yield put(comicActions.comics.setLoading(true));
  try {
    const baseUrl = `limit=${payload.limit}&offset=${payload.offset}&apikey=${payload.publicKey}&ts=${time}&hash=${hash}`;
    const filter = yield select(state => state.comic.comics.filter);

    let response;
    if (filter) {
      response = yield call(service.get, `/comics?titleStartsWith=${filter}&${baseUrl}`);
    } else {
      response = yield call(service.get, `/comics?${baseUrl}`);
    }

    yield put(comicActions.comics.set(response.data));
  } catch (error) {
    
  }
  yield put(comicActions.comics.setLoading(false));
}

function* sagas() {
  yield takeLatest(ComicActionTypes.REQUEST_COMICS, getCharacters);
};

export default sagas;

