/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
            protocol : "https",
            search : "",
            hostname : "lh3.googleusercontent.com",
            search : ""
        }
      ]
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
  
};

export default nextConfig;
