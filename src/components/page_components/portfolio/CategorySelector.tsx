import { portfolioCategories } from '@/config';
import clsx from 'clsx';
import style from './CategorySelector.module.scss';

type Props = {
	onCategorySelect: (category: string) => void;
	selected: string;
};

export const CategorySelector = ({ onCategorySelect, selected }: Props) => {
	const onCategoryMobileSelect = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		onCategorySelect(event.target.value);
	};

	return (
		<>
			<div className={style.container}>
				<div className={style.nav_line} />
				<ul className={style.list}>
					{portfolioCategories.map((category) => (
						<li key={category}>
							<button
								type="button"
								onClick={() => onCategorySelect(category)}
								className={clsx({ selected: selected === category })}
							>
								{category}
							</button>
						</li>
					))}
				</ul>
			</div>

			<select className={style.mobile_select} onChange={onCategoryMobileSelect}>
				{portfolioCategories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</>
	);
};
