import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/features/auth';
import AppApi from '@/shared/api/ApiServise';
import { productsApi } from '@/shared/store/api/productsApi';

import { rootReducer } from './rootReducer';

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
