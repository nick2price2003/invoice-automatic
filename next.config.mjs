/* eslint-disable @typescript-eslint/no-var-requires */
import withBundleAnalyzer from '@next/bundle-analyzer';
import { resolve } from 'path';

const __dirname = resolve();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // minify faster
  swcMinify: true,

  reactStrictMode: false,
  transpilePackages: ['common'],

  experimental: {
    outputFileTracingRoot: resolve(__dirname, '..'),
  },
};

const bundleAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

/**
 * @type {import('next').NextConfig}
 */
export default bundleAnalyzer({
  ...nextConfig,
  images: {
    domains: [
    ],
  },
});
