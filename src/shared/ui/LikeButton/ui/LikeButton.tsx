import classNames from 'classnames';

import { ReactComponent as LikeSvg } from './../../../assets/icons/like.svg';
import s from './LikeButton.module.css';

type TLikeButtonProps = {
	isLike: boolean;
	toggleLike: () => void;
};

export const LikeButton = ({ isLike, toggleLike }: TLikeButtonProps) => (
	<button
		className={classNames(s['card__favorite'], {
			[s['card__favorite_is-active']]: isLike,
		})}
		onClick={toggleLike}>
		<LikeSvg />
	</button>
);
