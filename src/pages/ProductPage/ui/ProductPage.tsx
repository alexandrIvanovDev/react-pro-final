import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { ReviewList } from '@/widgets/ReviewList/ui/ReviewList';
import { CartCounter } from '@/features/cart';

import { ProductCartCounter } from '@/features/product/ProductCartCounter';
import qualitySVG from '@/shared/assets/icons/quality.svg';
import truckSVG from '@/shared/assets/icons/truck.svg';
import { useAddToCart } from '@/shared/hooks/useAddToCart';
import { useToggleLike } from '@/shared/hooks/useToggleLike';
import { useGetProductQuery } from '@/shared/store/api/productsApi';
import { cartSelectors } from '@/shared/store/slices/cart';
import { useAppSelector } from '@/shared/store/utils';
import { LikeButton, ButtonBack, Rating } from '@/shared/ui';
import s from './ProductPage.module.css';

export const ProductPage = () => {
	const location = useLocation();
	const { pathname } = location;
	const productId = pathname.split('/').at(-1) || '';

	const cartProducts = useAppSelector(cartSelectors.getCartProducts);

	const { data: product } = useGetProductQuery({ id: productId });

	const { addProductToCart } = useAddToCart();

	if (!product) return null;

	//TODO:
	// const { isLike, toggleLike } = useToggleLike({ product });

	const { id, name, images, description, price, discount } = product;

	const isProductInCart = !!cartProducts?.find((p) => p.id === id);

	return (
		<>
			<ButtonBack />
			<h1 className={classNames(s['header-title'])}>{name}</h1>
			<p className='acticul'>
				Артикул: <b>2388907</b>
			</p>
			<Rating rating={3} />
			<div className={classNames(s['product'])}>
				<div className={classNames(s['product__img-wrapper'])}>
					<img src={images} alt={description} />
				</div>
				<div className={classNames(s['product__desc'])}>
					<div className={classNames(s['price-big'], s['price-wrap'])}>
						<span className={classNames(s['price_old'], s['price_left'])}>
							{`${price} ₽`}
						</span>
						<span className={classNames(s['price_discount'], s['price'])}>
							{`${price - discount} ₽`}
						</span>
					</div>

					{isProductInCart ? (
						<CartCounter id={product?.id ?? ''} />
					) : (
						<ProductCartCounter
							product={product}
							addProductToCart={addProductToCart}
						/>
					)}

					{/* <LikeButton isLike={isLike} toggleLike={toggleLike} /> */}
					<div className={classNames(s['product__delivery'])}>
						<img src={truckSVG} alt='truck' />
						<div className={classNames(s['product__right'])}>
							<h3 className={classNames(s['product__name'])}>
								Доставка по всему Миру!
							</h3>
							<p className={classNames(s['product__text'])}>
								Доставка курьером — <span className='bold'> от 399 ₽</span>
							</p>
							<p className={classNames(s['product__text'])}>
								Доставка в пункт выдачи —
								<span className={classNames(s['product__bold'])}>
									{' '}
									от 199 ₽
								</span>
							</p>
						</div>
					</div>
					<div className={classNames(s['product__delivery'])}>
						<img src={qualitySVG} alt='quality' />
						<div className={classNames(s['product__right'])}>
							<h3 className={classNames(s['product__name'])}>
								Гарантия качества
							</h3>
							<p className={classNames(s['product__text'])}>
								Если Вам не понравилось качество нашей продукции, мы вернем
								деньги, либо сделаем все возможное, чтобы удовлетворить ваши
								нужды.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={classNames(s['product__box'])}>
				<h2 className={classNames(s['product__title'])}>Описание</h2>
				<p className={classNames(s['product__subtitle'])}>Описание demo</p>
				<h2 className={classNames(s['product__title'])}>Характеристики</h2>
				<div className={classNames(s['product__grid'])}>
					<div className={classNames(s['product__naming'])}>Вес</div>
					<div className={classNames(s['product__description'])}>
						1 шт 120-200 грамм
					</div>
					<div className={classNames(s['product__naming'])}>Цена</div>
					<div className={classNames(s['product__description'])}>
						490 ₽ за 100 грамм
					</div>
					<div className={classNames(s['product__naming'])}>Польза</div>
					<div className={classNames(s['product__description'])}>
						<p>
							Большое содержание аминокислот и микроэлементов оказывает
							положительное воздействие на общий обмен веществ собаки.
						</p>
						<p>Способствуют укреплению десен и жевательных мышц.</p>
						<p>
							Развивают зубочелюстной аппарат, отвлекают собаку во время смены
							зубов.
						</p>
						<p>
							Имеет цельную волокнистую структуру, при разжевывание получается
							эффект зубной щетки, лучше всего очищает клыки собак.
						</p>
						<p>Следует учесть высокую калорийность продукта.</p>
					</div>
				</div>
			</div>
			<ReviewList product={product} />
		</>
	);
};
