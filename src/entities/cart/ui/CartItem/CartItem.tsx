import classNames from 'classnames';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import { CartCounter } from '@/features/cart';
import { ReactComponent as TrashIcon } from '@/shared/assets/icons/trash.svg';

import s from './CartItem.module.css';

type CartItemProps = {
	product: CartProduct;
	deleteProductFromCart: (id: string) => void;
};

export const CartItem = memo(
	({ product, deleteProductFromCart }: CartItemProps) => {
		const { id, name, images, price, discount } = product;

		const handleDelete = () => {
			deleteProductFromCart(id);
		};

		return (
			<div className={classNames(s['cart-item'])}>
				<div className={classNames(s['cart-item__desc'])}>
					<img
						src={images}
						alt={name}
						className={classNames(s['cart-item__image'])}
					/>

					<div
						style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
						<div style={{ display: 'flex', gap: '20px', flexGrow: 1 }}>
							<Link
								className={classNames(s['cart-item__title'])}
								to={`/products/${id}`}>
								<h2>{name}</h2>
							</Link>

							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<CartCounter id={id} />

								<div className={classNames(s['cart-item__price'])}>
									<div className={classNames(s['price-big'], s['price-wrap'])}>
										<span
											className={classNames(s['price_old'], s['price_right'])}>
											{price}
										</span>
										<span
											className={classNames(s['price_discount'], s['price'])}>
											{price - discount}
										</span>
									</div>
								</div>
							</div>
							<button className={classNames(s['cart-item__bnt-trash'])}>
								<TrashIcon onClick={handleDelete} />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
);
