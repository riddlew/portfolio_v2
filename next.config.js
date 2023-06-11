/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: false, // Disabled due to react-tooltip errors caused by swcMinify
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles/')],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
		],
	},
};

module.exports = nextConfig;
