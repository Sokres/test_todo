import { TodoItemProps } from './TodoItem.props';

function TodoItem({ task, toggleFulfilled }: TodoItemProps) {
	return (
		<li className="list__item">
			<label>
				<input
					className="visually-hidden"
					checked={task.fulfilled}
					type="checkbox"
					onChange={() => toggleFulfilled(task.id)}
				/>
				<span>{task.todo}</span>
			</label>
		</li>
	);
}

export default TodoItem;
