export type PortfolioFrontmatter = {
	id: number;
	name: string;
	slug: string;
	description: string;
	images: string[];
	tags: string[];
	url: string;
};

export type BlogFrontmatter = {
	title: string;
	slug: string;
	description: string;
	date: string;
};

export type MDXComponentType =
	| 'pre'
	| 'ImgWithCaptions'
	| 'Blockquote'
	| 'Callout';

export type MDXComponents = {
	[key in MDXComponentType]?: React.ComponentType<any>;
};
