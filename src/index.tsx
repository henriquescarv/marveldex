import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeModeProvider } from 'providers/ThemeModeProvider/ThemeModeProvider';
import { HeroHandler } from 'pages/HeroHandler';
import { ComicHandler } from 'pages/ComicHandler';
import { AuthorHandler } from 'pages/AuthorHandler';
import { LoginHandler } from 'pages/LoginHandler';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/login',
				element: <LoginHandler />
			},
			{
				path: '/characters',
				element: <HeroHandler />
			},
			{
				path: '/comics',
				element: <ComicHandler />
			},
			{
				path: '/authors',
				element: <AuthorHandler />
			}
		],
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<ThemeModeProvider>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ThemeModeProvider>
  </React.StrictMode>
);
