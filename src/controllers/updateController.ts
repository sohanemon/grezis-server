import { RequestHandler } from 'express';
import patchData from '../services/patchData.js';

export const updateController: RequestHandler = (...args) => {
  return patchData(...args);
};
