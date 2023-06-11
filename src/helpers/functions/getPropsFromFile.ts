import path from 'path';
import parseMDXFile from './parseMDXFile';
import slugify from './slugify';

const getPropsFromFile = async <T>(filepath: string, filename: string) => {
	const fullPath = path.join(filepath, filename);
	const { frontmatter } = await parseMDXFile<T>(fullPath);
	const noExtFilename = filename.replace(/\.mdx$/, '');
	return {
		...frontmatter,
		slug: slugify(noExtFilename),
	};
};

export default getPropsFromFile;
