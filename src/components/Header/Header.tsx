import {
	faGithub,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import useNavLine from '@/hooks/useNavLine';
import useDelayedMount from '@/hooks/useDelayedMount';
import style from './Header.module.scss';

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	// const [lineState, setLineState] = useState({ left: 0, width: 0 });
	const router = useRouter();
	const {
		lineState,
		lineRef,
		selectedRef,
		setLineToSelected,
		setLineToHovered,
	} = useNavLine();
	const shouldAnimate = useDelayedMount();

	return (
		<>
			<header className={clsx('container', style.header)}>
				<Link href="/" className={style.logo}>
					riddl.dev
				</Link>

				<nav className={style.nav} onMouseLeave={() => setLineToSelected()}>
					<div
						className={clsx('nav_line', { animate: shouldAnimate })}
						ref={lineRef}
						style={{
							left: `${lineState.left}px`,
							width: `${lineState.width}px`,
						}}
					/>
					<ul>
						<li
							ref={(ref) => {
								if (ref && router.asPath === '/') selectedRef.current = ref;
							}}
							onMouseEnter={setLineToHovered}
						>
							<Link href="/">Home</Link>
						</li>
						<li
							ref={(ref) => {
								if (ref && router.asPath === '/about')
									selectedRef.current = ref;
							}}
							onMouseEnter={setLineToHovered}
						>
							<Link href="/about">About</Link>
						</li>
						<li
							ref={(ref) => {
								if (ref && router.asPath === '/portfolio')
									selectedRef.current = ref;
							}}
							onMouseEnter={setLineToHovered}
						>
							<Link href="/portfolio">Portfolio</Link>
						</li>
						<li
							ref={(ref) => {
								if (ref && router.asPath === '/blog') selectedRef.current = ref;
							}}
							onMouseEnter={setLineToHovered}
						>
							<Link href="/blog">Blog</Link>
						</li>
						<li
							ref={(ref) => {
								if (ref && router.asPath === '/contact')
									selectedRef.current = ref;
							}}
							onMouseEnter={setLineToHovered}
						>
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
