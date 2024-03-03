export enum CommonActionTypes {
  SET_CREDENTIALS = 'SET_CREDENTIALS',

  REQUEST_CHARACTERS = 'REQUEST_CHARACTERS',
  SET_CHARACTERS = 'SET_CHARACTERS',
  SET_LOADING_CHARACTERS = 'SET_LOADING_CHARACTERS',
};

export type Credentials = {
  publicKey: string,
  privateKey: string,
}

export type CommonState = {
  publicKey: string,
  privateKey: string,
  characters: any,
}