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
  }
};

export default actions;
