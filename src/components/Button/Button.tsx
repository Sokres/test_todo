import { ButtonProps } from './Button.props';

const Button = ({ onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className="form__btn">
			<img src="./arrow1.svg" alt="Иконока добавить" width={30} />
		</button>
	);
};

export default Button;
