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
