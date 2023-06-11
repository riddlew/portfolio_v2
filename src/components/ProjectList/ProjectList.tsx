import { PortfolioFrontmatter } from '@/types/frontmatter';
import { AnimatePresence } from 'framer-motion';
import style from './ProjectList.module.scss';
import ProjectCard from './ProjectCard';

type Props = {
	items: PortfolioFrontmatter[];
};

const ProjectList = ({ items }: Props) =>
	items.length === 0 ? (
		<p className="empty-message">No projects yet!</p>
	) : (
		<div className={style.grid}>
			<AnimatePresence>
				{items.map((item, i) => (
					<ProjectCard key={item.slug} index={i} item={item} />
				))}
			</AnimatePresence>
		</div>
	);

export default ProjectList;
