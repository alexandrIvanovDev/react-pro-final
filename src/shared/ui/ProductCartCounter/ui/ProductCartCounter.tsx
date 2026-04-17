import classNames from 'classnames';
import { ChangeEvent } from 'react';
import s from './ProductCartCounter.module.css';

type ProductCartCounterProps = {
	product: Product;
	addProductToCart: (product: CartProduct) => void;
	count: number;
	handleCount: (value: ChangeEvent<HTMLInputElement>) => void;
	handleCountMinus: () => void;
	handleCountPlus: () => void;
};

export const ProductCartCounter = ({
	product,
	count,
	addProductToCart,
	handleCount,
	handleCountMinus,
	handleCountPlus,
}: ProductCartCounterProps) => (
	<div className={classNames('product__btn-wrap')}>
		<div className={s['button-count']}>
			<button className={s['button-count__minus']} onClick={handleCountMinus}>
				-
			</button>
			<input
				type='number'
				className={s['button-count__num']}
				value={count}
				onChange={handleCount}
			/>
			<button className={s['button-count__plus']} onClick={handleCountPlus}>
				+
			</button>
		</div>
		<button
			onClick={() => addProductToCart({ ...product, count })}
			className={classNames(s['button'], s['button_type_primary'])}>
			В корзину
		</button>
	</div>
);
