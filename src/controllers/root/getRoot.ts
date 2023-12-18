import { RequestHandler } from 'express';
import config from '../../configs/config.js';
import { connect } from '../../lib/utils.js';

const getRoot: RequestHandler = (_req, res) => {
  connect();
  res.status(200).json({
    name: config.name,
    description: config.description,
    version: config.version,
  });
};

export default getRoot;
