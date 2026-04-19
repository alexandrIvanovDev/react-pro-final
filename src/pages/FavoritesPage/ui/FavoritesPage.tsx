import { CardList } from '@/widgets/Card';
import { useProducts } from '@/entities/product';
import { userSelectors } from '@/entities/user';
import { WithQuery } from '@/shared/lib';
import { useAppSelector } from '@/shared/store';
import { ButtonBack } from '@/shared/ui';

const CardListWithQuery = WithQuery(CardList);

export const FavoritesPage = () => {
	const user = useAppSelector(userSelectors.getUser);

	const { isLoading, isError, products, error } = useProducts(user?.id ?? '');

	return (
		<>
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
