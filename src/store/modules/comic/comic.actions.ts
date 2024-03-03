import { ComicActionTypes } from "./comic.types";

const requestComics = () => ({
  type: ComicActionTypes.REQUEST_COMICS,
  payload: {},
});

const setComics = (payload: any) => ({
  type: ComicActionTypes.SET_COMICS,
  payload
});

const setLoadingComics = (payload: any) => ({
  type: ComicActionTypes.SET_LOADING_COMICS,
  payload
});

const actions = {
  comics: {
    request: requestComics,
    setLoading: setLoadingComics,
    set: setComics,
  }
};

export default actions;
