export const Blockquote = ({
	children,
	author,
}: {
	children: React.ReactNode;
	author: string;
}) => (
	<div className="blockquote">
		<blockquote>{children}</blockquote>
		{author && <cite>{author}</cite>}
	</div>
);
