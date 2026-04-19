import classNames from 'classnames';
import { useState, ChangeEvent, useActionState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Rating } from '@/shared/ui';

import s from './ReviewForm.module.css';

type FormState = {
	success: boolean;
	error: string | null;
	message: string;
};

async function submitReview(
	prevState: FormState,
	formData: FormData
): Promise<FormState> {
	const text = formData.get('text') as string;
	const rating = Number(formData.get('rating'));

	await new Promise((resolve) => setTimeout(resolve, 2000));

	if (!text.trim()) {
		return { success: false, error: 'Введите текст отзыва', message: '' };
	}

	if (rating === 0) {
		return { success: false, error: 'Выберите оценку', message: '' };
	}

	console.log('Отправка:', { reviewText: text, rating });

	toast.success('Отзыв успешно отправлен!');
	return { success: true, error: null, message: '' };
}

export const ReviewForm = () => {
	const [reviewText, setReviewText] = useState('');
	const [rating, setRating] = useState(0);

	const [state, formAction, isPending] = useActionState(submitReview, {
		success: false,
		error: null,
		message: '',
	});

	useEffect(() => {
		if (state.success) {
			setReviewText('');
			setRating(0);
		}
	}, [state]);

	return (
		<form className={s.form} action={formAction}>
			<Rating isEdit rating={rating} onChange={setRating} />

			<input type='hidden' name='rating' value={rating} />

			<textarea
				className={classNames(s['input'], s['textarea'])}
				name='text'
				id='text'
				placeholder='Напишите текст отзыва'
				value={reviewText}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
					setReviewText(e.target.value)
				}
			/>

			{state.error && <span className={s.error}>{state.error}</span>}

			<button
				type='submit'
				disabled={isPending}
				className={classNames(s['form__btn'], s['pramary'])}>
				{isPending ? 'Отправка...' : 'Отправить отзыв'}
			</button>
		</form>
	);
};
