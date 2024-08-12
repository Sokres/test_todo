import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm/TodoForm';

describe('render tests', () => {
	it('render button', () => {
		render(<TodoForm addTask={() => {}} />);
		expect(
			screen.getByPlaceholderText('Что необходимо сделать?')
		).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	it('calls addTask with the entered value', () => {
		const addTask = vi.fn();
		render(<TodoForm addTask={addTask} />);

		const input = screen.getByPlaceholderText(
			'Что необходимо сделать?'
		) as HTMLInputElement;
		fireEvent.change(input, { target: { value: 'New Task' } });
		fireEvent.click(screen.getByRole('button'));

		expect(addTask).toHaveBeenCalledWith('New Task');
		expect(input.value).toBe('');
	});
	it('not vis messge', () => {
		const addTask = vi.fn();
		render(<TodoForm addTask={addTask} />);

		const input = screen.getByPlaceholderText(
			'Что необходимо сделать?'
		) as HTMLInputElement;
		fireEvent.change(input, { target: { value: 'New Task' } });
		fireEvent.click(screen.getByRole('button'));

		expect(
			screen.queryByText('Поле не может быть пустым')
		).not.toBeInTheDocument();
	});
});
