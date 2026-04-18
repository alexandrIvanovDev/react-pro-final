import { toast } from 'react-toastify';
import {
	useDeleteLikeProductMutation,
	useSetLikeProductMutation,
} from '@/entities/product';
import { userSelectors } from '@/entities/user';
import { useAppSelector } from '../store/utils';

type Props = {
	product: Product;
};

export const useToggleLike = ({ product }: Props) => {
	const accessToken = useAppSelector(userSelectors.getAccessToken);
	const user = useAppSelector(userSelectors.getUser);

	const [setLike] = useSetLikeProductMutation();
	const [deleteLike] = useDeleteLikeProductMutation();

	const isLike = product?.likes?.some((l) => l.userId === user?.id);

	const toggleLike = async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы');
			return;
		}
		let response;
		if (isLike) {
			response = await deleteLike({ id: `${product?.id}` });
		} else {
			response = await setLike({ id: `${product?.id}` });
		}

		if (response.error) {
			const error = response.error as IErrorResponse;
			toast.error(error.data.message);
		}
	};

	return { toggleLike, isLike };
};
