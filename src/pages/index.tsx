import Head from 'next/head';
import Header from '@/components/Header';
import { GetStaticProps, NextPage } from 'next';
import { Hero } from '@/components/page_components/index';
import Link from 'next/link';
import ProjectList from '@/components/ProjectList';
import { BlogFrontmatter, PortfolioFrontmatter } from '@/types/frontmatter';
import { compareDesc, parse } from 'date-fns';
import fs from 'fs';
import getPropsFromFile from '@/helpers/functions/getPropsFromFile';
import { BLOG_DATA_PATH, PORTFOLIO_DATA_PATH } from '@/config/paths';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';

const parseFrontmatterDate = (date: string) =>
	parse(date, 'MM/dd/y', new Date());

export const getStaticProps: GetStaticProps = async () => {
	const projectFilenames: string[] = fs.readdirSync(PORTFOLIO_DATA_PATH);
	const blogFilenames: string[] = fs.readdirSync(BLOG_DATA_PATH);

	const projectFrontmatter = await Promise.all(
		projectFilenames.map((filename) =>
			getPropsFromFile<PortfolioFrontmatter>(PORTFOLIO_DATA_PATH, filename)
		)
	);
	const blogFrontmatter = await Promise.all(
		blogFilenames.map((filename) =>
			getPropsFromFile<BlogFrontmatter>(BLOG_DATA_PATH, filename)
		)
	);

	projectFrontmatter.sort((a, b) => b.id - a.id);
	blogFrontmatter.sort((a, b) => {
		const aDate = parseFrontmatterDate(a.date);
		const bDate = parseFrontmatterDate(b.date);
		return compareDesc(aDate, bDate);
	});

	return {
		props: {
			projects: projectFrontmatter.slice(0, 4),
			posts: blogFrontmatter.slice(0, 6),
		},
	};
};

type Props = {
	projects: PortfolioFrontmatter[];
	posts: BlogFrontmatter[];
};

export const HomePage: NextPage<Props> = ({ projects, posts }) => (
	<>
		<Head>
			<title>
				Wyatt Riddle - Full-Stack Web Developer - React, Typescript, Express.js,
				Ruby on Rails
			</title>
			<meta
				name="description"
				content="Wyatt Riddle is a full-stack web developer with experience in React, Typescript, Express.js, and Ruby on Rails."
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Header />
		<main className="container">
			<Hero />

			<section className="section">
				<h2>Recent Projects</h2>
				<ProjectList items={projects} />
				<div style={{ textAlign: 'center' }}>
					<Link href="portfolio" className="btn">
						View All Projects
					</Link>
				</div>
			</section>

			<section className="section">
				<h2>Recent Blog Posts</h2>
				<BlogList items={posts} />
				<div style={{ textAlign: 'center' }}>
					<Link href="blog" className="btn">
						View All Projects
					</Link>
				</div>
			</section>

			<section className="section">
				<h2>Like what you see? Let&apos;s work together!</h2>
				<p>
					I am currently open to new opportunities. If you would like to hire me
					or need a website built for your company, feel free to{' '}
					<Link href="contact" title="Contact Wyatt ">
						contact me
					</Link>
				</p>
			</section>
		</main>
		<Footer />
	</>
);

export default HomePage;
