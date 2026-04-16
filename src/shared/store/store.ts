import { configureStore } from '@reduxjs/toolkit';
import AppApi from '../api/ApiServise';
import { authApi } from '../../features/auth/model/authApi';
import { productsApi } from './api/productsApi';
import { rootReducer } from './reducers/rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: AppApi,
			},
		}).concat([authApi.middleware, productsApi.middleware]),
});
