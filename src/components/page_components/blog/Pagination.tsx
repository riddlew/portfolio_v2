import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import style from './Pagination.module.scss';

type Props = {
	numPages: number;
};

export const Pagination = ({ numPages }: Props) => {
	const router = useRouter();
	const curPage = router.query.slug ? Number(router.query.slug[0]) : 1;
	const prevLink = curPage > 1 ? `/blog/${curPage - 1}` : `/blog/${curPage}`;
	const nextLink =
		curPage < numPages ? `/blog/${curPage + 1}` : `/blog/${curPage}`;

	return (
		<div className={style.pagination}>
			<Link
				href="/blog"
				className={clsx(style.btn, { [style.btn_disabled]: curPage === 1 })}
			>
				First
			</Link>
			<Link
				href={prevLink}
				className={clsx(style.btn, { [style.btn_disabled]: curPage === 1 })}
			>
				&lt;
			</Link>

			<span className={style.page_text}>
				Page {curPage} of {numPages}
			</span>

			<Link
				href={nextLink}
				className={clsx(style.btn, {
					[style.btn_disabled]: curPage === numPages,
				})}
			>
				&gt;
			</Link>
			<Link
				href={`/blog/${numPages}`}
				className={clsx(style.btn, {
					[style.btn_disabled]: curPage === numPages,
				})}
			>
				Last
			</Link>
		</div>
	);
};
