export type MDXComponentType =
	| 'pre'
	| 'ImgWithCaptions'
	| 'Blockquote'
	| 'Callout';

export type MDXComponents = {
	[key in MDXComponentType]?: React.ComponentType<any>;
};
