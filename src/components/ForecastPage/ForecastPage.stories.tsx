import type { Meta, StoryObj } from '@storybook/react-vite';
import ForecastPage from './ForecastPage';
import { inventoryForecast } from '../storybook.mocks';

const meta = {
	title: 'Pages/Inventory/ForecastPage',
	component: ForecastPage,
	args: {
		forecast: inventoryForecast,
		forecastDays: 7,
		isLoading: false,
		error: null,
		onLoadForecast: () => {},
		onCreatePO: async () => {},
	},
} satisfies Meta<typeof ForecastPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
