import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/store';
import { cartActions } from './cart';

export const useAddToCart = () => {
	const dispatch = useAppDispatch();

	const addProductToCart = useCallback(
		(cartProduct: CartProduct) => {
			dispatch(cartActions.addCartProduct(cartProduct));
		},
		[dispatch]
	);

	return { addProductToCart };
};
