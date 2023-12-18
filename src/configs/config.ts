const config = {
  version: '1.0.0',
  name: 'Grezis',
  description: 'This is the express server for grezis api',

  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ?? 5000,

  clientCorsOrigins: {
    development: process.env.DEV_ORIGIN ?? '*',
    production: process.env.PROD_ORIGIN ?? 'none',
  },
};

export default config;
