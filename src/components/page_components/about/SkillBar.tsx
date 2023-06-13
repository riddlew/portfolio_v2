import { skills } from '@/config';
import style from './SkillBar.module.scss';

export const SkillBar = () => (
	<div className={style.skillbar}>
		<ul className={style.list}>
			{skills.map((skill) => (
				<li
					key={skill.label}
					className={style.skill}
					data-tooltip-content={skill.label}
				>
					{skill.icon}
					{skill.label}
				</li>
			))}
		</ul>
	</div>
);
