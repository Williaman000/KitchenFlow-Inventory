import type { Meta, StoryObj } from '@storybook/react-vite';
import Dashboard from './Dashboard';
import { inventoryDashboardStats } from '../storybook.mocks';

const meta = {
	title: 'Pages/Inventory/Dashboard',
	component: Dashboard,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		stats: inventoryDashboardStats,
		isLoading: false,
		error: null,
		onLoad: () => {},
		onNavigate: () => {},
	},
} satisfies Meta<typeof Dashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
