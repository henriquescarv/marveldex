import { takeLatest } from "redux-saga/effects";
import { CommonActionTypes } from "./common.types";

function* setCredentials(action: any) {
  const credentials = action.payload;
}

function* sagas() {
  yield takeLatest(CommonActionTypes.SET_CREDENTIALS, setCredentials);
};

export default sagas;

