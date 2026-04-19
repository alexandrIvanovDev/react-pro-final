import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { useToggleLike } from '@/features/product';
import { CartCounter, cartSelectors, useAddToCart } from '@/entities/cart';

import { useAppSelector } from '@/shared/store';
import { LikeButton, Price } from '@/shared/ui';
import s from './Card.module.css';

type CardProps = {
	product: Product;
};

export const Card = ({ product }: CardProps) => {
	const { discount, price, name, tags, id, images } = product;

	const cartProducts = useAppSelector(cartSelectors.getCartProducts);
	const isProductInCart = cartProducts.some((p) => p.id === id);
	const { addProductToCart } = useAddToCart();

	const { toggleLike, isLike } = useToggleLike({ product });

	if (!id) return null;

	return (
		<article className={s['card']}>
			<div
				className={classNames(
					s['card__sticky'],
					s['card__sticky_type_top-left']
				)}>
				<span className={s['card__discount']}>{discount}</span>
				{tags.length > 0 &&
					tags?.map((t) => (
						<span key={t} className={classNames(s['tag'], s['tag_type_new'])}>
							{t}
						</span>
					))}
			</div>
			<div
				className={classNames(
					s['card__sticky'],
					s['card__sticky_type_top-right']
				)}>
				<LikeButton isLike={!!isLike} toggleLike={toggleLike} />
			</div>
			<Link className={s['card__link']} to={`/products/${id}`}>
				<img
					src={images}
					alt={name}
					className={s['card__image']}
					loading='lazy'
				/>
				<div className={s['card__desc']}>
					<Price price={price} discountPrice={discount} />
					<h3 className={s['card__name']}>{name}</h3>
				</div>
			</Link>
			{isProductInCart ? (
				<CartCounter id={id ?? ''} />
			) : (
				<button
					onClick={() => addProductToCart({ ...product, count: 1 })}
					disabled={isProductInCart}
					className={classNames(
						s['card__cart'],
						s['card__btn'],
						s['card__btn_type_primary']
					)}>
					В корзину
				</button>
			)}
		</article>
	);
};
