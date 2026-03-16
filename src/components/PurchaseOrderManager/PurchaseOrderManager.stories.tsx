import type { Meta, StoryObj } from '@storybook/react-vite';
import PurchaseOrderManager from './PurchaseOrderManager';
import { inventoryMaterials, inventoryPurchaseOrders } from '../storybook.mocks';

const meta = {
	title: 'Pages/Inventory/PurchaseOrderManager',
	component: PurchaseOrderManager,
	args: {
		purchaseOrders: inventoryPurchaseOrders,
		materials: inventoryMaterials,
		poStatusFilter: null,
		onStatusFilterChange: () => {},
		isLoading: false,
		error: null,
		onLoad: () => {},
		onLoadMaterials: () => {},
		onCreatePO: async () => {},
		onUpdatePOStatus: async () => {},
	},
} satisfies Meta<typeof PurchaseOrderManager>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
