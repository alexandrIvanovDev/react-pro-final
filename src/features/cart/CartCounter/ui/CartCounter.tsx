import classNames from 'classnames';

import { useCartCount } from '@/shared/hooks/useCartCount';
import s from './CartCounter.module.css';

type Props = {
	id: string;
};

export const CartCounter = ({ id }: Props) => {
	const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
		useCartCount(id);

	return (
		<div className={classNames(s['button-count'])}>
			<button
				onClick={handleDecrement}
				className={classNames(s['button-count__minus'])}>
				-
			</button>
			<input
				onChange={handleSetCount}
				type='number'
				className={classNames(s['button-count__num'])}
				value={count}
			/>
			<button
				onClick={handleIncrement}
				className={classNames(s['button-count__plus'])}
				disabled={count >= stock}>
				+
			</button>
		</div>
	);
};
