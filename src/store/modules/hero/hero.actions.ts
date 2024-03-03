import { CommonActionTypes } from "./hero.types";

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
  characters: {
    request: requestCharacters,
    setLoading: setLoadingCharacters,
    set: setCharacters,
  }
};

export default actions;
