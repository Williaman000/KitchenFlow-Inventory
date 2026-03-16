import type { Meta, StoryObj } from '@storybook/react-vite';
import BulkImportModal from './BulkImportModal';

const meta = {
	title: 'Components/Inventory/BulkImportModal',
	component: BulkImportModal,
	args: {
		onClose: () => {},
		onImport: async () => ({ imported: 0, skipped: 0, errors: [] }),
		onComplete: () => {},
	},
} satisfies Meta<typeof BulkImportModal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};