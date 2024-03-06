import { renderHook } from '@testing-library/react-hooks';
import useCredentials from './useCredentials';

describe('useCredentials hook', () => {
  it('return useCredentials keys correctly', () => {
    const { result } = renderHook(() => useCredentials());
    const matchResult = ['publicKey', 'privateKey', 'globalTheme', 'setGlobalTheme', 'clearCredentials'];
    const hookKeys = Object.keys(result.current);

    expect(hookKeys).toEqual(matchResult);
  });
});
