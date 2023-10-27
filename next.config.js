/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    experimental: {nftTracing: true},
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;
