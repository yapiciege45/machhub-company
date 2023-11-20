/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "admin.machhub.dk",
      "cdn.yemek.com",
      "www.shutterstock.com",
      "i.pinimg.com",
      "nadmin.machhub.dk",
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
