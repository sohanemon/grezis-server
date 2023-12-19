import { RequestHandler } from 'express';
import postData from '../services/postData.js';

export const createController: RequestHandler = (...args) => {
  return postData(...args);
};
