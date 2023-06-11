import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type MDXFileType<T> = MDXRemoteSerializeResult<Record<string, unknown>, T>;

const parseMDXFile = async <T>(filepath: string): Promise<MDXFileType<T>> => {
	const contents = fs.readFileSync(filepath);
	const source: MDXRemoteSerializeResult<
		Record<string, unknown>,
		T
	> = await serialize(contents, {
		parseFrontmatter: true,
		mdxOptions: {
			rehypePlugins: [],
		},
	});
	return source;
};

export default parseMDXFile;
