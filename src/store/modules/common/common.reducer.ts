import { CommonActionTypes, CommonState } from './common.types';

const initialState: CommonState = {
  publicKey: '',
  privateKey: '',
  characters: {
    loading: false,
    list: [],
  }
}

const CommonReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case CommonActionTypes.SET_CREDENTIALS:
      const credentialsPayload = action.payload.values;

      return {
        ...state,
        publicKey: credentialsPayload.publicKey,
        privateKey: credentialsPayload.privateKey,
      }
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
