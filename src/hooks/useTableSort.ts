import { useState, useMemo, useCallback } from 'react';

export type SortDirection = 'asc' | 'desc' | null;

export interface SortState {
	key: string;
	direction: SortDirection;
}

export function useTableSort<T>(data: T[], defaultKey?: string, defaultDir: SortDirection = null) {
	const [sort, setSort] = useState<SortState>({ key: defaultKey ?? '', direction: defaultDir });

	const toggleSort = useCallback((key: string) => {
		setSort((prev) => {
			if (prev.key !== key) return { key, direction: 'asc' };
			if (prev.direction === 'asc') return { key, direction: 'desc' };
			if (prev.direction === 'desc') return { key: '', direction: null };
			return { key, direction: 'asc' };
		});
	}, []);

	const sorted = useMemo(() => {
		if (!sort.key || !sort.direction) return data;
		return [...data].sort((a, b) => {
			const aVal = (a as Record<string, unknown>)[sort.key];
			const bVal = (b as Record<string, unknown>)[sort.key];
			if (aVal == null && bVal == null) return 0;
			if (aVal == null) return 1;
			if (bVal == null) return -1;
			if (typeof aVal === 'number' && typeof bVal === 'number') {
				return sort.direction === 'asc' ? aVal - bVal : bVal - aVal;
			}
			const aStr = String(aVal).toLowerCase();
			const bStr = String(bVal).toLowerCase();
			const cmp = aStr.localeCompare(bStr, undefined, { numeric: true });
			return sort.direction === 'asc' ? cmp : -cmp;
		});
	}, [data, sort]);

	const getSortIcon = useCallback((key: string) => {
		if (sort.key !== key || !sort.direction) return ' ↕';
		return sort.direction === 'asc' ? ' ↑' : ' ↓';
	}, [sort]);

	return { sorted, sort, toggleSort, getSortIcon };
}
