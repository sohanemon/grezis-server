import { RequestHandler } from 'express';
import config from '../../configs/config.js';
import { getEmployee } from '../../lib/utils.js';

const getRoot: RequestHandler = async (_req, res) => {
  getEmployee();
  res.status(200).json({
    name: config.name,
    description: config.description,
    version: config.version,
  });
};

export default getRoot;
