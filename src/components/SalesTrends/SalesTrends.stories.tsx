import type { Meta, StoryObj } from '@storybook/react-vite';
import SalesTrends from './SalesTrends';
import { inventoryTrendData, inventoryUploads } from '../storybook.mocks';

const meta = {
	title: 'Pages/Inventory/SalesTrends',
	component: SalesTrends,
	args: {
		data: inventoryTrendData,
		period: 'week',
		isLoading: false,
		error: null,
		onPeriodChange: () => {},
		onRefresh: () => {},
		uploads: inventoryUploads,
		uploadsLoading: false,
		onDeleteUpload: () => {},
	},
} satisfies Meta<typeof SalesTrends>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
