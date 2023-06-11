import { BlogFrontmatter } from '@/types/frontmatter';
import { motion } from 'framer-motion';
import Link from 'next/link';
import style from './BlogCard.module.scss';

const variant = {
	hidden: (i: number) => ({ opacity: 0, transition: { delay: i * 0.1 } }),
	show: (i: number) => ({ opacity: 1, transition: { delay: i * 0.1 } }),
};

type Props = {
	item: BlogFrontmatter;
	index: number;
	titleAs?: React.ElementType;
};

const BlogCard = ({ item, index, titleAs: TitleElement = 'h3' }: Props) => (
	<motion.div
		className={style.card}
		layout
		variants={variant}
		initial="hidden"
		animate="show"
		exit="hidden"
		custom={index}
	>
		<TitleElement className={style.title}>
			<Link href={`blog/${item.slug}`}>{item.title}</Link>
		</TitleElement>
		<p className={style.card_description}>{item.description}</p>
	</motion.div>
);

export default BlogCard;
