/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  staticPageGenerationTimeout: 800,
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    );
    return config;
  },
};

module.exports = nextConfig
