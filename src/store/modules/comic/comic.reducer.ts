import { ComicActionTypes, ComicState } from "./comic.types";

const initialState: ComicState = {
  comics: {
    loading: false,
    filter: '',
    totalItems: 0,
    list: [],
  }
}

const ComicReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case ComicActionTypes.SET_LOADING_COMICS:
      const { loading } = action.payload;

      return {
        ...state,
        comics: {
          ...state.comics,
          loading: loading,
        },
      }
    case ComicActionTypes.SET_COMIC_FILTER:
      const { filter } = action.payload;
  
      return {
        ...state,
        comics: {
          ...state.comics,
          filter: filter,
        },
      }
    case ComicActionTypes.CLEAR_COMICS_LIST:
      return {
        ...state,
        comics: {
          ...state.comics,
          list: [],
        },
      }
    case ComicActionTypes.SET_COMICS:
      return {
        ...state,
        comics: {
          ...state.comics,
          totalItems: action.payload.data.total,
          list: [
            ...state.comics.list,
            ...action.payload.data.results
          ],
        },
      }
    case ComicActionTypes.CLEAR_COMICS_STATE:
      return {
        ...initialState,
      }
    default:
      return {
        ...state,
      }
  }
};

export default ComicReducer;
