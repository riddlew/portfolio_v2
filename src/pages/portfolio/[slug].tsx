import fs from 'fs';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import Head from 'next/head';
import Components from '@/components/MDXComponents';
import Nav from '@/components/Header';
import Footer from '@/components/Footer';
import { PORTFOLIO_DATA_PATH } from '@/config';
import { PortfolioFrontmatter } from '@/types/frontmatter';
import parseMDXFile from '@/helpers/functions/parseMDXFile';
import slugify from '@/helpers/functions/slugify';

type SlugParams = {
	params: {
		slug: string;
	};
};

export const getStaticPaths = async () => {
	const filenames: string[] = fs.readdirSync(PORTFOLIO_DATA_PATH);
	const slugs: SlugParams[] = filenames.map((filename) => {
		const noExtFilename = filename.replace(/\.mdx$/, '');
		return {
			params: {
				slug: slugify(noExtFilename),
			},
		};
	});

	return {
		paths: slugs,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const fullPath = path.join(PORTFOLIO_DATA_PATH, `${params?.slug}.mdx`);
	const source = await parseMDXFile<PortfolioFrontmatter>(fullPath);

	return {
		props: {
			source,
		},
	};
};

type PortfolioDetailsProps = {
	source: MDXRemoteSerializeResult<
		Record<string, unknown>,
		PortfolioFrontmatter
	>;
};

export const PortfolioDetailsPage: NextPage<PortfolioDetailsProps> = ({
	source,
}) => (
	<>
		<Head>
			<title>{source.frontmatter.name}</title>
			<meta name="description" content={source.frontmatter.description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Nav />
		<main>
			<section className="section">
				<div className="container">
					<h1>{source.frontmatter.name}</h1>
					<div className="flex gap-2 mb-24">
						{source.frontmatter.images.map((img) => (
							<img key={img} src={img} width="90" height="60" />
						))}
					</div>
					<MDXRemote {...source} components={Components} />
				</div>
			</section>
		</main>
		<Footer />
	</>
);

export default PortfolioDetailsPage;
