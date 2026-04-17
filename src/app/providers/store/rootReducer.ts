import { combineReducers } from 'redux';
import { authApi } from '@/features/auth';

import { cartSlice } from '@/entities/cart';
import { userSlice } from '@/entities/user';
import { productsApi } from '@/shared/store/api/productsApi';
import { productsSlice } from '@/shared/store/slices/products';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
});
