import Cookies from "js-cookie";

const useCredentials = () => {
  const publicKey = Cookies.get('publicKey');
  const privateKey = Cookies.get('privateKey');
  const globalTheme = Cookies.get('globalTheme');

  const setGlobalTheme = (theme: 'light' | 'dark') => {
    Cookies.set('globalTheme', theme);
  };

  const clearCredentials = () => {
    Cookies.remove('publicKey');
    Cookies.remove('privateKey');
    Cookies.remove('globalTheme');
  };

  return {
    publicKey,
    privateKey,
    globalTheme,
    setGlobalTheme,
    clearCredentials,
  }
}

export default useCredentials;
