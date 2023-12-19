import { RequestHandler } from 'express';
import postData from '../services/postData.js';

export const updateController: RequestHandler = (...args) => {
  return postData(...args);
};
