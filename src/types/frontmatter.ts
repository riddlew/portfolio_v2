export type PortfolioFrontmatter = {
	id: number;
	name: string;
	slug: string;
	description: string;
	images: {
		src: string;
		alt: string;
	}[];
	tags: string[];
	url: string;
};

export type BlogFrontmatter = {
	title: string;
	slug: string;
	description: string;
	date: string;
};
