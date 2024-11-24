import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: 'images.pexels.com',
            },
            {
                hostname: 'csimg.nyc3.cdn.digitaloceanspaces.com',
            },
            {
                hostname: 'images.unsplash.com',
            },
        ],
    },
    // experimental: {
    //     optimizeCss: true,
    // },
};

export default withNextIntl(nextConfig);
