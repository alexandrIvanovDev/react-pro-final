export {
	productsApi,
	useDeleteLikeProductMutation,
	useGetProductQuery,
	useGetProductsQuery,
	useSetLikeProductMutation,
} from './api/productsApi';

export {
	productsActions,
	productsSelectors,
	productsSlice,
} from './model/products';

export { useLoadMore } from './model/useLoadMore';
export { useProducts } from './model/useProducts';
