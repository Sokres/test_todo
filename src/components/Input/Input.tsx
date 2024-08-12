import { InputProps } from './Input.props';

function Input({ value, onChange, placeholder }: InputProps) {
	return (
		<input
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="form__add"
			type="text"
		/>
	);
}

export default Input;
