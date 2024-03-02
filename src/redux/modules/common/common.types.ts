export enum CommonActionTypes {
  SET_CREDENTIALS = 'SET_CREDENTIALS',
};

export type CredentialsPayload = {
  values: { publicKey: string, privateKey: string },
  callback: any,
}

export type SetCredentials = {
  type: typeof CommonActionTypes.SET_CREDENTIALS,
  payload: CredentialsPayload,
}

export type CommonActions = SetCredentials

export type Credentials = {
  publicKey: string,
  privateKey: string,
}

export type CommonState = {
  publicKey: string,
  privateKey: string,
}