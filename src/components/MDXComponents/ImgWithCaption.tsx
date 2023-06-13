export const ImgWithCaptions = ({
	src,
	alt,
	caption,
	width,
	height,
}: {
	src: string;
	alt: string;
	caption: string;
	width: number;
	height: number;
}) => (
	<figure>
		<img src={src} alt={alt} width={width} height={height} />
		<figcaption>{caption}</figcaption>
	</figure>
);
