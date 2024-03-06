import React, { createContext, useState } from 'react';
import { DisplaySnackbarProps, SnackbarContextProps, SnackbarProviderProps, StatusType } from './SnackbarProvider.types';

const SnackbarContextDefault = {
	showSnackbar: false,
	snackbarMessage: '',
	snackbarStatus: 'success' as StatusType,
	setDisplaySnackbar: () => null,
};

export const SnackbarContext = createContext<SnackbarProviderProps>(SnackbarContextDefault);

export const SnackbarProvider = ({ children }: SnackbarContextProps) => {
	const [showSnackbar, setShowSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [snackbarStatus, setSnackbarStatus] = useState<StatusType>('success');

	const setDisplaySnackbar = ({ message, status, time = 8000 }: DisplaySnackbarProps) => {
		setSnackbarMessage(message);
		setSnackbarStatus(status);
		setShowSnackbar(true);

		setTimeout(() => {
			setShowSnackbar(false);
		}, time);
	};

	const contextValue = {
		showSnackbar,
		snackbarMessage,
		snackbarStatus,
		setDisplaySnackbar,
	};

	return (
		<SnackbarContext.Provider value={contextValue}>
			{children}
		</SnackbarContext.Provider>
	);
};
