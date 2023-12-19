import { RequestHandler } from 'express';
import postData from '../services/postData.js';

export const deleteController: RequestHandler = (...args) => {
  return postData(...args);
};
