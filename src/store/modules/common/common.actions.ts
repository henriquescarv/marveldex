import { CommonActionTypes } from "./common.types";

const setCredentials = (publicKey: string, privateKey: string) => ({
  type: CommonActionTypes.SET_CREDENTIALS,
  payload: { publicKey, privateKey }
});

const actions = {
  credentials: {
    set: setCredentials,
  },
};

export default actions;
