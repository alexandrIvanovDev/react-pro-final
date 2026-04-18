import { CardList } from '@/entities/card';
import { useProducts } from '@/entities/product';
import { WithQuery } from '@/shared/lib';
import { ButtonBack } from '@/shared/ui';

const CardListWithQuery = WithQuery(CardList);

export const FavoritesPage = () => {
	const { isLoading, isError, products, error } = useProducts();

	return (
		<>
			<br />
			<ButtonBack />
			<CardListWithQuery
				title='Избранные'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
		</>
	);
};
