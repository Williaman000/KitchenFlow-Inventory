import type { Meta, StoryObj } from '@storybook/react-vite';
import MappingManager from './MappingManager';
import { inventoryMappings, inventoryMaterials, inventoryProducts } from '../storybook.mocks';

const meta = {
	title: 'Pages/Inventory/MappingManager',
	component: MappingManager,
	args: {
		mappings: inventoryMappings,
		products: inventoryProducts,
		materials: inventoryMaterials,
		isLoading: false,
		error: null,
		onLoadMappings: () => {},
		onLoadProducts: () => {},
		onLoadMaterials: () => {},
		onCreate: async () => {},
		onUpdate: async () => {},
		onDelete: async () => {},
	},
} satisfies Meta<typeof MappingManager>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
