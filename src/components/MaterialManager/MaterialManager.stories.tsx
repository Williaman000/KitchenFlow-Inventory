import type { Meta, StoryObj } from '@storybook/react-vite';
import MaterialManager from './MaterialManager';
import { inventoryMaterials } from '../storybook.mocks';

const meta = {
	title: 'Pages/Inventory/MaterialManager',
	component: MaterialManager,
	args: {
		materials: inventoryMaterials,
		allMaterials: inventoryMaterials,
		materialCategories: ['육류', '소스'],
		materialCategoryFilter: null,
		onCategoryFilterChange: () => {},
		lowStockCount: 1,
		isLoading: false,
		error: null,
		onLoad: () => {},
		onCreateMaterial: async () => {},
		onUpdateMaterial: async () => {},
		onDeleteMaterial: async () => {},
		onAdjustInventory: async () => {},
		onBulkImport: async () => ({ imported: 0, skipped: 0, errors: [] }),
	},
} satisfies Meta<typeof MaterialManager>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
