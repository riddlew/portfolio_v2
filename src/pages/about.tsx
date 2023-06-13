import Head from 'next/head';
import Nav from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { SkillBar } from '@/components/page_components/about';
import style from './about.module.scss';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About Me - Wyatt Riddle - Full-Stack Web Developer</title>
				<meta
					name="description"
					content="Wyatt Riddle is a full-stack web developer with experience in React, Typescript, Express.js, and Ruby on Rails."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />
			<main>
				<section className="section container">
					<div className="container">
						<h1 className="section__title">Learn More About Me</h1>

						<h2>Who Am I?</h2>
						<p className="paragraph">
							My name is Wyatt Riddle. I&apos;m a Software Engineer with
							experience in React, Next, Express.js, and Ruby on Rails. I enjoy
							creating responsive and accessible websites, and dabbling in
							design using tools such as Figma or Adobe Photoshop.
						</p>
						<p className="paragraph">
							I&apos;ve enjoyed programming and making websites as a fun hobby
							since I was 12 years old. In 2020 I seized the opportunity to
							complete my Bachelor&apos;s degree in Software Development and
							turn my beloved hobby into a career. While finishing my degree, I
							also joined the team at TDS Telecom where I developed full-stack
							applications using React, TypeScript, and Python.
						</p>
						<p className="paragraph">
							Since then, I&apos;ve volunteered my time at 100devs to help
							mentor junior engineers and people new to programming while
							looking for my next opportunity. If you are looking for a
							passionate Software Engineer to join your team, please feel free
							to{' '}
							<Link
								href="about"
								title="Contact Wyatt Riddle"
								className="text-blue-600 hover:underline"
							>
								contact me.
							</Link>
						</p>
					</div>
				</section>

				<section className="section section--alt">
					<div className="container">
						<h2>My Skills</h2>
						<SkillBar />
					</div>
				</section>

				<section className="section">
					<div className="container">
						<h2>Education &amp; Experience</h2>
						<div className={style.edu_exp_grid}>
							<div>
								<h3>Education</h3>
								<div className={style.details}>
									<span className={style.title}>
										Bachelor of Science - Software Development
									</span>
									<span className={style.date}>2019 - 2022</span>
									<span className={style.college}>
										Western Governor&apos;s University
									</span>
								</div>
							</div>
							<div>
								<h3>Certifications</h3>
								<div className={style.certification}>CompTIA A+</div>
								<div className={style.certification}>CompTIA Project+</div>
								<div className={style.certification}>
									IT Information Library Foundations (ITIL)&reg;
								</div>
								<div className={style.certification}>
									Microsoft Technology Associate: Software Development
									Fundamentals (MTA)
								</div>
							</div>
						</div>

						<h3>Experience</h3>
						<div className={style.details}>
							<div>
								<span className={style.title}>
									Volunteer Software Engineer, Mentor
								</span>
								<span className={style.at}>@</span>
								<span>100Devs</span>
							</div>
							<span className={style.date}>2023 - Present</span>
							<p>
								I volunteer my time to mentor junior software engineers and
								people who are new to programming. I also collaborate on several
								open-source projects designed to help new engineers gain
								real-world skills and experience.
							</p>
						</div>
						<div className={style.details}>
							<div>
								<span className={style.title}>
									Network Voice Operations Developer Intern
								</span>
								<span className={style.at}>@</span>
								<span>TDS Telecom</span>
							</div>
							<span className={style.date}>2022</span>
							<p>
								Worked with a small team of 3 developers to build tools and
								websites used across various company departments. Achievements
								include:
							</p>
							<ul className={style.bullet_list}>
								<li>
									Automated the collection of critical operations information
									with React and Python; Achieved 100% automation for tasks that
									previously took an average of 47.5 person-hours per run.
								</li>
								<li>
									Implemented error checking features in a spreadsheet
									processing app, resulting in a reduction in failed jobs by
									95%.
								</li>
								<li>
									Rebuilt legacy VBS script in Python, decreasing runtime from 2
									hours to 10 minutes.
								</li>
							</ul>
						</div>
						<div className={style.details}>
							<div>
								<span className={style.title}>Freelance Web Developer</span>
							</div>
							<span className={style.date}>2020 - Present</span>
							<p>
								Collaborated with multiple clients to create websites to support
								their vision and business operations, with a focus on supporting
								small-business owners and local businesses.
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
