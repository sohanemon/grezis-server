import { RequestHandler } from 'express';
import config from '../../configs/config.js';

const getRoot: RequestHandler = async (_req, res) => {
  res.status(200).json({
    name: config.name,
    description: config.description,
    version: config.version,
  });
};

export default getRoot;
