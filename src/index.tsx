import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeModeProvider } from 'providers/ThemeModeProvider/ThemeModeProvider';
import { HeroHandler } from 'pages/HeroHandler';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/characters',
				element: <HeroHandler />
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
