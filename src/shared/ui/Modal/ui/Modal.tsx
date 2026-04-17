import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title: string;
};

export const Modal = ({ isOpen, onClose, children, title }: Props) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, onClose]);

	useEffect(() => {
		if (!isOpen) return;

		const triggerElement = document.activeElement as HTMLElement | null;

		const openTimer = setTimeout(() => {
			closeButtonRef.current?.focus();
		}, 0);

		return () => {
			clearTimeout(openTimer);

			requestAnimationFrame(() => {
				if (triggerElement && document.body.contains(triggerElement)) {
					triggerElement.focus();
				}
			});
		};
	}, [isOpen]);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) {
			onClose();
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	const root = document.getElementById('modal-root');

	if (!isOpen || !root) return null;

	return createPortal(
		<div
			ref={overlayRef}
			className={styles.overlay}
			onClick={handleOverlayClick}
			role='presentation'>
			<div className={styles.modal} role='dialog'>
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>

					<button
						ref={closeButtonRef}
						className={styles.closeButton}
						onClick={onClose}>
						✕
					</button>
				</div>
				<div className={styles.body}>{children}</div>
			</div>
		</div>,
		root
	);
};
