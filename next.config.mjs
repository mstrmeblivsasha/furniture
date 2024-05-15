/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        TELEGRAM_API: process.env.TELEGRAM_API,
    }
};

export default nextConfig;
