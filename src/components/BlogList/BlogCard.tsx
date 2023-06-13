import { BlogFrontmatter } from '@/types/frontmatter';
import { motion } from 'framer-motion';
import Link from 'next/link';
import style from './BlogCard.module.scss';

const variant = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

type Props = {
	item: BlogFrontmatter;
	titleAs?: React.ElementType;
};

const BlogCard = ({ item, titleAs: TitleElement = 'h3' }: Props) => (
	<motion.div
		className={style.card}
		layout
		variants={variant}
		initial="hidden"
		animate="show"
		exit="hidden"
	>
		<TitleElement className={style.title}>
			<Link href={`/blog/${item.slug}`}>{item.title}</Link>
		</TitleElement>
		<p className={style.card_description}>{item.description}</p>
	</motion.div>
);

export default BlogCard;
