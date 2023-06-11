import {
	faGithub,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import style from './Header.module.scss';

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className={style.header}>
				<Link href="/" className={style.logo}>
					riddl.dev
				</Link>

				<nav className={style.nav}>
					<div className={style.nav_line} />
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/portfolio">Portfolio</Link>
						</li>
						<li>
							<Link href="/blog">Blog</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>

				<div className={style.socials}>
					<a
						href="https://www.linkedin.com/in/wyatt-r/"
						rel="nofollow"
						title="View Wyatt's LinkedIn"
					>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
					<a
						href="https://twitter.com/riddlew_"
						rel="nofollow"
						title="View Wyatt's Twitter"
					>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a
						href="https://github.com/riddlew"
						rel="nofollow"
						title="View Wyatt's GitHub"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>

				<button
					type="button"
					className={style.mobile_btn}
					onClick={() => setMenuOpen((prev) => !prev)}
				>
					<FontAwesomeIcon icon={faBars} fixedWidth />
				</button>
			</header>

			{menuOpen && (
				<div className={style.mobile_menu}>
					<div className="container">
						<div className={style.mobile_menu_btn}>
							<button type="button" onClick={() => setMenuOpen(false)}>
								<FontAwesomeIcon icon={faBars} fixedWidth />
							</button>
						</div>

						<nav className={style.mobile_menu_nav}>
							<ul>
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
									<Link href="/about">About</Link>
								</li>
								<li>
									<Link href="/portfolio">Portfolio</Link>
								</li>
								<li>
									<Link href="/blog">Blog</Link>
								</li>
								<li>
									<Link href="/contact">Contact</Link>
								</li>
							</ul>

							<ul className={style.mobile_menu_socials}>
								<li>
									<a
										href="https://www.linkedin.com/in/wyatt-r/"
										rel="nofollow"
										title="View Wyatt's LinkedIn"
									>
										<FontAwesomeIcon icon={faLinkedinIn} />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/riddlew_"
										rel="nofollow"
										title="View Wyatt's Twitter"
									>
										<FontAwesomeIcon icon={faTwitter} />
									</a>
								</li>
								<li>
									<a
										href="https://github.com/riddlew"
										rel="nofollow"
										title="View Wyatt's GitHub"
									>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			)}
		</>
	);
};
