import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/app';
import { CartPage } from '@/pages/CartPage';
import { FavoritesPage } from '@/pages/FavoritesPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProductPage } from '@/pages/ProductPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SignInPage } from '@/pages/SignInPage';
import { SignUpPage } from '@/pages/SignUpPage';

import { WithProtection } from '../WithProtection';

export enum AppRoutes {
	HOME = 'home',
	FAVORITES = 'favorites',
	PRODUCTS = 'products',
	PROFILE = 'profile',
	CART = 'cart',
	SIGNUP = 'signup',
	SIGNIN = 'signin',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, `/${string}` | '*'> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.FAVORITES]: '/favorites',
	[AppRoutes.PRODUCTS]: '/products/:productId',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.CART]: '/cart',
	[AppRoutes.SIGNUP]: '/signup',
	[AppRoutes.SIGNIN]: '/signin',
	[AppRoutes.NOT_FOUND]: '*',
};

const ProtectedHomePage = WithProtection(HomePage);
const ProtectedFavoritesPage = WithProtection(FavoritesPage);
const ProtectedProductPage = WithProtection(ProductPage);
const ProtectedProfilePage = WithProtection(ProfilePage);
const ProtectedCartPage = WithProtection(CartPage);
const ProtectedSignUpPage = WithProtection(SignUpPage);
const ProtectedSignInPage = WithProtection(SignInPage);

export const router = createBrowserRouter([
	{
		path: RoutePath.home,
		element: <App />,
		children: [
			{
				index: true,
				element: <ProtectedHomePage />,
			},
			{
				path: RoutePath.favorites,
				element: <ProtectedFavoritesPage />,
			},
			{
				path: RoutePath.products,
				element: <ProtectedProductPage />,
			},
			{
				path: RoutePath.profile,
				element: <ProtectedProfilePage />,
			},
			{
				path: RoutePath.cart,
				element: <ProtectedCartPage />,
			},
			{
				path: RoutePath.signup,
				element: <ProtectedSignUpPage />,
			},
			{
				path: RoutePath.signin,
				element: <ProtectedSignInPage />,
			},

			// last route
			{
				path: RoutePath.not_found,
				element: <NotFoundPage />,
			},
		],
	},
]);
