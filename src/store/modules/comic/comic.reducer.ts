import { ComicActionTypes, ComicState } from './comic.types';

const initialState: ComicState = {
  comics: {
    loading: false,
    list: [],
  }
}

const ComicReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case ComicActionTypes.SET_LOADING_COMICS:
      const { loading } = action.payload.values;

      return {
        ...state,
        comics: {
          ...state.comics,
          loading: loading,
        },
      }
    case ComicActionTypes.SET_COMICS:
      return {
        ...state,
        comics: {
          ...state.comics,
          list: action.payload.data.results,
        },
      }
    default:
      return {
        ...state,
      }
  }
};

export default ComicReducer;
