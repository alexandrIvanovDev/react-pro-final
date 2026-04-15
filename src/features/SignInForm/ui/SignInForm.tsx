import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
	Avatar,
	Box,
	Container,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { Link as RouterLink } from 'react-router-dom';
import { SignInFormValues } from '../model/types';
import { signInFormSchema } from '../model/validator';

type Props = {
	onSubmit: (data: SignInFormValues) => void;
};

export const SignInForm = ({ onSubmit }: Props) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
	} = useForm<SignInFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(signInFormSchema),
	});

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign In
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					sx={{ my: 1 }}>
					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<TextField
								margin='normal'
								label='Email Address'
								type='email'
								fullWidth
								required
								autoComplete='email'
								error={!!errors.email?.message}
								helperText={errors.email?.message}
								{...field}
							/>
						)}
					/>
					<Controller
						name='password'
						control={control}
						render={({ field }) => (
							<TextField
								label='Password'
								type='password'
								error={!!errors.password?.message}
								helperText={errors.password?.message}
								margin='normal'
								fullWidth
								required
								{...field}
							/>
						)}
					/>

					<LoadingButton
						type='submit'
						disabled={isSubmitted && (!isValid || isSubmitting)}
						loading={isSubmitting}
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Sign IN
					</LoadingButton>
					<Box display='flex' justifyContent='center' flexGrow={1}>
						<Link component={RouterLink} to='/signup'>
							SIGN UP
						</Link>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};
