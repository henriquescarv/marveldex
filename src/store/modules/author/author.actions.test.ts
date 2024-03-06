import { Credentials } from "../common/common.types";
import { AuthorActionTypes } from "./author.types";
import actions from "./author.actions";

describe('Author Actions', () => {
  test('requestAuthors action', () => {
    const credentials: Credentials = {
      publicKey: 'publicKey',
      privateKey: 'privateKey',
      offset: 10,
      limit: 20
    };
    const action = actions.author.request(credentials);
    expect(action).toEqual({
      type: AuthorActionTypes.REQUEST_AUTHORS,
      payload: credentials
    });
  });

  test('setAuthors action', () => {
    const authors = [{ id: 1, name: 'Author 1' }, { id: 2, name: 'Author 2' }];
    const action = actions.author.set(authors);
    expect(action).toEqual({
      type: AuthorActionTypes.SET_AUTHORS,
      payload: authors
    });
  });

  test('setLoadingAuthors action', () => {
    const loading = true;
    const action = actions.author.setLoading(loading);
    expect(action).toEqual({
      type: AuthorActionTypes.SET_LOADING_AUTHORS,
      payload: { loading }
    });
  });

  test('clearAllState action', () => {
    const action = actions.author.clearAll();
    expect(action).toEqual({ type: AuthorActionTypes.CLEAR_AUTHORS_STATE });
  });

  test('clearAuthorsList action', () => {
    const action = actions.author.clearList();
    expect(action).toEqual({ type: AuthorActionTypes.CLEAR_AUTHORS_LIST });
  });

  test('setFilter action', () => {
    const filter = 'filter';
    const action = actions.author.setFilter(filter);
    expect(action).toEqual({
      type: AuthorActionTypes.SET_AUTHOR_FILTER,
      payload: { filter }
    });
  });
});
