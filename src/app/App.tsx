import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import './styles/normalize.css';
import './styles/styles.css';

export const App = () => {
	return (
		<>
			<Header />
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
