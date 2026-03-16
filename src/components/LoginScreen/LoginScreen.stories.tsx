import type { Meta, StoryObj } from '@storybook/react-vite';
import LoginScreen from './LoginScreen';

const meta = {
	title: 'Components/Inventory/LoginScreen',
	component: LoginScreen,
	args: {
		onLogin: async () => {},
	},
} satisfies Meta<typeof LoginScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
