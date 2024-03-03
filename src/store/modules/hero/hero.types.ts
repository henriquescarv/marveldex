export enum CommonActionTypes {
  REQUEST_CHARACTERS = 'REQUEST_CHARACTERS',
  SET_CHARACTERS = 'SET_CHARACTERS',
  SET_LOADING_CHARACTERS = 'SET_LOADING_CHARACTERS',
};

export type CommonState = {
  characters: any,
}