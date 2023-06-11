import Image from 'next/image';
import Link from 'next/link';
import style from './Hero.module.scss';

export const Hero = () => (
	<section className="section">
		<div className="container">
			<div className={style.hero}>
				<Image
					src="/avatar.png"
					alt="Picture of Wyatt Riddle"
					className={style.hero_img}
					width="250"
					height="250"
				/>
				<div className={style.hero_info}>
					<span className={style.hero_hello}>Hello, I&apos;m</span>
					<h1 className={style.hero_name}>Wyatt Riddle</h1>
					<p>
						I&apos;m a Software Engineer with experience in React, Typescript,
						Express.js, and Ruby on Rails.
					</p>
					<div className={style.hero_btns}>
						<Link href="contact">Hire Me</Link>
						<Link
							href="about"
							title="Learn more about Wyatt"
							className={style.btn__alt}
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
);
