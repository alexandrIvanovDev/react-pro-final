import { useRef } from 'react';

import { CardList } from '@/widgets/Card';
import { Sort } from '@/features/sort';
import { useLoadMore, useProducts } from '@/entities/product';
import { userSelectors } from '@/entities/user';
import { WithQuery } from '@/shared/lib';
import { useAppSelector } from '@/shared/store';
import { LoadMore } from '@/shared/ui';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = () => {
	const user = useAppSelector(userSelectors.getUser);
	const { products, isLoading, isError, error } = useProducts(user?.id ?? '');

	const ref = useRef<HTMLDivElement>(null);

	const { isEndOfList, isFetching } = useLoadMore({
		ref,
		userId: user?.id ?? '',
	});

	return (
		<>
			<Sort />
			<CardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>

			<LoadMore
				ref={ref as React.Ref<HTMLDivElement>}
				isFetching={isFetching}
				isEndOfList={isEndOfList}
			/>
		</>
	);
};
