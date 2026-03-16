import type { Meta, StoryObj } from '@storybook/react-vite';
import SalesUploadModal from './SalesUploadModal';

const meta = {
	title: 'Components/Inventory/SalesUploadModal',
	component: SalesUploadModal,
	args: {
		onClose: () => {},
		onComplete: () => {},
	},
} satisfies Meta<typeof SalesUploadModal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};