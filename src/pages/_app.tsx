import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/global.css';
import '@/styles/global.scss';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
