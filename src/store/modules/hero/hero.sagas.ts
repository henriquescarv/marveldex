import { call, put, select, takeLatest } from "redux-saga/effects";
import heroActions from "./hero.actions";
import { HeroActionTypes } from "./hero.types";
import service from "service/service";
import md5 from "md5";

function* getCharacters(action: any): any {
  const payload = action.payload;

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
};

function* getCharacterDetails(action: any): any {
  const payload = action.payload;
  const time = Number(new Date());
  const hash = md5(time + payload.privateKey + payload.publicKey).toString();

  const baseUrl = `apikey=${payload.publicKey}&ts=${time}&hash=${hash}`;

  yield put(heroActions.characterDetails.setLoading(true));
  try {
    const characterDetails = yield call(service.get, `/characters/${payload.characterId}?${baseUrl}`);
    const characterComics = yield call(service.get, `/comics?characters=${payload.characterId}&limit=10&${baseUrl}`);
    yield put(heroActions.characterDetails.set({ characterDetails: characterDetails.data, characterComics: characterComics.data }));
  } catch (error) {

  }
  yield put(heroActions.characterDetails.setLoading(false));
};

function* sagas() {
  yield takeLatest(HeroActionTypes.REQUEST_CHARACTERS, getCharacters);
  yield takeLatest(HeroActionTypes.REQUEST_CHARACTER_DETAILS, getCharacterDetails);
};

export default sagas;
