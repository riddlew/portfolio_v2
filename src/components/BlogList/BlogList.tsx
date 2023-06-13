import { BlogFrontmatter } from '@/types/frontmatter';
import { AnimatePresence } from 'framer-motion';
import style from './BlogList.module.scss';
import BlogCard from './BlogCard';

type Props = {
	items: BlogFrontmatter[];
	titleAs?: React.ElementType;
};

const BlogList = ({ items, titleAs = 'h3' }: Props) =>
	items.length === 0 ? (
		<p className="empty-message">No blog posts yet!</p>
	) : (
		<div className={style.grid}>
			<AnimatePresence>
				{items.map((item) => (
					<BlogCard key={item.slug} titleAs={titleAs} item={item} />
				))}
			</AnimatePresence>
		</div>
	);

export default BlogList;
