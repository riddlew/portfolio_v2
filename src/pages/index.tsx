import Head from 'next/head';
import Header from '@/components/Header';
import { NextPage } from 'next';
import { Hero } from '@/components/page_components/index';

export const HomePage: NextPage = () => (
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

		<div className="container">
			<Header />
			<main>
				<Hero />
			</main>
		</div>
	</>
);

export default HomePage;
