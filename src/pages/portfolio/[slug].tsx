import fs from 'fs';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import Head from 'next/head';
import Image from 'next/image';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Components from '@/components/MDXComponents';
import Nav from '@/components/Header';
import Footer from '@/components/Footer';
import { PORTFOLIO_DATA_PATH } from '@/config';
import { PortfolioFrontmatter } from '@/types/frontmatter';
import parseMDXFile from '@/helpers/functions/parseMDXFile';
import slugify from '@/helpers/functions/slugify';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type SlugParams = {
	params: {
		slug: string;
	};
};

export const getStaticPaths = async () => {
	const filenames: string[] = fs.readdirSync(PORTFOLIO_DATA_PATH);
	const slugs: SlugParams[] = filenames
		.filter((filename) => filename.endsWith('.mdx'))
		.map((filename) => {
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
			<title>
				{source.frontmatter.name} - Wyatt Riddle - Full-Stack Software Engineer
			</title>
			<meta name="description" content={source.frontmatter.description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Nav />
		<main>
			<section className="section">
				<div className="container">
					<h1>{source.frontmatter.name}</h1>
					<Swiper
						slidesPerView={1}
						loop
						pagination={{ clickable: true }}
						navigation
						modules={[Pagination, Navigation]}
					>
						{source.frontmatter.images.map((img) => (
							<SwiperSlide key={img.src}>
								<Image
									key={img.src}
									src={img.src}
									alt={img.alt}
									width={600}
									height={800}
								/>
								<div className="swiper-lazy-preloader" />
							</SwiperSlide>
						))}
					</Swiper>
					<div className="mdx-styling">
						<MDXRemote {...source} components={Components} />
					</div>
				</div>
			</section>
		</main>
		<Footer />
	</>
);

export default PortfolioDetailsPage;
