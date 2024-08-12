import { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFilters from './components/TodoFilters/TodoFilters';
import { Todo } from './Interface/todo.interface';

function App() {
	const initialTodos: Todo[] = [
		{ fulfilled: false, todo: 'Тестовое задание', id: 1 },
		{ fulfilled: true, todo: 'Прекрасный код', id: 2 },
		{ fulfilled: false, todo: 'Покрытие тестами', id: 3 },
	];

	const [tasks, setTasks] = useState<Todo[]>(initialTodos);
	const [filter, setFilter] = useState<string>('all');

	const addTask = (todo: string) => {
		const newTask: Todo = {
			fulfilled: false,
			todo,
			id: tasks.length + 1,
		};
		setTasks([...tasks, newTask]);
	};

	const toggleFulfilled = (id: number) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, fulfilled: !task.fulfilled } : task
			)
		);
	};

	const deleteFulfilled = () => {
		setTasks(tasks.filter((task) => !task.fulfilled));
	};

	const filteredTasks = tasks.filter((task) => {
		if (filter === 'all') {
			return true;
		} else if (filter === 'active') {
			return !task.fulfilled;
		} else if (filter === 'completed') {
			return task.fulfilled;
		}
		return false;
	});

	return (
		<main className="todo">
			<div className="todo__container">
				<img src="./logo.svg" alt="Логотип" className="logo" width={230} />
				<div className="todo__app">
					<TodoForm addTask={addTask} />
					<TodoList tasks={filteredTasks} toggleFulfilled={toggleFulfilled} />
					<TodoFilters
						filter={filter}
						setFilter={setFilter}
						deleteFulfilled={deleteFulfilled}
						remainingTasks={tasks.filter((task) => !task.fulfilled).length}
					/>
				</div>
			</div>
		</main>
	);
}

export default App;
