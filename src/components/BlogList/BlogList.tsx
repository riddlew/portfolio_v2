import { BlogFrontmatter } from '@/types/frontmatter';
import { AnimatePresence } from 'framer-motion';
import style from './BlogList.module.scss';
import BlogCard from './BlogCard';

type Props = {
	items: BlogFrontmatter[];
};

const BlogList = ({ items }: Props) =>
	items.length === 0 ? (
		<p className="empty-message">No blog posts yet!</p>
	) : (
		<div className={style.grid}>
			<AnimatePresence>
				{items.map((item, i) => (
					<BlogCard key={item.slug} index={i} item={item} />
				))}
			</AnimatePresence>
		</div>
	);

export default BlogList;
