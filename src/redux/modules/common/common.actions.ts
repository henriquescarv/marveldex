import { CommonActionTypes, CredentialsPayload, SetCredentials } from "./common.types";

const setCredentials = (payload: CredentialsPayload): SetCredentials => ({
  type: CommonActionTypes.SET_CREDENTIALS,
  payload
});

const actions = {
  credentials: {
    set: setCredentials,
  }
};

export default actions;
