import { CommonActionTypes, CommonState } from './common.types';

const initialState: CommonState = {
  publicKey: '',
  privateKey: '',
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
    default:
      return {
        ...state,
      }
  }
};

export default CommonReducer;
