import { call, put, takeLatest } from "redux-saga/effects";
import { CommonActionTypes } from "./common.types";
import commonActions from "./common.actions";
import heroActions from "store/modules/hero/hero.actions";
import md5 from "md5";
import service from "service/service";
import Cookies from "js-cookie";
import comicActions from "../comic/comic.actions";
import authorActions from "../author/author.actions";

function* getCredentials(action: any): any {
  const cookiesPublicKey = Cookies.get('publicKey');
  const cookiesPrivateKey = Cookies.get('privateKey');

  const credentials = action.payload;
  const time = Number(new Date());
  const hash = md5(time + credentials.privateKey + credentials.publicKey).toString();

  yield put(commonActions.credentials.setLoading(true));
  try {
    if (!cookiesPublicKey || !cookiesPrivateKey) {
      const response = yield call(service.get, `/characters?limit=70&&apikey=${credentials.publicKey}&ts=${time}&hash=${hash}`);
      yield put(heroActions.characters.set(response.data));
  
      Cookies.set('publicKey', credentials.publicKey);
      Cookies.set('privateKey', credentials.privateKey);

      yield put(commonActions.status.success());
    }
  } catch (error) {
    yield put(commonActions.status.faluire());
  }
  yield put(commonActions.credentials.setLoading(false));
}

function* clearAllStates(): any {
  yield put(comicActions.comics.clearList());
  yield put(authorActions.author.clearList());
  yield put(heroActions.characters.clearAll());
}

function* sagas() {
  yield takeLatest(CommonActionTypes.GET_CREDENTIALS, getCredentials);
  yield takeLatest(CommonActionTypes.CLEAR_ALL, clearAllStates);
};

export default sagas;
