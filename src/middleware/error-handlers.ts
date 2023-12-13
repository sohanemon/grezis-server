import express, { ErrorRequestHandler, RequestHandler } from 'express';
import config from '../configs/config.js';

const error: ErrorRequestHandler = (err, _req, res) => {
  console.error(err);
  return res.status(500).json({
    message:
      config.nodeEnv === 'production' ? 'Something went wrong' : `${err}`,
  });
};

const notFound: RequestHandler = (_req, res) => {
  return res.status(404).json({ message: 'Route not found' });
};

export const setupErrorHandlers = (app: express.Application) => {
  app.use(notFound);
  app.use(error);
};
