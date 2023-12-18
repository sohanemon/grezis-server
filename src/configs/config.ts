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
  sql: {
    server: process.env.AZURE_SERVER,
    database: process.env.AZURE_DATABASE,
    user: process.env.AZURE_USER,
    password: process.env.AZURE_PASSWORD,
    driver: 'msnodesqlv8',
    options: {
      encrypt: true,
      trustedConnection: true,
    },
  },
};

export default config;
