import classNames from 'classnames';

import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { cartActions, CartItem } from '@/entities/cart';

import s from './CartList.module.css';

type CartListProps = {
	products: CartProduct[];
};

export const CartList = memo(({ products }: CartListProps) => {
	const dispatch = useDispatch();

	const deleteProductFromCart = useCallback(
		(id: string) => {
			dispatch(cartActions.deleteCartProduct(id));
		},
		[dispatch]
	);

	return (
		<div className={classNames(s['cart-list'])}>
			{products.map((p) => (
				<CartItem
					product={p}
					key={p.id}
					deleteProductFromCart={deleteProductFromCart}
				/>
			))}
		</div>
	);
});
