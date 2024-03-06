import { AuthorActionTypes, AuthorState } from "./author.types";

const initialState: AuthorState = {
  authors: {
    loading: false,
    filter: '',
    totalItems: 0,
    list: [],
  },
  details: {
    loading: false,
    data: {},
    comics: [],
  }
};

const AuthorReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case AuthorActionTypes.SET_LOADING_AUTHORS:
      const { loading } = action.payload;

      return {
        ...state,
        authors: {
          ...state.authors,
          loading: loading,
        },
      }
    case AuthorActionTypes.SET_AUTHOR_FILTER:
      const { filter } = action.payload;

      return {
        ...state,
        authors: {
          ...state.authors,
          filter: filter,
        },
      }
    case AuthorActionTypes.CLEAR_AUTHORS_LIST:
      return {
        ...state,
        authors: {
          ...state.authors,
          list: [],
        },
      }
    case AuthorActionTypes.SET_AUTHORS:
      return {
        ...state,
        authors: {
          ...state.authors,
          totalItems: action.payload.data.total,
          list: [
            ...state.authors.list,
            ...action.payload.data.results
          ],
        },
      }
    case AuthorActionTypes.SET_LOADING_AUTHOR_DETAILS:
      return {
        ...state,
        details: {
          ...state.details,
          loading: action.payload,
        }
      }
    case AuthorActionTypes.SET_AUTHOR_DETAILS:
      const { authorDetails, creatorComics } = action.payload;
      console.log(action.payload)

      return {
        ...state,
        details: {
          ...state.details,
          data: authorDetails.data.results[0],
          comics: creatorComics.data.results,
        }
      }
    case AuthorActionTypes.CLEAR_AUTHORS_STATE:
      return {
        ...initialState,
      }
    default:
      return {
        ...state,
      }
  }
};

export default AuthorReducer;
