import { MDXComponents } from '@/types/mdx';
import { Blockquote } from './Blockquote';
import { Code } from './Code';
import { Callout } from './Callout';
import { ImgWithCaptions } from './ImgWithCaption';

const Components: MDXComponents = {
	pre: ({ children, ...props }: { children: React.ReactNode }) => (
		<Code {...props}>{children}</Code>
	),
	ImgWithCaptions,
	Blockquote,
	Callout,
};

export default Components;
export { Blockquote, Code, Callout };
