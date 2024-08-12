export interface TodoFiltersProps {
	setFilter: (filter: string) => void;
	deleteFulfilled: () => void;
	remainingTasks: number;
	filter: string;
}
