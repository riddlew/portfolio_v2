import { portfolioCategories } from '@/config';
import clsx from 'clsx';
import useNavLine from '@/hooks/useNavLine';
import style from './CategorySelector.module.scss';

type Props = {
	onCategorySelect: (category: string) => void;
	selected: string;
};

export const CategorySelector = ({ onCategorySelect, selected }: Props) => {
	const {
		lineState,
		lineRef,
		selectedRef,
		setLineToSelected,
		setLineToHovered,
	} = useNavLine();

	const onCategoryMobileSelect = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		onCategorySelect(event.target.value);
	};

	return (
		<>
			<div className={style.container} onMouseLeave={() => setLineToSelected()}>
				<div
					className="nav_line"
					ref={lineRef}
					style={{
						left: `${lineState.left}px`,
						width: `${lineState.width}px`,
					}}
				/>
				<ul className={style.list}>
					{portfolioCategories.map((category) => (
						<li
							key={category}
							ref={(ref) => {
								if (ref && category === selected) selectedRef.current = ref;
							}}
							onMouseEnter={setLineToHovered}
						>
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
