import { CommonActionTypes, CommonState } from './hero.types';

const initialState: CommonState = {
  characters: {
    loading: false,
    list: [],
  }
}

const CommonReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case CommonActionTypes.SET_LOADING_CHARACTERS:
      const { loading } = action.payload.values;

      return {
        ...state,
        characters: {
          ...state.characters,
          loading: loading,
        },
      }
    case CommonActionTypes.SET_CHARACTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          list: action.payload.data.results,
        },
      }
    default:
      return {
        ...state,
      }
  }
};

export default CommonReducer;
