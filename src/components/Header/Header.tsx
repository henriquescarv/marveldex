import React, { useCallback, useContext } from "react";
import * as Styles from './Header.styles'
import appLogo from 'assets/images/app_logo.png';
import NavbarButton from "./components/NavbarButton/NavbarButton";
import { IconMoon } from "ui/icons/IconMoon";
import { ThemeModeContext } from "providers/ThemeModeProvider/ThemeModeProvider";
import { IconSun } from "ui/icons/IconSun";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeModeContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSetTheme = useCallback(() => {
    theme.title === 'light' ? setTheme('dark') : setTheme('light')
  }, [setTheme, theme]);

  const handleChangeRoute = (route: string) => {
    navigate(`/${route}`)
  }

  const mountThemeIcon = theme.title === 'light' ? <IconMoon size={32} /> : <IconSun size={32} color="primaryLight" />

  return (
    <Styles.Header>
      <Styles.NavbarWrapper>
        <Styles.Logo src={appLogo} alt="Marvel logo" />
        {!location.pathname.includes('login') && (
          <>
            <Styles.ButtonsWrapper>
              <NavbarButton onClick={() => handleChangeRoute('characters')} label="CHARACTERS" disabled={location.pathname.includes('characters')} />
              <NavbarButton onClick={() => handleChangeRoute('comics')} label="COMICS" disabled={location.pathname.includes('comics')} />
              <NavbarButton onClick={() => handleChangeRoute('authors')} label="AUTHORS" disabled={location.pathname.includes('authors')} />
            </Styles.ButtonsWrapper>
            <NavbarButton onClick={handleSetTheme} icon={mountThemeIcon} />
          </>
        )}
      </Styles.NavbarWrapper>
    </Styles.Header>
  )
};

export default Header;
