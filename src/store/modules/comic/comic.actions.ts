import { Credentials } from "../common/common.types";
import { ComicActionTypes } from "./comic.types";

const requestComics = ({ publicKey, privateKey, offset = 0, limit = 70 }: Credentials) => ({
  type: ComicActionTypes.REQUEST_COMICS,
  payload: { publicKey, privateKey, offset, limit },
});

const setComics = (payload: any) => ({
  type: ComicActionTypes.SET_COMICS,
  payload
});

const setLoadingComics = (loading: boolean) => ({
  type: ComicActionTypes.SET_LOADING_COMICS,
  payload: { loading },
});

const requestComicDetails = ({ publicKey, privateKey, comicId }: any) => ({
  type: ComicActionTypes.REQUEST_COMIC_DETAILS,
  payload: { publicKey, privateKey, comicId },
});

const setComicDetails = ({ comicDetails, comicCreators }: any) => ({
  type: ComicActionTypes.SET_COMIC_DETAILS,
  payload: { comicDetails, comicCreators }
});

const setLoadingComicDetails = (payload: any) => ({
  type: ComicActionTypes.SET_LOADING_COMIC_DETAILS,
  payload
});

const clearAllState = () => ({ type: ComicActionTypes.CLEAR_COMICS_STATE });
const clearComicsList = () => ({ type: ComicActionTypes.CLEAR_COMICS_LIST });
const setFilter = (filter: string) => ({ type: ComicActionTypes.SET_COMIC_FILTER, payload: { filter } });

const actions = {
  comics: {
    request: requestComics,
    setLoading: setLoadingComics,
    set: setComics,
    clearList: clearComicsList,
    setFilter: setFilter,
    clearAll: clearAllState,
  },
  comicDetails: {
    request: requestComicDetails,
    set: setComicDetails,
    setLoading: setLoadingComicDetails,
  },
};

export default actions;
