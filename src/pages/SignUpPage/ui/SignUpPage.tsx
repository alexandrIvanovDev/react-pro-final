import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SignUpForm } from '@/features/SignUpForm';
import { SignUpFormValues } from '@/features/SignUpForm/model/types';
import { useSignUpMutation } from '@/shared/store/api/authApi';
import { WithProtection } from '@/shared/store/HOCs/WithProtection';
import { userActions } from '@/shared/store/slices/user';
import { getMessageFromError } from '@/shared/utils';

export const SignUpPage = WithProtection(() => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [signUpRequestFn] = useSignUpMutation();

	const submitHandler: SubmitHandler<SignUpFormValues> = async (values) => {
		try {
			const response = await signUpRequestFn(values).unwrap();

			dispatch(userActions.setUser(response.user));
			dispatch(
				userActions.setAccessToken({ accessToken: response.accessToken })
			);

			toast.success('Вы успешно зарегистрированы!');
			navigate('/');
		} catch (error) {
			console.log({ error });
			toast.error(
				getMessageFromError(
					error,
					'Не известная ошибка при регистрации пользователя'
				)
			);
		}
	};

	return <SignUpForm onSubmit={submitHandler} />;
});
