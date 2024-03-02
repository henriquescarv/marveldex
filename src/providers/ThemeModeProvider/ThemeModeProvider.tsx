import React, { createContext, useState } from 'react';
import { ThemeModeContextProps, ThemeModeProviderProps } from './ThemeModeProvider.types';
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

const ThemeModeContextDefault = {
	theme: light,
	setTheme: (theme: 'light' | 'dark') => theme,
};

export const ThemeModeContext = createContext<ThemeModeContextProps>(ThemeModeContextDefault);

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
	const [theme, setTheme] = useState(light);

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