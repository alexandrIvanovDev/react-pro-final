import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Sort } from '@/features/sort';

import './styles/normalize.css';
import './styles/styles.css';

export const App = () => {
	return (
		<>
			<Header />
			{/* feature or widget */}
			<Sort />
			<Outlet />
			<Footer />

			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				pauseOnHover
				theme='colored'
			/>
		</>
	);
};
