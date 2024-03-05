import { CommonActionTypes, Credentials } from "./common.types";

const getCredentials = (credentials: Credentials) => ({ type: CommonActionTypes.GET_CREDENTIALS, payload: credentials });
const setLoadingCredentials = (loading: boolean) => ({ type: CommonActionTypes.SET_CREDENTIALS_LOADING, payload: { loading } });
const getCookieCredentials = () => ({ type: CommonActionTypes.GET_COOKIE_CREDENTIALS });

const setCredentials = (publicKey: string, privateKey: string) => ({
  type: CommonActionTypes.SET_CREDENTIALS,
  payload: { publicKey, privateKey }
});

const setCredentialsSuccess = () => ({ type: CommonActionTypes.SET_CREDENTIALS_SUCCESS });
const setCredentialsFailure = () => ({ type: CommonActionTypes.SET_CREDENTIALS_FAILURE });
const resetCredentialsStatus = () => ({ type: CommonActionTypes.RESET_CREDENTIALS_STATUS });

const clearAllStates = () => ({ type: CommonActionTypes.CLEAR_ALL });

const actions = {
  credentials: {
    get: getCredentials,
    getByCookies: getCookieCredentials,
    set: setCredentials,
    setLoading: setLoadingCredentials,
  },
  status: {
    success: setCredentialsSuccess,
    faluire: setCredentialsFailure,
    reset: resetCredentialsStatus,
  },
  clearAll: clearAllStates,
};

export default actions;
