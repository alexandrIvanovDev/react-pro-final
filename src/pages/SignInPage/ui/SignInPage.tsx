import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthFormValues, SignInForm, useSignInMutation } from '@/features/auth';
import { userActions } from '@/entities/user';
import { getMessageFromError } from '@/shared/utils';

export const SignInPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const [signInRequestFn] = useSignInMutation();

	const submitHandler: SubmitHandler<AuthFormValues> = async (values) => {
		try {
			const response = await signInRequestFn(values).unwrap();

			dispatch(userActions.setUser(response.user));
			dispatch(
				userActions.setAccessToken({ accessToken: response.accessToken })
			);

			toast.success('Вы успешно авторизованы!');

			if (location.state?.from) {
				return navigate(location.state.from);
			}

			navigate('/');
		} catch (error) {
			toast.error(
				getMessageFromError(
					error,
					'Неизвестная ошибка при авторизации пользователя'
				)
			);
		}
	};

	return <SignInForm onSubmit={submitHandler} />;
};
