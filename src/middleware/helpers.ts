import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { validateAccessToken } from './validate-access-token.js';

export const setupHelpers = (app: express.Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use(cors());

  app.use(helmet());
  app.use(morgan('tiny'));

  app.use('/api/:model', validateAccessToken);
};
