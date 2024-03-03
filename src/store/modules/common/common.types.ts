export enum CommonActionTypes {
  SET_CREDENTIALS = 'SET_CREDENTIALS',
};

export type Credentials = {
  publicKey: string,
  privateKey: string,
}

export type CommonState = {
  publicKey: string,
  privateKey: string,
}