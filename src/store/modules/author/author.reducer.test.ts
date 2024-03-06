import AuthorReducer from "./author.reducer";
import { AuthorActionTypes } from "./author.types";

describe('Author Reducer', () => {
  const initialState = {
    authors: {
      loading: false,
      filter: '',
      totalItems: 0,
      list: [],
    }
  };

  test('SET_LOADING_AUTHORS action', () => {
    const action = {
      type: AuthorActionTypes.SET_LOADING_AUTHORS,
      payload: { loading: true }
    };
    const newState = AuthorReducer(initialState, action);
    expect(newState).toEqual({
      authors: {
        ...initialState.authors,
        loading: true
      }
    });
  });

  test('SET_AUTHOR_FILTER action', () => {
    const filter = 'test filter';
    const action = {
      type: AuthorActionTypes.SET_AUTHOR_FILTER,
      payload: { filter }
    };
    const newState = AuthorReducer(initialState, action);
    expect(newState).toEqual({
      authors: {
        ...initialState.authors,
        filter
      }
    });
  });

  test('CLEAR_AUTHORS_LIST action', () => {
    const action = { type: AuthorActionTypes.CLEAR_AUTHORS_LIST };
    const newState = AuthorReducer(initialState, action);
    expect(newState).toEqual({
      authors: {
        ...initialState.authors,
        list: []
      }
    });
  });

  test('SET_AUTHORS action', () => {
    const payload = {
      data: {
        total: 2,
        results: [{ id: 1, name: 'Author 1' }, { id: 2, name: 'Author 2' }]
      }
    };
    const action = { type: AuthorActionTypes.SET_AUTHORS, payload };
    const newState = AuthorReducer(initialState, action);
    expect(newState).toEqual({
      authors: {
        ...initialState.authors,
        totalItems: payload.data.total,
        list: payload.data.results
      }
    });
  });

  test('CLEAR_AUTHORS_STATE action', () => {
    const action = { type: AuthorActionTypes.CLEAR_AUTHORS_STATE };
    const newState = AuthorReducer(initialState, action);
    expect(newState).toEqual({
      authors: {
        loading: false,
        filter: '',
        totalItems: 0,
        list: []
      }
    });
  });
});
