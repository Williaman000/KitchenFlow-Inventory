import type { Preview } from '@storybook/react-vite';
import '../src/i18n';

const preview: Preview = {
	parameters: {
		layout: 'padded',
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			test: 'todo',
		},
		options: {
			storySort: {
				order: ['Pages', 'Components'],
			},
		},
	},
};

export default preview;
