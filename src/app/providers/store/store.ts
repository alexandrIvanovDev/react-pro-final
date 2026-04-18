import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/features/auth';
import { productsApi } from '@/entities/product';
import { AppApi } from '@/shared/api';

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
