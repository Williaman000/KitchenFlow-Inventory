import { useState, useEffect, type FC } from 'react';
import styles from './ScrollButtons.module.scss';

const ScrollButtons: FC = () => {
	const [showTop, setShowTop] = useState(false);
	const [showBottom, setShowBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowTop(window.scrollY > 300);
			const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
			setShowBottom(!nearBottom);
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles.container}>
			{showTop && (
				<button className={styles.btn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Top">
					▲
				</button>
			)}
			{showBottom && (
				<button className={styles.btn} onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })} title="Bottom">
					▼
				</button>
			)}
		</div>
	);
};

export default ScrollButtons;
