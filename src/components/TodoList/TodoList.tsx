import TodoItem from '../TodoItem/TodoItem';
import { TodoListProps } from './TodoList.props';

function TodoList({ tasks, toggleFulfilled }: TodoListProps) {
	return (
		<ul className="todo__list list">
			{tasks.map((task) => (
				<TodoItem key={task.id} task={task} toggleFulfilled={toggleFulfilled} />
			))}
		</ul>
	);
}

export default TodoList;
