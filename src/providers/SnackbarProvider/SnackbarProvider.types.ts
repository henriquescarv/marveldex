import { ReactNode } from 'react';

export type SnackbarContextProps = {
  children: ReactNode,
};

export type StatusType = 'success' | 'problem';

export type DisplaySnackbarProps = {
  message: string,
  status: 'success' | 'problem',
  time?: number,
};

export type SnackbarProviderProps = {
  showSnackbar: boolean,
  snackbarMessage: string,
  snackbarStatus: 'success' | 'problem',
  setDisplaySnackbar: ({ message, status, time }: DisplaySnackbarProps) => void,
};
