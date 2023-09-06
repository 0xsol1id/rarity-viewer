
/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

/** eslint-disable @typescript-eslint/no-var-requires */

// add this if you need LESS
// also install less and less-loader
// const withLess = require("next-with-less");

const plugins = [
  // add this if you need LESS
  // [withLess, {
  //   lessLoaderOptions: {
  //     /* ... */
  //   },
  // }],
  [
    {
      webpack5: true,
      reactStrictMode: true,
    },
  ],
];

const nextConfig = {
  distDir: "build",
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      // FIX this
      // Disable minimize to make it work with Candy Machine template
      // minimization brakes Public Key names
      config.optimization.minimize = false;
    }
    return config;
  },
};

const Uri = {
  async rewrites() {
    return [
      {
        source: '/smb/:name*',
        destination: 'http://localhost:3069/smb/name/:name*',
      },
    ]
  },
}

module.exports =
  withPlugins(plugins, nextConfig, Uri),
  {
    env: {
      cmID: 'CANDY_MACHINE_ID',
    }
  }