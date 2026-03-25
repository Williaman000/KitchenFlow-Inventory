import { useState, useEffect, useCallback, type FC } from 'react';
import styles from './ScrollButtons.module.scss';

function getScrollContainer(): HTMLElement | null {
	return document.getElementById('main-scroll')
		|| document.querySelector('[class*="menuContent"]')
		|| document.querySelector('[class*="mobileMain"]')
		|| null;
}

const ScrollButtons: FC = () => {
	const [showTop, setShowTop] = useState(false);
	const [showBottom, setShowBottom] = useState(true);

	const updateVisibility = useCallback(() => {
		const el = getScrollContainer();
		if (!el) {
			// fallback to window
			setShowTop(window.scrollY > 100);
			const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
			setShowBottom(!nearBottom);
			return;
		}
		setShowTop(el.scrollTop > 100);
		const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 100;
		setShowBottom(!nearBottom);
	}, []);

	useEffect(() => {
		const el = getScrollContainer();
		const target = el || window;
		target.addEventListener('scroll', updateVisibility);
		updateVisibility();

		// Re-check when tab changes (container might change)
		const observer = new MutationObserver(() => {
			setTimeout(updateVisibility, 100);
		});
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			target.removeEventListener('scroll', updateVisibility);
			observer.disconnect();
		};
	}, [updateVisibility]);

	const scrollToTop = () => {
		const el = getScrollContainer();
		if (el) {
			el.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const scrollToBottom = () => {
		const el = getScrollContainer();
		if (el) {
			el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
		}
	};

	return (
		<div className={styles.container}>
			{showTop && (
				<button className={styles.btnTop} onClick={scrollToTop} title="Top">▲</button>
			)}
			{showBottom && (
				<button className={styles.btnBottom} onClick={scrollToBottom} title="Bottom">▼</button>
			)}
		</div>
	);
};

export default ScrollButtons;
