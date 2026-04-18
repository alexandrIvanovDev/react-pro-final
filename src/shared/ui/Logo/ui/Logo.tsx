import { Link } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import s from './Logo.module.css';

export const Logo = () => (
	<Link to='/'>
		<LogoIcon className={s['logo__pic']} />
	</Link>
);
