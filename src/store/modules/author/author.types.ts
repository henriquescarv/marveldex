export enum AuthorActionTypes {
  REQUEST_AUTHORS = 'REQUEST_AUTHORS',
  SET_AUTHORS = 'SET_AUTHORS',
  SET_LOADING_AUTHORS = 'SET_LOADING_AUTHORS',
};

export type AuthorState = {
  authors: any,
}