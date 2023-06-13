import path from 'path';
import {
	faCss3Alt,
	faDocker,
	faHtml5,
	faJs,
	faNodeJs,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
	TypescriptIcon,
	RubyOnRailsIcon,
	PostgresIcon,
	MongoDBIcon,
} from '@/svgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PORTFOLIO_DATA_PATH = path.join(process.cwd(), 'data/portfolio');
export const BLOG_DATA_PATH = path.join(process.cwd(), 'data/blog');

export const portfolioCategories = [
	'All',
	'React',
	'Node / Express',
	'Ruby on Rails',
];

export const skills = [
	{
		label: 'React',
		icon: (
			<FontAwesomeIcon
				icon={faReact}
				style={{ fontSize: '3.2rem', color: '#008fbe' }}
				fixedWidth
			/>
		),
	},
	{
		label: 'Typescript',
		icon: <TypescriptIcon />,
	},
	{
		label: 'Javascript',
		icon: (
			<FontAwesomeIcon
				icon={faJs}
				style={{ fontSize: '3.2rem', color: '#dbc42b' }}
				fixedWidth
			/>
		),
	},
	{
		label: 'HTML',
		icon: (
			<FontAwesomeIcon
				icon={faHtml5}
				style={{ fontSize: '3.2rem', color: '#d84924' }}
				fixedWidth
			/>
		),
	},
	{
		label: 'CSS',
		icon: (
			<FontAwesomeIcon
				icon={faCss3Alt}
				style={{ fontSize: '3.2rem', color: '#1a6db1' }}
				fixedWidth
			/>
		),
	},
	{
		label: 'Node.js / Express.js',
		icon: (
			<FontAwesomeIcon
				icon={faNodeJs}
				style={{ fontSize: '3.2rem', color: '#4f9640' }}
				fixedWidth
			/>
		),
	},
	// {
	// 	label: 'PHP',
	// 	icon: <FontAwesomeIcon icon={faPhp} size="2xl" className="text-[#828CB4] dark:text-[#adb9e6" />,
	// },
	// {
	// 	label: 'Laravel',
	// 	icon: <FontAwesomeIcon icon={faLaravel} size="2xl" className="text-[#F22D20]" />,
	// },
	// {
	// 	label: 'WordPress',
	// 	icon: <FontAwesomeIcon icon={faWordpress} size="2xl" className="text-black dark:text-white" />,
	// },
	{
		label: 'Ruby on Rails',
		icon: <RubyOnRailsIcon />,
	},
	{
		label: 'Postgres',
		icon: <PostgresIcon />,
	},
	{
		label: 'MongoDB',
		icon: <MongoDBIcon />,
	},
	{
		label: 'Docker',
		icon: (
			<FontAwesomeIcon
				icon={faDocker}
				style={{ fontSize: '3.2rem', color: '#008fbe' }}
				fixedWidth
			/>
		),
	},
];
