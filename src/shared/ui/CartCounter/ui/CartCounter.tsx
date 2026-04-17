import classNames from 'classnames';
import { ChangeEvent } from 'react';

import s from './CartCounter.module.css';

type TCartCounter = {
	count: number;
	stock: number;
	handleSetCount: (e: ChangeEvent<HTMLInputElement>) => void;
	handleIncrement: () => void;
	handleDecrement: () => void;
};

//temp solution
export const CartCounter = ({
	count,
	stock,
	handleSetCount,
	handleIncrement,
	handleDecrement,
}: TCartCounter) => {
	return (
		<>
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
		</>
	);
};
