import classNames from 'classnames';

import { CartList } from '@/widgets/CartList';
import { CartAmount } from '@/features/cart';
import { cartSelectors } from '@/shared/store/slices/cart';
import { useAppSelector } from '@/shared/store/utils';

import s from './CartPage.module.css';

export const CartPage = () => {
	const products = useAppSelector(cartSelectors.getCartProducts);

	if (!products.length) {
		return <h1 className='header-title'>Товаров нет корзине</h1>;
	}

	return (
		<div className={classNames(s['content'], s['container'])}>
			<div className={classNames(s['content-cart'])}>
				<div className={classNames(s['cart-title'])}>
					<span>{products.length}</span> в корзине
				</div>
				<CartList products={products} />
				<CartAmount products={products} />
			</div>
		</div>
	);
};
