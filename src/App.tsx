import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import light from 'styles/themes/light';
import { Header } from 'components/Header';
import { ThemeProvider } from 'styled-components';
import { ThemeModeContext } from 'providers/ThemeModeProvider/ThemeModeProvider';
import GlobalStyle from './styles/global'

function App() {
  const { theme } = useContext(ThemeModeContext);

  return (
    <main className="App">
			<ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
        Olá, mundo
      </ThemeProvider>
    </main>
  );
}

export default App;
