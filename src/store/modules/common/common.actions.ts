import { CommonActionTypes } from "./common.types";

const setCredentials = (publicKey: string, privateKey: string) => ({
  type: CommonActionTypes.SET_CREDENTIALS,
  payload: { publicKey, privateKey }
});

const requestCharacters = () => ({
  type: CommonActionTypes.REQUEST_CHARACTERS,
  payload: {},
});

const setCharacters = (payload: any) => ({
  type: CommonActionTypes.SET_CHARACTERS,
  payload
});

const setLoadingCharacters = (payload: any) => ({
  type: CommonActionTypes.SET_LOADING_CHARACTERS,
  payload
});

const actions = {
  credentials: {
    set: setCredentials,
  },
  characters: {
    request: requestCharacters,
    setLoading: setLoadingCharacters,
    set: setCharacters,
  }
};

export default actions;
