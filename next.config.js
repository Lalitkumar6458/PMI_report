/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com']
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle .docx files
    config.module.rules.push({
      test: /\.docx$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.html$/,
      use: 'html-loader',
    },)
    if (!isServer) {
      // Prevent file-system related issues on client-side
      config.resolve.fallback.fs = false;
    }

    return config;
  }


}

module.exports = nextConfig
