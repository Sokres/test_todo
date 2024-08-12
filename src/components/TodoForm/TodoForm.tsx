import { FormEvent, useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { TodoFormProps } from './TodoForm.props';

function TodoForm({ addTask }: TodoFormProps) {
	const [value, setValue] = useState<string>('');
	const [error, setError] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!value.trim()) {
			setError(true);
			return;
		}
		addTask(value);
		setValue('');
		setError(false);
	};

	return (
		<form
			className={!error ? 'todo__form form' : 'todo__form form form--active'}
			onSubmit={handleSubmit}
		>
			<Input
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
					if (error) {
						setError(false);
					}
				}}
				placeholder="Что необходимо сделать?"
			/>
			<Button onClick={handleSubmit} />
			{error && <div className="form__error">Поле не может быть пустым</div>}
		</form>
	);
}

export default TodoForm;
