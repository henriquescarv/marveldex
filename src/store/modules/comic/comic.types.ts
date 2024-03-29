export enum ComicActionTypes {
  REQUEST_COMICS = 'REQUEST_COMICS',
  SET_COMICS = 'SET_COMICS',
  SET_LOADING_COMICS = 'SET_LOADING_COMICS',

  REQUEST_COMIC_DETAILS = 'REQUEST_COMIC_DETAILS',
  SET_COMIC_DETAILS = 'SET_COMIC_DETAILS',
  SET_LOADING_COMIC_DETAILS = 'SET_LOADING_COMIC_DETAILS',

  SET_COMIC_FILTER = 'SET_COMIC_FILTER',
  CLEAR_COMICS_LIST = 'CLEAR_CHARACTERS_LIST',

  CLEAR_COMICS_STATE = 'CLEAR_COMICS_STATE',
};

export type ComicState = {
  comics: any,
  details: any,
};
