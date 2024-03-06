import React, { createContext, useState } from "react";
import { ThemeModeContextProps, ThemeModeProviderProps } from "./ThemeModeProvider.types";
import light from "styles/themes/light";
import dark from "styles/themes/dark";
import useCredentials from "hooks/useCredentials/useCredentials";

const ThemeModeContextDefault = {
	theme: light,
	setTheme: (theme: 'light' | 'dark') => theme,
};

export const ThemeModeContext = createContext<ThemeModeContextProps>(ThemeModeContextDefault);

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
	const { globalTheme } = useCredentials();

	const defaultTheme = () => {
		const browserInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (globalTheme) {
			return globalTheme === 'dark' ? dark : light;
		}
		if (browserInDarkMode) {
			return dark;
		}
		return light;
	};

	const [theme, setTheme] = useState(defaultTheme());

	const handleSetTheme = (themeName: string) => {
    themeName === 'light' ? setTheme(light) : setTheme(dark);
	};

	const contextValue = {
		theme: theme,
		setTheme: handleSetTheme,
	};

	return (
		<ThemeModeContext.Provider value={contextValue}>
			{children}
		</ThemeModeContext.Provider>
	);
};
