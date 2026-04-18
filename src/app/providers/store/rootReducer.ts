import { combineReducers } from 'redux';

import { authApi } from '@/features/auth';
import { cartSlice } from '@/entities/cart';
import { productsApi, productsSlice } from '@/entities/product';
import { userSlice } from '@/entities/user';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
});
