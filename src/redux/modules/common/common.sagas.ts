import axios from "axios";
import { all, takeLatest } from "redux-saga/effects";
import commonActions from './common.actions';
import { CommonActionTypes, Credentials } from "./common.types";

function* setCredentials(action: any) {
  const credentials = action.payload;
}

function* getCharacters(action: any) {
  const credentials = { // depois vão vir do action.payload
    publicKey: '0a1fdf436215f99d674d4d1d9d76e906',
    privateKey: 'bcada1ac7be94e76c28a22ddc4530e0326e691cb',
  };

  try {

  } catch (error) {
    
  }
}

function* sagas() {
  yield takeLatest(CommonActionTypes.SET_CREDENTIALS, setCredentials);
};

export default sagas;

