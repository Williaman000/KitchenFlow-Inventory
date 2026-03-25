import type { Meta, StoryObj } from '@storybook/react-vite';
import AIChatInterface from './AIChatInterface';
import { inventoryChatMessages } from '../storybook.mocks';

const meta = {
	title: 'Components/Inventory/AIChatInterface',
	component: AIChatInterface,
	args: {
		messages: inventoryChatMessages,
		isLoading: false,
		onSendMessage: () => {},
		onSendFile: () => {},
		onClear: () => {},
	},
} satisfies Meta<typeof AIChatInterface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
