import { RequestHandler } from 'express';
import deleteData from '../services/deleteData.js';

export const deleteController: RequestHandler = (...args) => {
  return deleteData(...args);
};
