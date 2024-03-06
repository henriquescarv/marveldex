import { Credentials } from "../common/common.types";
import { AuthorActionTypes } from "./author.types";

const requestAuthors = ({ publicKey, privateKey, offset = 0, limit = 70 }: Credentials) => ({
  type: AuthorActionTypes.REQUEST_AUTHORS,
  payload: { publicKey, privateKey, offset, limit },
});

const setAuthors = (payload: any) => ({
  type: AuthorActionTypes.SET_AUTHORS,
  payload
});

const setLoadingAuthors = (loading: boolean) => ({
  type: AuthorActionTypes.SET_LOADING_AUTHORS,
  payload: { loading },
});

const requestAuthorDetails = ({ publicKey, privateKey, authorId }: any) => ({
  type: AuthorActionTypes.REQUEST_AUTHOR_DETAILS,
  payload: { publicKey, privateKey, authorId },
});

const setAuthorDetails = ({ authorDetails, creatorComics }: any) => ({
  type: AuthorActionTypes.SET_AUTHOR_DETAILS,
  payload: { authorDetails, creatorComics }
});

const setLoadingAuthorDetails = (payload: any) => ({
  type: AuthorActionTypes.SET_LOADING_AUTHOR_DETAILS,
  payload
});

const clearAllState = () => ({ type: AuthorActionTypes.CLEAR_AUTHORS_STATE });
const clearAuthorsList = () => ({ type: AuthorActionTypes.CLEAR_AUTHORS_LIST });
const setFilter = (filter: string) => ({ type: AuthorActionTypes.SET_AUTHOR_FILTER, payload: { filter } });

const actions = {
  author: {
    request: requestAuthors,
    setLoading: setLoadingAuthors,
    set: setAuthors,
    clearList: clearAuthorsList,
    setFilter: setFilter,
    clearAll: clearAllState,
  },
  authorDetails: {
    request: requestAuthorDetails,
    set: setAuthorDetails,
    setLoading: setLoadingAuthorDetails,
  },
};

export default actions;
