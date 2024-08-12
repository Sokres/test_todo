import { Todo } from '../../Interface/todo.interface';

export interface TodoItemProps {
	task: Todo;
	toggleFulfilled: (id: number) => void;
}
