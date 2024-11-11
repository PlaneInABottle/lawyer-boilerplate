import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
            },
        ],
    },
};

export default withNextIntl(nextConfig);
