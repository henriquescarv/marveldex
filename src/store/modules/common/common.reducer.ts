import { CommonActionTypes, CommonState } from './common.types';

const initialState: CommonState = {
  loading: false,
  status: '',
}

const CommonReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case CommonActionTypes.SET_CREDENTIALS_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      }
    case CommonActionTypes.SET_CREDENTIALS_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
      }
    case CommonActionTypes.SET_CREDENTIALS_FAILURE:
      return {
        ...state,
        status: 'FAILURE',
      }
    case CommonActionTypes.RESET_CREDENTIALS_STATUS:
      return {
        ...state,
        status: initialState.status,
      }
    default:
      return {
        ...state,
      }
  }
};

export default CommonReducer;
