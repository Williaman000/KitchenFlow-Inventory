import type { DashboardStats } from '../hooks/useDashboard';
import type {
	ChatMessage,
	ForecastData,
	Material,
	ProductMaterialMapping,
	PurchaseOrder,
	SalesTrendData,
	SalesUploadRecord,
} from '../types';

export const inventoryDashboardStats: DashboardStats = {
	totalMaterials: 128,
	lowStockCount: 7,
	todayRevenue: 0,
	pendingOrders: 5,
	insights: [
		'주말 치킨무 재고가 빠르게 감소 중입니다.',
		'양념 소스 발주 시점을 하루 앞당기는 것이 좋습니다.',
	],
};

export const inventoryMaterials: Material[] = [
	{
		id: 1,
		name: '닭고기',
		unit: 'kg',
		category: '육류',
		currentStock: 32,
		minimumStock: 20,
		unitPrice: 7000,
		expiryDate: null,
		leadTimeDays: 1,
		orderDeadlineHour: 2,
		deliveryDayOfWeek: null,
		isActive: true,
		createdAt: '2026-03-01T09:00:00',
		updatedAt: '2026-03-15T09:00:00',
	},
	{
		id: 2,
		name: '양념소스',
		unit: 'L',
		category: '소스',
		currentStock: 6,
		minimumStock: 8,
		unitPrice: 5000,
		expiryDate: '2026-04-15',
		leadTimeDays: 1,
		orderDeadlineHour: 18,
		deliveryDayOfWeek: null,
		isActive: true,
		createdAt: '2026-03-01T09:00:00',
		updatedAt: '2026-03-15T09:00:00',
	},
];

export const inventoryPurchaseOrders: PurchaseOrder[] = [
	{
		id: 101,
		status: 'ORDERED',
		orderedAt: '2026-03-15T11:00:00',
		receivedAt: null,
		notes: '주말 대비 선발주',
		totalAmount: 240000,
		itemCount: 2,
		items: [
			{ id: 1, purchaseOrderId: 101, materialId: 1, quantity: 20, unitPrice: 8000, subtotal: 160000, materialName: '닭고기', materialUnit: 'kg' },
			{ id: 2, purchaseOrderId: 101, materialId: 2, quantity: 10, unitPrice: 8000, subtotal: 80000, materialName: '양념소스', materialUnit: 'L' },
		],
		createdAt: '2026-03-15T10:30:00',
		updatedAt: '2026-03-15T11:00:00',
	},
];

export const inventoryMappings: ProductMaterialMapping[] = [
	{ id: 1, productId: 100, materialId: 1, quantityPerUnit: 1.2, productName: '양념치킨', materialName: '닭고기', materialUnit: 'kg' },
	{ id: 2, productId: 100, materialId: 2, quantityPerUnit: 0.3, productName: '양념치킨', materialName: '양념소스', materialUnit: 'L' },
];

export const inventoryProducts = [
	{ id: 100, name: '양념치킨', categoryName: '치킨' },
	{ id: 101, name: '후라이드치킨', categoryName: '치킨' },
];

export const inventoryForecast: ForecastData = {
	forecastDays: 7,
	generatedAt: '2026-03-16T10:00:00',
	totalMaterials: 2,
	needsOrdering: 1,
	recommendations: [
		{
			materialId: 2,
			materialName: '양념소스',
			unit: 'L',
			currentStock: 6,
			minimumStock: 8,
			expectedConsumption: 9,
			safetyStock: 4,
			recommendedOrder: 7,
			confidence: 'high',
			breakdown: { recentOrders: 42 },
			leadTimeDays: 2,
			orderDeadlineHour: 2,
			deliveryDayOfWeek: 1,
			isOrderUrgent: true,
			orderDeadlineDisplay: '내일 02:00까지 발주',
		},
	],
};

export const inventoryChatMessages: ChatMessage[] = [
	{
		id: '1',
		role: 'assistant',
		content: '이번 주 부족 가능성이 높은 품목입니다.',
		data: {
			headers: ['품목', '권장 수량'],
			rows: [['양념소스', 7], ['치킨무', 5]],
		},
		dataType: 'table',
		timestamp: new Date('2026-03-16T10:00:00'),
	},
];

export const inventoryTrendData: SalesTrendData = {
	period: 'week',
	startDate: '2026-03-10',
	endDate: '2026-03-16',
	totalRevenue: 6850000,
	totalQuantity: 312,
	totalOrders: 240,
	totalChickenCount: 94.0,
	dailyBreakdown: [
		{ date: '03-10', totalQuantity: 38, totalRevenue: 920000, orderCount: 31, chickenCount: 28.5 },
		{ date: '03-11', totalQuantity: 41, totalRevenue: 980000, orderCount: 34, chickenCount: 31.0 },
		{ date: '03-12', totalQuantity: 45, totalRevenue: 1100000, orderCount: 37, chickenCount: 34.5 },
	],
	productRanking: [
		{ productId: 100, productName: '양념치킨', totalQuantity: 84, totalRevenue: 1848000 },
		{ productId: 101, productName: '후라이드치킨', totalQuantity: 73, totalRevenue: 1387000 },
	],
	dayOfWeekPattern: [
		{ day: 'MON', avgQuantity: 38, avgRevenue: 920000 },
		{ day: 'TUE', avgQuantity: 41, avgRevenue: 980000 },
		{ day: 'WED', avgQuantity: 45, avgRevenue: 1100000 },
	],
};

export const inventoryUploads: SalesUploadRecord[] = [
	{
		id: 1,
		fileName: 'sales-2026-03-15.csv',
		totalRows: 120,
		importedRows: 118,
		createdAt: '2026-03-15T23:00:00',
	},
];
