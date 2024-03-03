import { AuthorActionTypes } from "./author.types";

const requestAuthors = () => ({
  type: AuthorActionTypes.REQUEST_AUTHORS,
  payload: {},
});

const setAuthors = (payload: any) => ({
  type: AuthorActionTypes.SET_AUTHORS,
  payload
});

const setLoadingAuthors = (payload: any) => ({
  type: AuthorActionTypes.SET_LOADING_AUTHORS,
  payload
});

const actions = {
  author: {
    request: requestAuthors,
    setLoading: setLoadingAuthors,
    set: setAuthors,
  }
};

export default actions;
