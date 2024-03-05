import React, { useCallback, useContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Header } from 'components/Header';
import { ThemeProvider } from 'styled-components';
import { ThemeModeContext } from 'providers/ThemeModeProvider/ThemeModeProvider';
import GlobalStyle from './styles/global'
import useCredentials from 'hooks/useCredentials/useCredentials';
import { Snackbar } from 'ui/components/Snackbar';
import { SnackbarContext } from 'providers/SnackbarProvider/SnackbarProvider';

function App() {
  const { publicKey, privateKey } = useCredentials();
  const { theme } = useContext(ThemeModeContext);
  const navigate = useNavigate();
  const location = useLocation();
	const { showSnackbar, snackbarMessage, snackbarStatus } = useContext(SnackbarContext);

  const setRandomFavicon = useCallback(() => {
    const randomIconNumber = Math.floor(Math.random() * 4) + 1;

    const faviconLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    faviconLink.href = `/favicon${randomIconNumber}.png`;
  }, [])

  const verifyUserCredentials = useCallback(() => {
    if (!publicKey || !privateKey) {
      navigate('/login');
    }
    if (publicKey && privateKey && location.pathname === '/') {
      navigate('/characters')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, publicKey, privateKey]);

  useEffect(() => {setRandomFavicon()}, [setRandomFavicon]);
  useEffect(() => {verifyUserCredentials()}, [verifyUserCredentials])

  return (
    <main className="App">
			<ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
			  <Snackbar visible={showSnackbar} message={snackbarMessage} status={snackbarStatus} />
      </ThemeProvider>
    </main>
  );
}

export default App;
