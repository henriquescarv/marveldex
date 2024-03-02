import React, { useCallback, useContext } from "react";
import * as Styles from './Header.styles'
import appLogo from 'assets/images/app_logo.png';
import NavbarButton from "./components/NavbarButton/NavbarButton";
import { IconMoon } from "ui/icons/IconMoon";
import { ThemeModeContext } from "providers/ThemeModeProvider/ThemeModeProvider";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeModeContext);

  const handleSetTheme = useCallback(() => {
    theme.title === 'light' ? setTheme('dark') : setTheme('light')
  }, [setTheme, theme]);

  return (
    <Styles.Header>
      <Styles.NavbarWrapper>
        <Styles.Logo src={appLogo} alt="Marvel logo" />
        <Styles.ButtonsWrapper>
          <NavbarButton onClick={() => {}} label="CHARACTERS" />
          <NavbarButton onClick={() => {}} label="COMICS" />
          <NavbarButton onClick={() => {}} label="AUTHORS" />
        </Styles.ButtonsWrapper>
        <NavbarButton onClick={handleSetTheme} icon={<IconMoon size={32} />} />
      </Styles.NavbarWrapper>
    </Styles.Header>
  )
};

export default Header;
