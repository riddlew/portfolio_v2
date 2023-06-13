import { PortfolioFrontmatter } from '@/types/frontmatter';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import style from './ProjectCard.module.scss';

const variant = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

type Props = {
	item: PortfolioFrontmatter;
	titleAs?: React.ElementType;
};

const ProjectCard = ({ item, titleAs: TitleElement = 'h3' }: Props) => (
	<motion.div
		className={style.card}
		layout
		variants={variant}
		initial="hidden"
		animate="show"
		exit="hidden"
	>
		<Link href={`portfolio/${item.slug}`}>
			<Image
				src={item.images[0].src}
				alt={item.name}
				width={600}
				height={400}
				className={style.card_img}
			/>
		</Link>
		<TitleElement className={style.card_title}>
			<Link href={`portfolio/${item.slug}`}>{item.name}</Link>
		</TitleElement>
		<p className={style.card_description}>{item.description}</p>
		<div className={style.card_tags}>
			{item.tags.map((tag: string) => (
				<span key={tag}>{tag}</span>
			))}
		</div>
	</motion.div>
);

export default ProjectCard;
