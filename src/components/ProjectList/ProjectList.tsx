import { PortfolioFrontmatter } from '@/types/frontmatter';
import { AnimatePresence } from 'framer-motion';
import style from './ProjectList.module.scss';
import ProjectCard from './ProjectCard';

type Props = {
	items: PortfolioFrontmatter[];
	titleAs?: React.ElementType;
};

const ProjectList = ({ items, titleAs = 'h3' }: Props) =>
	items.length === 0 ? (
		<p className="empty-message">No projects yet!</p>
	) : (
		<div className={style.grid}>
			<AnimatePresence>
				{items.map((item) => (
					<ProjectCard key={item.slug} item={item} titleAs={titleAs} />
				))}
			</AnimatePresence>
		</div>
	);

export default ProjectList;
