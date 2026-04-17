import { Alert, CircularProgress, Stack } from '@mui/material';
import { RefObject } from 'react';

type Props = {
	ref: React.Ref<HTMLDivElement>;
	isFetching: boolean;
	isEndOfList: boolean;
};

export const LoadMore = ({ ref, isEndOfList, isFetching }: Props) => (
	<Stack
		ref={ref}
		direction='row'
		justifyContent='center'
		alignItems='center'
		sx={{ my: 5 }}>
		{isFetching && <CircularProgress />}
		{isEndOfList && <Alert severity='success'>End of list!</Alert>}
	</Stack>
);
