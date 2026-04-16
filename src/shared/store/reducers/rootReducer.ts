import { combineReducers } from 'redux';
import { authApi } from '../../../features/auth/model/authApi';
import { productsApi } from '../api/productsApi';
import { cartSlice } from '../slices/cart';
import { productsSlice } from '../slices/products';
import { userSlice } from '../slices/user';

export const rootReducer = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[cartSlice.name]: cartSlice.reducer,
	[productsSlice.name]: productsSlice.reducer,
	[authApi.reducerPath]: authApi.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
});
