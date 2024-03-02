import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeModeProvider } from 'providers/ThemeModeProvider/ThemeModeProvider';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			// {
			// 	path: '/',
			// 	element: <Home />
			// }
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
