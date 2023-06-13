import Head from 'next/head';
import { useForm } from 'react-hook-form';
import Nav from '@/components/Header';
import Footer from '@/components/Footer';
import style from '@/styles/pages/contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import {
	faCircleCheck,
	faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors, isSubmitSuccessful, isSubmitting },
	} = useForm({ mode: 'onTouched' });
	const [isSuccess, setIsSuccess] = useState(false);
	const [message, setMessage] = useState('');

	const onSubmit = async (data, e) => {
		console.log(data);

		setValue('subject', 'New message from riddl.dev');

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(data, null, 2),
			});
			const json = await response.json();
			if (json.success) {
				setIsSuccess(true);
				setMessage(json.message);
				e.target.reset();
				reset();
			}
		} catch (err) {
			setIsSuccess(false);
			setMessage(err.toString());
			console.error(err);
		}
	};

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
									You can contact me by finding me on social media, using the
									contact form on this page, or emailing me at{' '}
									<a href="mailto:wriddl.dev@gmail.com">wriddl.dev@gmail.com</a>
									.
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

							{isSubmitSuccessful && isSuccess && (
								<div className="callout success" style={{ margin: 0 }}>
									<div className="callout__icon">
										<FontAwesomeIcon icon={faCircleCheck} size="lg" />
									</div>
									<div className="callout__content">
										<div className="callout__title">
											Message sent successfully!
										</div>
										<div className="callout__body">{message}</div>
									</div>
								</div>
							)}
							{isSubmitSuccessful && !isSuccess && (
								<div className="callout alert" style={{ margin: 0 }}>
									<div className="callout__icon">
										<FontAwesomeIcon icon={faCircleExclamation} size="lg" />
									</div>
									<div className="callout__content">
										<div className="callout__title">
											Unable to send message :&#40;
										</div>
										<div className="callout__body">{message}</div>
									</div>
								</div>
							)}

							{!isSubmitSuccessful && (
								<form
									className={style.contact_form}
									onSubmit={handleSubmit(onSubmit)}
								>
									<input
										type="hidden"
										value="cb54256e-f349-4824-a8ff-da098284d90d"
										{...register('access_key')}
									/>
									<input
										type="hidden"
										value="New message from riddl.dev"
										{...register('subject')}
									/>
									<input
										type="checkbox"
										className="hidden"
										style={{ display: 'none' }}
										{...register('botcheck')}
									/>
									<div className={style.form_field}>
										<label htmlFor="name">
											<span>Name</span>
											{errors.name?.type === 'required' && (
												<span className={style.error_msg}>
													Name is required
												</span>
											)}
											<input
												type="text"
												id="name"
												placeholder="John Doe"
												autoComplete="false"
												className="border rounded shadow-sm px-3 py-2"
												aria-invalid={errors.name ? 'true' : 'false'}
												{...register('name', { required: true })}
											/>
										</label>
									</div>
									<div className={style.form_field}>
										<label htmlFor="email">
											<span>Email</span>
											{errors.email?.type === 'required' && (
												<span className={style.error_msg}>
													Email is required
												</span>
											)}
											{errors.email?.type === 'pattern' && (
												<span className={style.error_msg}>
													Not a valid email address
												</span>
											)}
											<input
												type="text"
												id="email"
												placeholder="name@email.com"
												autoComplete="false"
												className="border rounded shadow-sm px-3 py-2"
												aria-invalid={errors.email ? 'true' : 'false'}
												{...register('email', {
													required: true,
													pattern: /^\S+@\S+$/i,
												})}
											/>
										</label>
									</div>
									<div className={style.form_field}>
										<label htmlFor="message">
											<span>Message</span>
											{errors.message?.type === 'required' && (
												<span className={style.error_msg}>
													Message is required
												</span>
											)}
											<textarea
												id="message"
												placeholder="Type your message here..."
												className="border rounded shadow-sm px-3 py-2"
												rows={5}
												aria-invalid={errors.message ? 'true' : 'false'}
												{...register('message', { required: true })}
											/>
										</label>
									</div>
									<div className={style.submit}>
										<button type="submit" className="btn">
											{isSubmitting ? (
												<svg
													className={style.spinner}
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className={style.spinner_circle}
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth={4}
													/>
													<path
														className={style.spinner_path}
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													/>
												</svg>
											) : (
												'Send Message'
											)}
										</button>
									</div>
								</form>
							)}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
