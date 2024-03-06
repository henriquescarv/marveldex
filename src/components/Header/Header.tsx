import React, { useCallback, useContext } from "react";
import * as Styles from './Header.styles';
import appLogo from 'assets/images/app_logo.png';
import NavbarButton from "./components/NavbarButton/NavbarButton";
import { IconMoon } from "ui/icons/IconMoon";
import { ThemeModeContext } from "providers/ThemeModeProvider/ThemeModeProvider";
import { IconSun } from "ui/icons/IconSun";
import { useLocation, useNavigate } from "react-router-dom";
import { IconLogout } from "ui/icons/IconLogout";
import useCredentials from "hooks/useCredentials/useCredentials";
import { useDispatch } from "react-redux";
import commonActions from "store/modules/common/common.actions";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeModeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { clearCredentials, setGlobalTheme } = useCredentials();

  const isLoginPage = location.pathname.includes('login');

  const handleSetTheme = useCallback(() => {
    const definedTheme = theme.title === 'dark' ? 'dark' : 'light';
    if (definedTheme === 'light') {
      setTheme('dark');
      setGlobalTheme('dark');
    }
    if (definedTheme === 'dark') {
      setTheme('light');
      setGlobalTheme('light');
    }
  }, [setTheme, setGlobalTheme, theme]);

  const handleLogout = () => {
    clearCredentials();
    dispatch(commonActions.clearAll());
    navigate('/login');
  };

  const handleChangeRoute = (route: string) => {
    navigate(`/${route}`);
  };

  const mountThemeIcon = theme.title === 'light' ? <IconMoon size={32} /> : <IconSun size={32} />;

  return (
    <Styles.Header>
      <Styles.NavbarWrapper>
        <Styles.Logo src={appLogo} alt="Marvel logo" />
        {!isLoginPage && (
          <Styles.ButtonsWrapper>
            <NavbarButton onClick={() => handleChangeRoute('characters')} label="CHARACTERS" disabled={location.pathname.includes('characters')} />
            <NavbarButton onClick={() => handleChangeRoute('comics')} label="COMICS" disabled={location.pathname.includes('comics')} />
            <NavbarButton onClick={() => handleChangeRoute('authors')} label="AUTHORS" disabled={location.pathname.includes('authors')} />
          </Styles.ButtonsWrapper>
        )}
        <Styles.RightButtons>
          <NavbarButton onClick={handleSetTheme} icon={mountThemeIcon} title="Set global theme" />
          {!isLoginPage && <NavbarButton onClick={handleLogout} icon={<IconLogout />} title="Disconnect credentials" />}
        </Styles.RightButtons>
      </Styles.NavbarWrapper>
    </Styles.Header>
  );
};

export default Header;
