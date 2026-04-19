import { useRef } from 'react';

import { CardList } from '@/widgets/Card';
import { Sort } from '@/features/sort';
import { useLoadMore, useProducts } from '@/entities/product';
import { WithQuery } from '@/shared/lib';
import { LoadMore } from '@/shared/ui';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = () => {
	const { products, isLoading, isError, error } = useProducts();

	const ref = useRef<React.Ref<any>>(null);

	const { isEndOfList, isFetching } = useLoadMore({ ref });

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
