import { RequestHandler } from 'express';
import getData from '../services/getData.js';

export const readController: RequestHandler = (...args) => {
  return getData(...args);
};
