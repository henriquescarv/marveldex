import { CommonActionTypes, CommonActions, CommonState } from './common.types';

const initialState: CommonState = {
  publicKey: '',
  privateKey: '',
}

const CommonReducer = (state = initialState, action: CommonActions) => {
  switch(action.type) {
    case CommonActionTypes.SET_CREDENTIALS:
      const payload = action.payload.values;

      return {
        ...initialState,
        publicKey: payload.publicKey,
        privateKey: payload.privateKey,
      }
    default:
      return {
        ...initialState,
      }
  }
};

export default CommonReducer;
