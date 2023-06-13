import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import Head from 'next/head';
import { compareDesc, parse } from 'date-fns';
import { Pagination } from '@/components/page_components/blog';
import Components from '@/components/MDXComponents';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogFrontmatter } from '@/types/frontmatter';
import { BLOG_DATA_PATH } from '@/config';
import slugify from '@/helpers/functions/slugify';
import BlogList from '@/components/BlogList';

interface SlugParams {
	params: {
		slug: string[];
	};
}

type MDXRemoteBlogPostTypes = MDXRemoteSerializeResult<
	Record<string, unknown>,
	BlogFrontmatter
>;

type PageType = 'listing' | 'post';

type BlogProps = {
	source: MDXRemoteBlogPostTypes | BlogFrontmatter[];
	type: PageType;
	numPages?: number;
	curPage?: number;
};

export const getStaticPaths = async () => {
	const filenames: string[] = fs
		.readdirSync(BLOG_DATA_PATH)
		.filter((filename) => filename.endsWith('.mdx'));
	const slugs: SlugParams[] = filenames.map((filename) => {
		const noExtFilename = filename.replace(/\.mdx$/, '');
		return {
			params: {
				slug: [slugify(noExtFilename)],
			},
		};
	});
	const numPages = Math.ceil(slugs.length / 10);

	slugs.push({
		params: {
			slug: [],
		},
	});

	for (let i = 1; i <= numPages; i++) {
		slugs.push({
			params: {
				slug: [`${i}`],
			},
		});
	}

	return {
		paths: slugs,
		fallback: false,
	};
};

const getFileFrontmatter = async (
	filepath: string
): Promise<BlogFrontmatter> => {
	const contents = fs.readFileSync(filepath);
	const source: MDXRemoteBlogPostTypes = await serialize(contents, {
		parseFrontmatter: true,
		mdxOptions: {
			rehypePlugins: [],
		},
	});

	return source.frontmatter;
};

const parseFrontmatterDate = (date: string) =>
	parse(date, 'MM/dd/y', new Date());

const propsFromFile = async (filename: string) => {
	const fullPath = path.join(BLOG_DATA_PATH, filename);
	const frontmatter = await getFileFrontmatter(fullPath);
	const noExtFilename = filename.replace(/\.mdx$/, '');
	return {
		...frontmatter,
		slug: slugify(noExtFilename),
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const pageRegex = /[0-9]+/;
	const slug = params?.slug ? params.slug[0] : undefined;

	// If there is no slug, or it's a number, show listing of blog posts.
	if (!slug || pageRegex.test(slug)) {
		const filenames: string[] = fs
			.readdirSync(BLOG_DATA_PATH)
			.filter((filename) => filename.endsWith('.mdx'));
		const numPages = Math.ceil(filenames.length / 8);
		const curPage = slug ? parseInt(slug, 10) : 1;

		const fileFrontmatter = await Promise.all(
			filenames.map((filename) => propsFromFile(filename))
		);

		fileFrontmatter.sort((a, b) => {
			const aDate = parseFrontmatterDate(a.date);
			const bDate = parseFrontmatterDate(b.date);
			return compareDesc(aDate, bDate);
		});

		return {
			props: {
				source: fileFrontmatter.slice((curPage - 1) * 10, curPage * 10),
				numPages,
				curPage,
				type: 'listing',
			},
		};
	}

	// It has a slug but it's not a number, so it must be an individual blog
	// post.
	const fullPath = path.join(BLOG_DATA_PATH, `${params?.slug}.mdx`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	const source: MDXRemoteSerializeResult = await serialize(fileContents, {
		parseFrontmatter: true,
		mdxOptions: {
			rehypePlugins: [],
		},
	});

	return {
		props: {
			source,
			type: 'post',
		},
	};
};

export const BlogPage: NextPage<BlogProps> = ({
	source,
	type,
	curPage,
	numPages,
}) => {
	if (type === 'listing') {
		const posts = source as BlogFrontmatter[];

		return (
			<>
				<Head>
					<title>{`Blog - Page ${curPage}`}</title>
					<meta
						name="description"
						content={`Page ${curPage} of blog posts relating to Software Engineering and Web Development`}
					/>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Header />
				<main>
					<section className="section">
						<div className="container">
							<h1>Blog</h1>
							<BlogList titleAs="h2" items={posts} />
							<Pagination numPages={numPages || 1} />
						</div>
					</section>
				</main>
				<Footer />
			</>
		);
	}

	const data = source as MDXRemoteBlogPostTypes;

	return (
		<>
			<Head>
				<title>{(source as MDXRemoteBlogPostTypes).frontmatter.title}</title>
				<meta
					name="description"
					content={(source as MDXRemoteBlogPostTypes).frontmatter.description}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main>
				<section className="section">
					<div className="container mdx-styling">
						<h1>{data.frontmatter.title}</h1>
						<MDXRemote {...data} components={Components} />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default BlogPage;
