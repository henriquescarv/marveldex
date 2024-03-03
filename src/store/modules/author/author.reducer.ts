import { AuthorActionTypes, AuthorState } from './author.types';

const initialState: AuthorState = {
  authors: {
    loading: false,
    list: [],
  }
}

const AuthorReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case AuthorActionTypes.SET_LOADING_AUTHORS:
      const { loading } = action.payload.values;

      return {
        ...state,
        authors: {
          ...state.authors,
          loading: loading,
        },
      }
    case AuthorActionTypes.SET_AUTHORS:
      return {
        ...state,
        authors: {
          ...state.authors,
          list: action.payload.data.results,
        },
      }
    default:
      return {
        ...state,
      }
  }
};

export default AuthorReducer;
