/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for the App Router
  output: 'standalone',
  
  // Configure file upload limits (optional but recommended)
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
    responseLimit: false, // Disable response size limit
    externalResolver: true, // Enable external resolver
  },
  
  // Custom webpack configuration to handle file system operations
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;