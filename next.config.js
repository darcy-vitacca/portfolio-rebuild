/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['ik.imagekit.io'],
		formats: ['image/webp'],
		allowFutureImage: true,
	},
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
};

module.exports = nextConfig;
