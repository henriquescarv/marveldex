export enum ComicActionTypes {
  REQUEST_COMICS = 'REQUEST_COMICS',
  SET_COMICS = 'SET_COMICS',
  SET_LOADING_COMICS = 'SET_LOADING_COMICS',
};

export type ComicState = {
  comics: any,
}