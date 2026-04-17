import { useRef } from 'react';

import { CardList } from '@/widgets/CardList';
import { useLoadMore } from '@/shared/hooks/useLoadMore';
import { WithQuery } from '@/shared/store/HOCs/WithQuery';
import { useProducts } from '@/shared/store/hooks/useProducts';
import { LoadMore } from '@/shared/ui';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = () => {
	const { products, isLoading, isError, error } = useProducts();

	const ref = useRef<HTMLDivElement>(null);
	const { isEndOfList, isFetching } = useLoadMore({ ref });

	return (
		<>
			<CardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore ref={ref} isFetching={isFetching} isEndOfList={isEndOfList} />
		</>
	);
};
