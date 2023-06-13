import Head from 'next/head';
import Nav from '@/components/Header';
import Footer from '@/components/Footer';
import style from '@/styles/pages/contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact - Wyatt Riddle - Full-Stack Web Developer</title>
				<meta
					name="description"
					content="Wyatt Riddle is a full-stack web developer with experience in React, Typescript, Express.js, and Ruby on Rails."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />
			<main>
				<section className="section">
					<div className="container">
						<h1>Contact Me</h1>

						<div className={style.grid}>
							<div>
								<p className="paragraph">
									You can contact me on social media or by using the contact
									form on this page.
								</p>
								<div className={style.socials}>
									<a
										href="https://www.linkedin.com/in/wyatt-r/"
										rel="nofollow"
										title="Contact Wyatt on LinkedIn"
									>
										<FontAwesomeIcon icon={faLinkedinIn} />
										LinkedIn
									</a>
									<a
										href="https://twitter.com/riddlew_"
										rel="nofollow"
										title="Contact Wyatt on Twitter"
									>
										<FontAwesomeIcon icon={faTwitter} />
										Twitter
									</a>
									<a
										href="https://github.com/riddlew"
										rel="nofollow"
										title="Contact Wyatt on GitHub"
									>
										<FontAwesomeIcon icon={faGithub} />
										GitHub
									</a>
								</div>
							</div>

							<form className={style.contact_form}>
								<div className={style.form_field}>
									<label htmlFor="name">
										<span>Name</span>
										<input
											type="text"
											name="name"
											id="name"
											placeholder="John Doe"
											className="border rounded shadow-sm px-3 py-2"
											required
										/>
									</label>
								</div>
								<div className={style.form_field}>
									<label htmlFor="email">
										<span>Email</span>
										<input
											type="text"
											name="email"
											id="email"
											placeholder="name@email.com"
											className="border rounded shadow-sm px-3 py-2"
											required
										/>
									</label>
								</div>
								<div className={style.form_field}>
									<label htmlFor="message">
										<span>Message</span>
										<textarea
											name="message"
											id="message"
											placeholder="Type your message here..."
											className="border rounded shadow-sm px-3 py-2"
											required
											rows={5}
										/>
									</label>
								</div>
								<div className={style.submit}>
									<button type="submit" className="btn">
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
