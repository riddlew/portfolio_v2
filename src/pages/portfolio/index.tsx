import Header from '@/components/Header';
import Footer from '@/components/Footer';
import fs from 'fs';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { PORTFOLIO_DATA_PATH } from '@/config';
import { PortfolioFrontmatter } from '@/types/frontmatter';
import getPropsFromFile from '@/helpers/functions/getPropsFromFile';
import { CategorySelector } from '@/components/page_components/portfolio';
import { useState } from 'react';
import ProjectList from '@/components/ProjectList';

export const getStaticProps: GetStaticProps = async () => {
	const filenames: string[] = fs.readdirSync(PORTFOLIO_DATA_PATH);

	const fileFrontmatter = await Promise.all(
		filenames.map((filename) =>
			getPropsFromFile<PortfolioFrontmatter>(PORTFOLIO_DATA_PATH, filename)
		)
	);

	fileFrontmatter.sort((a, b) => b.id - a.id);

	return {
		props: {
			source: fileFrontmatter,
		},
	};
};

type PortfolioProps = {
	source: PortfolioFrontmatter[];
};

export const PortfolioPage: NextPage<PortfolioProps> = ({ source }) => {
	const [category, setCategory] = useState('All');

	const handleCategorySelect = (cat: string) => {
		setCategory(cat);
	};

	return (
		<>
			<Head>
				<title>Portfolio - Wyatt Riddle - Full-Stack Web Developer</title>
				<meta
					name="description"
					content="Wyatt Riddle is a full-stack web developer with experience in React, Typescript, Express.js, and Ruby on Rails."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main>
				<section className="section">
					<div className="container">
						<h1>Portfolio</h1>
						<CategorySelector
							onCategorySelect={handleCategorySelect}
							selected={category}
						/>
						<ProjectList
							items={source.filter((item) =>
								category === 'All' ? true : item.tags.includes(category)
							)}
						/>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default PortfolioPage;
