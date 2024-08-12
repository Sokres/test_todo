import { TodoFiltersProps } from './TodoFilters.props';

const TodoFilters = ({
	setFilter,
	deleteFulfilled,
	remainingTasks,
	filter,
}: TodoFiltersProps) => {
	return (
		<div className="todo__info info">
			<div className="info__balance">{`осталось ${remainingTasks} задачи`}</div>
			<div className="info__wrap_toggles toggles">
				<div className="toggles__filter">
					<button
						onClick={() => setFilter('all')}
						className={
							filter !== 'all'
								? 'toggles__btn'
								: 'toggles__btn toggles__btn__active '
						}
					>
						Все
					</button>
					<button
						onClick={() => setFilter('active')}
						className={
							filter !== 'active'
								? 'toggles__btn'
								: 'toggles__btn toggles__btn__active '
						}
					>
						Активные
					</button>
					<button
						onClick={() => setFilter('completed')}
						className={
							filter !== 'completed'
								? 'toggles__btn'
								: 'toggles__btn toggles__btn__active '
						}
					>
						Выполненные
					</button>
				</div>
				<button onClick={deleteFulfilled} className="toggles__btn">
					Удалить все выполненные
				</button>
			</div>
		</div>
	);
};

export default TodoFilters;
