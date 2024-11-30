/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  staticPageGenerationTimeout: 800,
  output: 'export',
  env: {
    LOCAL_SEARCH_ENGINE: process.env.LOCAL_SEARCH_ENGINE,
  },
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
