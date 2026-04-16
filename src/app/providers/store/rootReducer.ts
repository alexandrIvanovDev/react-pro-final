import { combineReducers } from 'redux';
import { authApi } from '@/features/auth';

import { productsApi } from '@/shared/store/api/productsApi';
import { cartSlice } from '@/shared/store/slices/cart';
import { productsSlice } from '@/shared/store/slices/products';
import { userSlice } from '@/shared/store/slices/user';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
});
