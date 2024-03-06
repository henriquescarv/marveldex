import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeModeProvider } from "providers/ThemeModeProvider/ThemeModeProvider";
import { HeroHandler } from "pages/HeroHandler";
import { ComicHandler } from "pages/ComicHandler";
import { AuthorHandler } from "pages/AuthorHandler";
import { LoginHandler } from "pages/LoginHandler";
import { SnackbarProvider } from "providers/SnackbarProvider/SnackbarProvider";
import { DetailsHandler } from "pages/DetailsHandler";

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
				element: <HeroHandler />,
			},
			{
				path: 'characters/:itemId',
				element: <DetailsHandler />,
			},
			{
				path: '/comics',
				element: <ComicHandler />
			},
			{
				path: 'comics/:itemId',
				element: <DetailsHandler />,
			},
			{
				path: '/authors',
				element: <AuthorHandler />
			},
			{
				path: 'authors/:itemId',
				element: <DetailsHandler />,
			},
		],
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<ThemeModeProvider>
			<SnackbarProvider>
				<Provider store={store}>
					<RouterProvider router={router} />
				</Provider>
			</SnackbarProvider>
		</ThemeModeProvider>
  </React.StrictMode>
);
