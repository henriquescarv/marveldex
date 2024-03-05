import { call, put, select, takeLatest } from "redux-saga/effects";
import heroActions from './hero.actions';
import { HeroActionTypes } from "./hero.types";
import service from "service/service";
import md5 from "md5";

function* getCharacters(action: any): any {
  const payload = action.payload;
  // publicKey: '0a1fdf436215f99d674d4d1d9d76e906',
  // privateKey: 'bcada1ac7be94e76c28a22ddc4530e0326e691cb',

  const time = Number(new Date());
  const hash = md5(time + payload.privateKey + payload.publicKey).toString();

  yield put(heroActions.characters.setLoading(true));
  try {
    const baseUrl = `limit=${payload.limit}&offset=${payload.offset}&apikey=${payload.publicKey}&ts=${time}&hash=${hash}`;
    const filter = yield select(state => state.hero.characters.filter);

    let response;
    if (filter) {
      response = yield call(service.get, `/characters?nameStartsWith=${filter}&${baseUrl}`);
    } else {
      response = yield call(service.get, `/characters?${baseUrl}`);
    }

    yield put(heroActions.characters.set(response.data));
  } catch (error) {
    
  }
  yield put(heroActions.characters.setLoading(false));
}

function* sagas() {
  yield takeLatest(HeroActionTypes.REQUEST_CHARACTERS, getCharacters);
};

export default sagas;

