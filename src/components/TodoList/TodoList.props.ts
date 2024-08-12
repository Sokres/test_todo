import { Todo } from '../../Interface/todo.interface';

export interface TodoListProps {
	tasks: Todo[];
	toggleFulfilled: (id: number) => void;
}
