import { call, put, select, takeLatest } from "redux-saga/effects";
import authorActions from './author.actions';
import { AuthorActionTypes } from "./author.types";
import service from "service/service";
import md5 from "md5";

function* getAuthors(action: any): any {
  const payload = action.payload;

  const time = Number(new Date());
  const hash = md5(time + payload.privateKey + payload.publicKey).toString();

  yield put(authorActions.author.setLoading(true));
  try {
    const baseUrl = `limit=${payload.limit}&offset=${payload.offset}&apikey=${payload.publicKey}&ts=${time}&hash=${hash}`;
    const filter = yield select(state => state.author.authors.filter);

    let response;
    if (filter) {
      response = yield call(service.get, `/creators?nameStartsWith=${filter}&${baseUrl}`);
    } else {
      response = yield call(service.get, `/creators?${baseUrl}`);
    }

    yield put(authorActions.author.set(response.data));
  } catch (error) {
    
  }
  yield put(authorActions.author.setLoading(false));
}

function* sagas() {
  yield takeLatest(AuthorActionTypes.REQUEST_AUTHORS, getAuthors);
};

export default sagas;

