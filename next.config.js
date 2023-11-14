/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "admin.machhub.dk",
      "cdn.yemek.com",
      "www.shutterstock.com",
      "i.pinimg.com",
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
